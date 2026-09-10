"use client";

import React from "react";
import {
  Palette,
  Globe,
  Smartphone,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
  ShieldAlert,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      id: "ux-ui",
      title: "UX/UI",
      description:
        "Тестируем гипотезы на реальных примерах и проектируем дизайн мобильных и веб-интерфейсов.",
      icon: Palette,
      gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
      iconColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      accentColor: "group-hover:border-pink-500/40",
      tags: ["Figma & Design Systems", "CJM & Прототипирование", "A/B тестирование", "Mobile & Web UI"],
      features: [
        "Глубокий анализ пользовательских сценариев",
        "Адаптивный дизайн для всех типов устройств",
        "Интерактивные кликабельные прототипы",
        "Полная дизайн-система с компонентами и гайдами",
      ],
    },
    {
      id: "web-dev",
      title: "Веб-разработка",
      description:
        "Создаем высоконагруженные IT системы с применением современных технологий.",
      icon: Globe,
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      accentColor: "group-hover:border-blue-500/40",
      tags: ["High-load Architecture", "Next.js & React", "Microservices & Go", "PostgreSQL & Redis"],
      features: [
        "Отказоустойчивая микросервисная архитектура",
        "Высокая скорость отклика и оптимизация запросов",
        "Интеграция с платежными системами и банками",
        "Строгие стандарты информационной безопасности",
      ],
    },
    {
      id: "mobile-dev",
      title: "Мобильная разработка",
      description:
        "Разрабатываем приложения для android и IOS.",
      icon: Smartphone,
      gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
      iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      accentColor: "group-hover:border-indigo-500/40",
      tags: ["iOS (Swift)", "Android (Kotlin)", "React Native / Flutter", "App Store & Google Play"],
      features: [
        "Нативная производительность и плавная анимация",
        "Оффлайн-режим с локальной синхронизацией данных",
        "Push-уведомления и биометрическая авторизация",
        "Публикация и сопровождение в сторах",
      ],
    },
    {
      id: "support",
      title: "Техподдержка",
      description:
        "Обеспечиваем бесперебойную работу систем 24/7. Исправляем ошибки в коде и внедряем новый функционал.",
      icon: Headphones,
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      accentColor: "group-hover:border-emerald-500/40",
      tags: ["SLA 99.9%", "24/7 Мониторинг", "DevOps & CI/CD", "Hotfix & Масштабирование"],
      features: [
        "Круглосуточный мониторинг серверов и логов",
        "Быстрое реагирование на инциденты по регламенту",
        "Регулярные обновления безопасности и бэкапы",
        "Постоянное доразвитие и внедрение новых фичей",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge
            variant="outline"
            className="border-blue-500/30 bg-blue-500/10 text-blue-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="size-3 mr-1.5" />
            Наши компетенции
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Услуги компании
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Реализуем комплексные цифровые решения под ключ — от проектирования архитектуры и UX до запуска и круглосуточного сопровождения.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl bg-zinc-950/70 border border-zinc-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 ${service.accentColor}`}
              >
                {/* Subtle top gradient glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${service.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <CardHeader className="relative p-6 sm:p-8 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl border ${service.iconColor} transition-transform duration-300 group-hover:scale-110 shadow-lg`}
                    >
                      <Icon className="size-6" />
                    </div>

                    <a
                      href="#contact"
                      onClick={() => onSelectService?.(service.title)}
                      className="text-xs font-medium text-zinc-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
                    >
                      Заказать
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>

                  <CardTitle className="text-2xl font-bold text-white tracking-tight mb-2">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative p-6 sm:p-8 pt-2 space-y-6">
                  {/* Features list */}
                  <div className="space-y-2.5 pt-2 border-t border-zinc-900">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400"
                      >
                        <CheckCircle2 className="size-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
