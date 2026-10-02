"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

interface CallbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CallbackDialog({
  open,
  onOpenChange,
}: CallbackDialogProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 9) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        onOpenChange(false);
        setSubmitted(false);
        setName("");
        setPhone("+998 ");
      }, 2500);
    }, 700);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-zinc-950/95 border-zinc-800 text-zinc-100 shadow-2xl backdrop-blur-xl">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Phone className="size-4" />
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Обратный звонок
            </span>
          </div>
          <DialogTitle className="text-xl font-bold tracking-tight text-white">
            Заказать звонок
          </DialogTitle>
          <DialogDescription className="text-zinc-400 text-sm">
            Оставьте ваши контактные данные, и наш ведущий специалист перезвонит вам в течение 15 минут.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
            <div className="size-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center animate-in zoom-in-50 duration-300">
              <CheckCircle2 className="size-6" />
            </div>
            <h4 className="text-lg font-semibold text-white">Заявка принята!</h4>
            <p className="text-sm text-zinc-400 max-w-xs">
              Спасибо, {name}! Мы свяжемся с вами в ближайшее время по номеру {phone}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300">
                Ваше имя
              </label>
              <Input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Илон Маск"
                className="bg-zinc-900/80 border-zinc-800 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 text-white placeholder:text-zinc-600 h-10"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300">
                Контактный номер
              </label>
              <Input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 97 711 21 16"
                className="bg-zinc-900/80 border-zinc-800 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 text-white placeholder:text-zinc-600 h-10"
              />
            </div>
            <p className="text-[11px] text-zinc-500">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных и обратную связь.
            </p>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#22448f] via-[#0873b6] to-[#43609e] hover:from-[#0873b6] hover:to-[#22448f] text-white font-medium h-10 shadow-lg shadow-[#0873b6]/25 transition-all cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin mr-2" />
                  Отправка...
                </>
              ) : (
                <>
                  Заказать звонок
                  <ArrowRight className="size-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
