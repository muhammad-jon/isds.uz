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
import { ThreeHeroVisual } from "@/components/three-hero-visual";

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

          {/* Right: High-tech 3D Holographic Core Animation (Three.js) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ThreeHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
