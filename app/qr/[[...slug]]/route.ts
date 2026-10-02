import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// QR redirect mappings
const QR_REDIRECT_MAP: Record<string, string> = {
  caselink: "https://caselink.uz/",
  davomat: "https://isds.uz/",
  fincheck: "https://fincheck.uz/",
  scada: "https://energy-scada.uz/",
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await context.params;
  const rawSlug = slug?.[0];
  const normalizedSlug = rawSlug
    ? decodeURIComponent(rawSlug).toLowerCase().trim()
    : "";

  const target = normalizedSlug ? QR_REDIRECT_MAP[normalizedSlug] : null;

  if (target) {
    const targetUrl = new URL(target, request.url);

    // Forward any incoming search query parameters (e.g. ?utm_source=qr)
    request.nextUrl.searchParams.forEach((value, key) => {
      targetUrl.searchParams.set(key, value);
    });

    return NextResponse.redirect(targetUrl, { status: 307 });
  }

  // Fallback to home page if slug is not matched or when visiting /qr
  return NextResponse.redirect(new URL("/", request.url), { status: 307 });
}
