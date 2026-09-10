"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Clock,
  Sparkles,
  Building,
  ShieldCheck,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ContactSectionProps {
  initialSubject?: string;
}

export function ContactSection({ initialSubject }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState(initialSubject ? `Интересует проект/услуга: ${initialSubject}` : "");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync if initialSubject changes
  React.useEffect(() => {
    if (initialSubject) {
      setMessage((prev) =>
        prev.includes(initialSubject)
          ? prev
          : `Здравствуйте! Интересует проект/услуга: "${initialSubject}". Давайте обсудим детали.`
      );
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 9) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="border-blue-500/30 bg-blue-500/10 text-blue-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              >
                <Sparkles className="size-3 mr-1.5" />
                Свяжитесь с нами
              </Badge>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Давайте работать?
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Расскажите о вашем проекте и в ближайшее время мы свяжемся с вами для обсуждения всех деталей.
              </p>
            </div>

            {/* Direct contact cards */}
            <div className="space-y-4">
              <a
                href="tel:+998977112116"
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-blue-500/40 transition-all duration-200 group"
              >
                <div className="size-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-400">
                    Прямой номер телефона
                  </div>
                  <div className="text-lg font-bold font-mono text-white group-hover:text-blue-400 transition-colors">
                    +998 97 711 21 16
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="size-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-400">
                    Локация и статус
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Узбекистан, Ташкент, IT-Park
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="size-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Clock className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-400">
                    Режим работы
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Техподдержка 24/7 / Ответ в течение 15 минут
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/30 text-xs text-zinc-400 flex items-center gap-3">
              <ShieldCheck className="size-5 text-blue-400 shrink-0" />
              <span>
                Гарантируем конфиденциальность. Перед началом обсуждения деталей подписываем NDA.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-300">
                  <div className="size-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Заявка успешно отправлена!
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md leading-relaxed">
                    Спасибо, {name}! Наш эксперт уже получил вашу заявку и свяжется с вами по номеру {phone} для обсуждения деталей проекта.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("+998 ");
                      setCompany("");
                      setMessage("");
                    }}
                    variant="outline"
                    className="border-zinc-800 text-zinc-300 hover:text-white mt-4"
                  >
                    Отправить еще одну заявку
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Ваше имя */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                        Ваше имя <span className="text-blue-400">*</span>
                      </label>
                      <Input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Илон Маск"
                        className="h-11 bg-zinc-900/90 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 rounded-xl"
                      />
                    </div>

                    {/* Контактный номер */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                        Контактный номер <span className="text-blue-400">*</span>
                      </label>
                      <Input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="998 (00) 000 00 00"
                        className="h-11 bg-zinc-900/90 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 rounded-xl font-mono"
                      />
                    </div>
                  </div>

                  {/* Название компании */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Название компании
                    </label>
                    <Input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Tesla"
                      className="h-11 bg-zinc-900/90 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 rounded-xl"
                    />
                  </div>

                  {/* Сообщение */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Сообщение
                    </label>
                    <Textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Введите текст: опишите задачу, сроки или требования к проекту..."
                      className="bg-zinc-900/90 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 rounded-xl resize-none min-h-[110px]"
                    />
                  </div>

                  <p className="text-[12px] text-zinc-500 leading-relaxed">
                    Нажимая кнопку «Отправить», вы даете согласие на обработку персональных данных и подтверждаете согласие с политикой конфиденциальности.
                  </p>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl text-base shadow-xl shadow-blue-600/30 transition-all duration-200 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="size-5 animate-spin mr-2" />
                        Отправка заявки...
                      </>
                    ) : (
                      <>
                        Отправить
                        <Send className="size-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
