"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Phone,
  Server,
  Cpu,
  Database,
  Activity,
  CheckCircle,
  Zap,
  TrendingUp,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onOpenCallback: () => void;
}

export function HeroSection({ onOpenCallback }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Glows & Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[500px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-20 right-1/4 w-[450px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen" />
        {/* Subtle grid line overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Main Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* IT-Park Residency Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 backdrop-blur-md transition-all hover:border-emerald-500/50 group">
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2.5 bg-emerald-500" />
              </span>
              <ShieldCheck className="size-4 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-300 tracking-wide">
                Резиденты IT-park с 2021 г.
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              IT системы для{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                лидеров рынка
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed font-normal">
              Поможем произвести автоматизацию бизнес-процессов и увеличить прибыль с помощью надежных, масштабируемых и защищенных цифровых решений.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold h-12 px-7 rounded-xl shadow-xl shadow-blue-600/25 transition-all duration-200 hover:scale-[1.02] cursor-pointer text-base"
                >
                  Обсудить проект
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                onClick={onOpenCallback}
                className="w-full sm:w-auto border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium h-12 px-6 rounded-xl backdrop-blur-md cursor-pointer text-base transition-all"
              >
                <Phone className="size-4 mr-2 text-blue-400" />
                Заказать звонок
              </Button>
            </div>

            {/* Stats highlight grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 w-full border-t border-zinc-800/80 mt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center">
                  50<span className="text-blue-400">+</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">
                  Успешных проектов
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center">
                  2021<span className="text-emerald-400 font-sans text-xs ml-1 font-semibold uppercase">г.</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">
                  В IT-Park Узбекистана
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center">
                  99.9<span className="text-cyan-400">%</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">
                  Бесперебойный Uptime
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center">
                  24/7
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">
                  Мониторинг и поддержка
                </div>
              </div>
            </div>
          </div>

          {/* Right: Modern High-tech Interactive Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing gradient aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

              <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950/90 backdrop-blur-2xl p-5 shadow-2xl shadow-black/80 space-y-4">
                {/* Header bar of the mock system */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-red-500/80" />
                    <div className="size-3 rounded-full bg-yellow-500/80" />
                    <div className="size-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-zinc-400 font-medium">
                      isds-core-node // live
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono"
                  >
                    <Activity className="size-3 mr-1 animate-pulse" />
                    ONLINE
                  </Badge>
                </div>

                {/* Live System Architecture Matrix */}
                <div className="space-y-2.5">
                  {/* Item 1: Экосистема / ЭДО */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Layers className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          Экосистема & ЭДО
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          Юридически значимый документооборот
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                      Active
                    </span>
                  </div>

                  {/* Item 2: Face ID & Biometrics */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <Cpu className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          FACE ID Идентификация
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          Нейросетевая биометрия & СКУД
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      99.8% Acc
                    </span>
                  </div>

                  {/* Item 3: ERP & CRM Core */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Database className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          ERP & Custom CRM
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          Финансы, скоринг, лизинг, аналитика
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      Sync OK
                    </span>
                  </div>
                </div>

                {/* System Telemetry stats bar */}
                <div className="rounded-xl bg-black/40 border border-zinc-800/60 p-3 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-[10px] text-zinc-400">Отклик API</div>
                    <div className="text-xs font-mono font-bold text-emerald-400">
                      ~18 ms
                    </div>
                  </div>
                  <div className="border-x border-zinc-800">
                    <div className="text-[10px] text-zinc-400">Шифрование</div>
                    <div className="text-xs font-mono font-bold text-blue-400">
                      TLS / RSA
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400">Безопасность</div>
                    <div className="text-xs font-mono font-bold text-indigo-400">
                      Enterprise
                    </div>
                  </div>
                </div>

                {/* Floating bottom badge */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
                    <CheckCircle className="size-3.5 text-emerald-400" />
                    <span>Банковский стандарт защиты</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono">
                    v3.4.8-prod
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
