"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, PhoneCall, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  onOpenCallback: () => void;
}

export function Navbar({ onOpenCallback }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Услуги", href: "#services" },
    { name: "О компании", href: "#about" },
    { name: "Проекты", href: "#projects" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? "bg-zinc-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="ISDS.UZ"
          >
            <Image
              src="/isds-light.svg"
              alt="ISDS.UZ"
              width={160}
              height={76}
              priority
              unoptimized
              className="h-10 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_16px_rgba(54,129,195,0.25)]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact & CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+998977112116"
              className="flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 px-3.5 py-2 rounded-xl transition-all group"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Phone className="size-3.5" />
              </span>
              <span className="font-mono tracking-tight font-semibold">
                +998 97 711 21 16
              </span>
            </a>

            <Button
              onClick={onOpenCallback}
              className="bg-gradient-to-r from-[#22448f] via-[#0873b6] to-[#43609e] hover:from-[#0873b6] hover:to-[#22448f] text-white shadow-lg shadow-[#0873b6]/20 rounded-xl h-10 px-4 font-medium transition-all duration-200 cursor-pointer hover:shadow-[#0873b6]/35 hover:scale-[1.02]"
            >
              <PhoneCall className="size-4 mr-2 text-blue-100" />
              Заказать звонок
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:+998977112116"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400"
              aria-label="Позвонить"
            >
              <Phone className="size-4" />
            </a>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top-5 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
            <Badge
              variant="outline"
              className="text-xs border-emerald-500/30 bg-emerald-500/10 text-emerald-400 py-0.5"
            >
              <ShieldCheck className="size-3 mr-1" />
              Резиденты IT-park с 2021 г.
            </Badge>
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-white p-2.5 rounded-lg hover:bg-zinc-900 transition-colors flex items-center justify-between"
              >
                {link.name}
                <ArrowUpRight className="size-4 text-zinc-500" />
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-zinc-900 space-y-3">
            <a
              href="tel:+998977112116"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-mono text-sm font-semibold"
            >
              <Phone className="size-4 text-blue-400" />
              +998 97 711 21 16
            </a>
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCallback();
              }}
              className="w-full bg-gradient-to-r from-[#22448f] via-[#0873b6] to-[#43609e] hover:from-[#0873b6] hover:to-[#22448f] text-white h-11 rounded-xl font-medium shadow-lg shadow-[#0873b6]/30 transition-all duration-200 cursor-pointer"
            >
              <PhoneCall className="size-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
