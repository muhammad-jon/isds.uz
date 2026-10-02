"use client";

import React, { useRef } from "react";
import {
  Handshake,
  ShieldCheck,
  MessageSquare,
  GraduationCap,
  Building2,
  CheckCircle,
  Award,
  Users,
  Compass,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Section Header Blur-Reveal
      gsap.from(".about-header-elem", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        y: 45,
        opacity: 0,
        filter: "blur(12px)",
        scale: 0.96,
        stagger: 0.14,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "filter,transform",
      });

      // 2. Credibility Box
      gsap.from(".about-credibility-box", {
        scrollTrigger: {
          trigger: ".about-credibility-box",
          start: "top 82%",
        },
        y: 45,
        opacity: 0,
        scale: 0.96,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });

      // 3. Core Principles Cards Stagger
      gsap.from(".about-principle-card", {
        scrollTrigger: {
          trigger: ".about-principles-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        scale: 0.93,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    },
    { scope: sectionRef }
  );
  const principles = [
    {
      id: "trust",
      title: "Взаимное доверие",
      description:
        "Это основа наших отношений с клиентами. Вне зависимости от формы договоренности мы всегда соблюдаем свои обещания.",
      icon: Handshake,
      badge: "Фундамент партнерства",
      color: "from-blue-500/20 via-blue-500/5 to-transparent",
      iconStyle: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      id: "responsibility",
      title: "Ответственность",
      description:
        "С нами комфортно сотрудничать. Мы несем полностью ответственность за результат своей работы.",
      icon: ShieldCheck,
      badge: "Гарантия качества",
      color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      iconStyle: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      id: "communication",
      title: "Коммуникация",
      description:
        "Всегда на связи и готовы решать любые вопросы в процессе работы над проектом.",
      icon: MessageSquare,
      badge: "Открытый диалог",
      color: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      iconStyle: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      id: "growth",
      title: "Саморазвитие",
      description:
        "Наши специалисты постоянно развивают свою экспертность и тем самым повышают качество наших услуг.",
      icon: GraduationCap,
      badge: "Экспертиза и стек",
      color: "from-indigo-500/20 via-indigo-500/5 to-transparent",
      iconStyle: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">

          <h2 className="about-header-elem text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Принципы, которых{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89a8d6] via-[#0873b6] to-[#43609e]">
              мы придерживаемся
            </span>
          </h2>


          <p className="about-header-elem text-base sm:text-lg text-zinc-400 leading-relaxed">
            Мы строим долгосрочные партнерские отношения, опираясь на честность, инженерную культуру и ответственность за каждый байт кода.
          </p>
        </div>

        {/* Big Credibility Box: Cyber Park resident & 5+ Years Milestones */}
        <div className="about-credibility-box mb-14 rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-950 via-zinc-900/90 to-zinc-950 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-[#0873b6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Enterprise Capabilities & Commitments */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                ISDS — Экспертиза в разработке масштабных IT-систем
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Специализируемся на проектировании, разработке и сопровождении сложных enterprise-систем: банковский сектор, лизинговые и страховые организации, электронный документооборот, биометрические Face ID комплексы и масштабные ERP решения.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-sm text-zinc-300 whitespace-nowrap">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0" />
                  <span className="whitespace-nowrap">Прозрачный договор и NDA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300 whitespace-nowrap">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0" />
                  <span className="whitespace-nowrap">Стандарты Cyber Park</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300 whitespace-nowrap">
                  <CheckCircle className="size-4 text-emerald-400 shrink-0" />
                  <span className="whitespace-nowrap">Выделенные команды сеньоров</span>
                </div>
              </div>
            </div>

            {/* Right: Two Distinct Milestone Blocks */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Block 1: Cyber Park Resident (2023 - 2026) */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-emerald-500/25 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="size-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Аккредитация
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-mono tracking-tight">
                    2023 — 2026
                  </div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mt-1">
                    Резиденты Cyber Park
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                    Технологический парк кибербезопасности Узбекистана
                  </p>
                </div>
              </div>

              {/* Block 2: 2021 dan hozirgacha (2026) */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-blue-500/25 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0873b6]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0873b6]/20 transition-all" />
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Award className="size-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Опыт
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-mono tracking-tight">
                    2021 — 2026
                  </div>
                  <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider mt-1">
                    5+ лет разработки
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                    Стабильный рост, зрелые IT-процессы и надежность
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="about-principles-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.id}
                className="about-principle-card group relative overflow-hidden rounded-2xl bg-zinc-950/80 border border-zinc-800/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/50"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${p.color} opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <CardHeader className="relative p-6 pb-2">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl border ${p.iconStyle} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 font-semibold uppercase">
                      0{principles.indexOf(p) + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-medium text-blue-400 uppercase tracking-wider mb-1 block">
                    {p.badge}
                  </span>

                  <CardTitle className="text-xl font-bold text-white tracking-tight">
                    {p.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative p-6 pt-2">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {p.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
