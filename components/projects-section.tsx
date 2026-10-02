"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
import {
  Layers,
  FileCheck2,
  Briefcase,
  FolderOpen,
  ClipboardCheck,
  UserCheck,
  Smartphone,
  Server,
  ScanFace,
  Globe,
  Users2,
  Database,
  ShoppingBag,
  Navigation,
  Bot,
  Network,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  categories: ("all" | "universal" | "bank" | "leasing" | "insurance")[];
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  tags: string[];
  features: string[];
}

const allProjects: ProjectItem[] = [
  {
    id: "ecosystem",
    title: "Экосистема",
    shortDesc:
      "Единая цифровая среда корпоративного управления, объединяющая процессы и сервисы компании.",
    fullDesc:
      "Экосистема считается оригинальной платформой для управления внутренними и наружными информационными ресурсами организации вместе с корпоративным ведением работы на всех уровнях организации. Система разрешает сделать лучше коммуникацию, увеличить эффективность работы методом автоматизации процесса постановки и отслеживания задач, электронного документооборота и иных функций для ведения дел в организации. Гибкость системы позволяет установить как всю систему, так и модули по отдельности по запросу компании. Также, платформа может быть интегрирована с Вашими работающими системами и служить интерфейсом, позволяя централизованно вести все бизнес-процессы в компании. Внедрение системы в себя включает полноценное тестирование и обучение сотрудников для более эффективного и быстрого начала работы.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: Layers,
    iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    tags: [
      "Корпоративное управление",
      "Контроль задач",
      "Электронный документооборот",
      "Интеграция систем",
    ],
    features: [
      "Управление внутренними и внешними информационными ресурсами",
      "Постановка и отслеживание задач",
      "Электронный документооборот и автоматизация бизнес-процессов",
      "Интеграция с действующими системами компании",
    ],
  },
  {
    id: "ecosystem-edo",
    title: "Экосистема - ЭДО",
    shortDesc:
      "Цифровизация движения документов, упрощение их хранения и поиска внутри предприятия.",
    fullDesc:
      "Модуль электронного управления документами (EDM) позволяет оцифровывать движение документов по предприятию, упрощая хранение и поиск документов, экономя время сотрудников для других задач. Внедрение модуля включает комплексное тестирование и обучение сотрудников для более эффективного и быстрого начала работы.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: FileCheck2,
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    tags: ["EDM", "Хранение документов", "Быстрый поиск", "Цифровизация"],
    features: [
      "Оцифровка движения документов по предприятию",
      "Упрощенное хранение и быстрый поиск документов",
      "Экономия времени сотрудников при работе с документами",
      "Комплексное тестирование и обучение сотрудников",
    ],
  },
  {
    id: "ecosystem-assistant",
    title: "Экосистема - Аппарат и Помощник",
    shortDesc:
      "Контроль задач, отчеты об эффективности и постановка поручений руководителям организации.",
    fullDesc:
      "Модуль «Аппарат» позволяет отслеживать задачи, поставленные в соответствии со всеми необходимыми критериями, а также создавать отчеты об оценке эффективности. В то же время модуль «Помощник» предоставляет возможность определять задачи для руководителей организации, что упрощает выполнение их позже. Модули могут работать как вместе, так и по отдельности, в зависимости от пожеланий Руководства Организации. Внедрение модуля включает полное тестирование и обучение сотрудников для более быстрого и эффективного начала работы.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: Briefcase,
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    tags: [
      "Контроль задач",
      "Оценка эффективности",
      "Задачи руководителей",
      "Модульная работа",
    ],
    features: [
      "Контроль задач по заданным критериям",
      "Формирование отчетов об оценке эффективности",
      "Постановка задач руководителям организации",
      "Совместная или раздельная работа модулей «Аппарат» и «Помощник»",
    ],
  },
  {
    id: "ecosystem-chancellery",
    title: "Экосистема - Канцелярия",
    shortDesc:
      "Учет входящих и исходящих документов и формирование отчетов об их движении.",
    fullDesc:
      "С помощью модуля Канцелярия у организации есть возможность вести учет входящих и исходящих документов из организации. Модуль предлагает возможность формировать отчеты о движении документов для их анализа и учета. Внедрение модуля включает полные тесты и обучение сотрудников для более быстрого и эффективного начала работы.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: FolderOpen,
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    tags: [
      "Входящие документы",
      "Исходящие документы",
      "Учет документов",
      "Отчетность",
    ],
    features: [
      "Учет входящих документов организации",
      "Учет исходящих документов организации",
      "Формирование отчетов о движении документов",
      "Анализ и контроль движения документов",
    ],
  },
  {
    id: "ecosystem-workflow",
    title: "Экосистема - Делопроизводитель",
    shortDesc:
      "Регистрация и учет внутренних и внешних документов, надежное хранение, поиск и отчетность.",
    fullDesc:
      "Модуль Делопроизводитель упрощает процесс регистрации и учета внутренних и внешних документов, сокращая время их регистрации и делая хранение и поиск документов более надежным. Кроме того, модуль позволяет вести отчеты по документам для анализа движения документов. Внедрение модуля включает комплексное тестирование и обучение сотрудников для более эффективного и быстрого начала работы.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: ClipboardCheck,
    iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    tags: [
      "Регистрация документов",
      "Учет документов",
      "Хранение и поиск",
      "Отчетность",
    ],
    features: [
      "Регистрация внутренних и внешних документов",
      "Сокращение времени регистрации документов",
      "Надежное хранение и поиск документов",
      "Отчеты для анализа движения документов",
    ],
  },
  {
    id: "ecosystem-hr",
    title: "Экосистема - HR-модуль",
    shortDesc:
      "Управление кадровыми делами, наймом, мотивацией и KPI сотрудников.",
    fullDesc:
      "Модуль HR предназначен для оптимизации управления кадровыми делами, процессов найма, мотивации и мониторинга KPI сотрудников организации, что повышает ценность оценки эффективности и точного определения перемещений персонала. Внедрение модуля включает комплексное тестирование и обучение сотрудников для более эффективного и быстрого начала работы.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: UserCheck,
    iconColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    tags: ["Кадровое управление", "Найм", "Мотивация", "KPI"],
    features: [
      "Оптимизация управления кадровыми делами",
      "Автоматизация процессов найма сотрудников",
      "Мониторинг мотивации и KPI персонала",
      "Оценка эффективности и перемещений сотрудников",
    ],
  },
  {
    id: "mobile-apps",
    title: "Мобильные приложения",
    shortDesc:
      "Разработка и улучшение мобильных приложений для Android и iOS любой сложности.",
    fullDesc:
      "Мобильные приложения - один из самых эффективных способов общения с клиентами в современном цифровом мире. Наша команда предлагает разработку мобильных приложений для Android и iOS как комплексно, так и по нужным вам блокам: - легко понимаемый и приятный для глаз дизайн; - разработка приложений от начала до конца вне зависимости от сложности; - улучшение существующего приложения. При разработке приложения используются разные архитектурные методологии: микросервисные, модульные или монолитные, в зависимости от конечной цели. В процессе разработки также будут выполнены все необходимые работы по интеграции, как с внутренними, так и с внешними системами, для полноценного функционирования приложения.",
    categories: ["all", "universal", "bank"],
    categoryLabel: "Банки / Универсальный",
    icon: Smartphone,
    iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    tags: [
      "Android & iOS",
      "UI/UX-дизайн",
      "Гибкая архитектура",
      "Системные интеграции",
    ],
    features: [
      "Разработка приложений для Android и iOS любой сложности",
      "Понятный дизайн и улучшение существующих приложений",
      "Микросервисная, модульная или монолитная архитектура",
      "Интеграция с внутренними и внешними системами",
    ],
  },
  {
    id: "erp-system",
    title: "ERP система",
    shortDesc:
      "Цифровизация и автоматизация управления всеми сферами предприятия.",
    fullDesc:
      "ERP-система - наиболее подходящее решение для оцифровки и автоматизации предприятия. Наша команда поможет вам выявить процессы, требующие автоматизацию, детально спланировать и выбрать системы, которые необходимы. Сложная система охватывает управление всеми сферами бизнеса. Система ERP может работать в режиме онлайн через доступ в Интернет, а также работать локально во внутренней сети вашей компании без доступа в Интернет.",
    categories: ["all", "universal", "leasing"],
    categoryLabel: "Лизинг / Универсальный",
    icon: Server,
    iconColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    tags: ["ERP", "Автоматизация", "Управление бизнесом", "Онлайн и локально"],
    features: [
      "Выявление процессов, требующих автоматизации",
      "Детальное планирование и выбор необходимых систем",
      "Управление всеми сферами бизнеса",
      "Работа онлайн и локально во внутренней сети",
    ],
  },
  {
    id: "face-id",
    title: "FACE ID - идентификация",
    shortDesc:
      "Удаленная идентификация человека с любого устройства с камерой — в облаке или локально.",
    fullDesc:
      "Система FACE ID позволяет удаленно идентифицировать человека с любого устройства с камерой. Объем системы не ограничен - от банковского сектора до центров обслуживания населения. FACE ID - это облачное решение, которое делает его более эффективным и устойчивым к сбоям. Также система может быть установлена локально у заказчика.",
    categories: ["all", "universal", "bank"],
    categoryLabel: "Банки / Универсальный",
    icon: ScanFace,
    iconColor: "text-red-400 bg-red-500/10 border-red-500/20",
    tags: [
      "Удаленная идентификация",
      "Любая камера",
      "Облачное решение",
      "Локальная установка",
    ],
    features: [
      "Идентификация с любого устройства с камерой",
      "Применение от банков до центров обслуживания населения",
      "Масштабируемое облачное решение",
      "Возможность локальной установки у заказчика",
    ],
  },
  {
    id: "websites",
    title: "Веб-сайты",
    shortDesc:
      "Создание сайтов любого типа и сложности — от лендингов до комплексных веб-проектов.",
    fullDesc:
      "Создание сайтов любой сложности: - дизайн; - серверная часть; - база данных; - интерфейс. Многолетний опыт наших специалистов позволяет нам разрабатывать сайты любого типа, от лендингов до сайтов, для выполнения задач различной сложности.",
    categories: ["all", "universal", "insurance"],
    categoryLabel: "Страхование / Универсальный",
    icon: Globe,
    iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    tags: ["Дизайн", "Серверная часть", "База данных", "Интерфейс"],
    features: [
      "Разработка дизайна сайта",
      "Создание серверной части и базы данных",
      "Разработка пользовательского интерфейса",
      "Сайты любого типа — от лендингов до сложных решений",
    ],
  },
  {
    id: "hr-systems",
    title: "Системы для HR",
    shortDesc:
      "Подбор и управление персоналом, мотивация, KPI и автоматизация оценки эффективности.",
    fullDesc:
      "Подбор персонала, управление персоналом, мотивация сотрудников, KPI - HR-программное обеспечение включает все это. Эта система упрощает и автоматизирует процессы оценки эффективности, найма новых сотрудников и вознаграждения существующих. Внедрение системы включает в себя полное тестирование и обучение сотрудников для более эффективного и быстрого начала работы.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: Users2,
    iconColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    tags: ["Подбор персонала", "Управление персоналом", "Мотивация", "KPI"],
    features: [
      "Автоматизация подбора новых сотрудников",
      "Управление персоналом и кадровыми процессами",
      "Оценка эффективности сотрудников",
      "Автоматизация мотивации и вознаграждений",
    ],
  },
  {
    id: "custom-crm",
    title: "Custom CRM",
    shortDesc:
      "CRM для малого и среднего бизнеса: работа с клиентами, рост продаж и настраиваемые отчеты.",
    fullDesc:
      "Custom CRM - идеальное решение для малого и среднего бизнеса для установки и развития связи с клиентами и вследствие роста продаж. Настраиваемые отчеты позволяют отслеживать все показатели продаж для быстрого анализа и принятия решений. Внедрение системы включает в себя полное тестирование и обучение сотрудников для более эффективного и быстрого начала работы.",
    categories: ["all", "universal", "bank"],
    categoryLabel: "Банки / Универсальный",
    icon: Database,
    iconColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    tags: ["Малый и средний бизнес", "Работа с клиентами", "Продажи", "Отчеты"],
    features: [
      "Развитие отношений с клиентами",
      "Поддержка роста продаж",
      "Настраиваемые отчеты по показателям продаж",
      "Быстрый анализ данных для принятия решений",
    ],
  },
  {
    id: "marketplace",
    title: "Marketplace",
    shortDesc:
      "Масштабируемая B2C- и B2B-платформа с онлайн-платежами и выставлением счетов.",
    fullDesc:
      "Масштабируемая платформа электронной коммерции - отличное решение для продвижения направлений B2C и B2B вашего бизнеса. По желанию клиента платежные системы могут быть интегрированы в платформу онлайн-платежей, а система выставления счетов может быть добавлена для расчета и осуществления авансовых платежей за продукт. Наша команда опытных профессионалов предложит вам подходящее решение, которое сделает ваш бизнес гибким.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: ShoppingBag,
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    tags: ["B2C & B2B", "Онлайн-платежи", "Выставление счетов", "Масштабирование"],
    features: [
      "Масштабируемая платформа электронной коммерции",
      "Поддержка направлений B2C и B2B",
      "Интеграция систем онлайн-платежей",
      "Выставление счетов и прием авансовых платежей",
    ],
  },
  {
    id: "gps-tracking",
    title: "GPS трекинг",
    shortDesc:
      "Отслеживание транспорта в реальном времени через сайт и мобильное приложение.",
    fullDesc:
      "Система GPS-слежения позволяет отслеживать движение любого вида транспорта в компании в режиме реального времени, через сайт и мобильное приложение. Настраиваемые отчеты и статистика также дают возможность эффективно анализировать показатели расстояния и принимать необходимые решения для оптимизации логистики.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: Navigation,
    iconColor: "text-lime-400 bg-lime-500/10 border-lime-500/20",
    tags: [
      "GPS-мониторинг",
      "Реальное время",
      "Веб и мобильное приложение",
      "Отчеты и статистика",
    ],
    features: [
      "Отслеживание любого вида транспорта",
      "Мониторинг движения в режиме реального времени",
      "Доступ через сайт и мобильное приложение",
      "Отчеты и статистика для оптимизации логистики",
    ],
  },
  {
    id: "telegram-bot",
    title: "Телеграм-бот",
    shortDesc:
      "Индивидуальные Telegram-боты для продаж, платежей, поддержки и обработки лидов.",
    fullDesc:
      "Индивидуальные боты Telegram для решения любой задачи, от продажи до сбора информации, - отличное решение для вашего бизнеса и его роста. Наши специалисты комплексно подходят к разработке ботов, от аналитики до полной сдачи в эксплуатацию. Благодаря боту Telegram ваш бизнес может перевести прием платежей, техническую поддержку и обработку лидов в цифровой режим с помощью чат-ботов.",
    categories: ["all", "universal"],
    categoryLabel: "Универсальный продукт",
    icon: Bot,
    iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    tags: ["Telegram-боты", "Прием платежей", "Техподдержка", "Обработка лидов"],
    features: [
      "Разработка ботов для задач любой сложности",
      "Полный цикл — от аналитики до запуска",
      "Цифровой прием платежей через чат-бот",
      "Автоматизация поддержки и обработки лидов",
    ],
  },
  {
    id: "integrations",
    title: "Интеграция с системами",
    shortDesc:
      "Интеграция с любыми системами и веб-сервисами по необходимым протоколам.",
    fullDesc:
      "Проведение интеграций с любыми системами и веб-сервисами по необходимым протоколам. Опыт нашей команды дает возможность качественно наладить взаимодействие с сервисами и системами для Вашего бизнеса.",
    categories: ["all", "universal", "bank"],
    categoryLabel: "Банки / Универсальный",
    icon: Network,
    iconColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    tags: [
      "Системные интеграции",
      "Веб-сервисы",
      "Протоколы обмена",
      "Взаимодействие систем",
    ],
    features: [
      "Интеграция с любыми системами",
      "Подключение веб-сервисов",
      "Работа по необходимым протоколам",
      "Настройка взаимодействия сервисов для бизнеса",
    ],
  },
];

interface ProjectsSectionProps {
  onSelectProject?: (projectName: string) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<
    "universal" | "bank" | "leasing" | "insurance" | "all"
  >("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useGSAP(
    () => {
      // 1. Header elements blur-reveal
      gsap.from(".project-header-elem", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        y: 45,
        opacity: 0,
        filter: "blur(12px)",
        scale: 0.96,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "filter,transform",
      });

      // 2. Filter tabs pills entrance
      gsap.from(".project-tabs-container", {
        scrollTrigger: {
          trigger: ".project-tabs-container",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });

      // 3. Project Cards staggered entrance
      gsap.from(".project-card-item", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        y: 55,
        opacity: 0,
        scale: 0.94,
        stagger: 0.07,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    },
    { scope: sectionRef }
  );

  const tabs = [
    { id: "all", label: "Все проекты", count: 16 },
    { id: "universal", label: "Универсальные продукты", count: 16 },
    { id: "bank", label: "Банковский сектор", count: 4 },
    { id: "leasing", label: "Лизинг", count: 1 },
    { id: "insurance", label: "Страхование", count: 1 },
  ] as const;

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((p) => p.categories.includes(activeTab));

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 space-y-4">


          <h2 className="project-header-elem text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Проекты и{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89a8d6] via-[#0873b6] to-[#43609e]">
              продукты
            </span>
          </h2>


          <p className="project-header-elem text-base sm:text-lg text-zinc-400 leading-relaxed">
            Наши специализированные разработки для лидеров финтех, корпоративного и государственного сектора Узбекистана.
          </p>
        </div>

        {/* Filter Tabs Pills */}
        <div className="project-tabs-container flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                  ? "bg-gradient-to-r from-[#22448f] via-[#0873b6] to-[#43609e] text-white scale-105"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                  }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono font-bold ${isActive
                    ? "bg-white/20 text-white"
                    : "bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700"
                    }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                onClick={() => {
                  setSelectedProject(item);
                  setActiveProject(item);
                }}
                className="project-card-item group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-950/70 border border-zinc-800/80 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl border ${item.iconColor} transition-transform duration-300 group-hover:scale-110 shadow-md`}
                    >
                      <Icon className="size-5" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <CardTitle className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </CardTitle>

                  <CardDescription className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {item.shortDesc}
                  </CardDescription>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-900/90 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-medium text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Детали
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
        onOpenChangeComplete={(open) => {
          if (!open) setActiveProject(null);
        }}
      >
        {activeProject && (
          <DialogContent className="sm:max-w-xl bg-zinc-950/95 border border-blue-500/35 ring-1 ring-blue-500/20 text-zinc-100 shadow-[0_0_40px_-5px_rgba(59,130,246,0.3),0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-2xl overflow-hidden">
            {/* Subtle top ambient glow inside modal */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-500/15 via-indigo-500/10 to-transparent blur-xl pointer-events-none -z-10" />
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`p-2.5 rounded-xl border ${activeProject.iconColor}`}
                >
                  <activeProject.icon className="size-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400">
                    {activeProject.categoryLabel}
                  </span>
                  <DialogTitle className="text-2xl font-bold text-white tracking-tight">
                    {activeProject.title}
                  </DialogTitle>
                </div>
              </div>
              <DialogDescription className="text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
                {activeProject.fullDesc}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-3">
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Ключевой функционал и преимущества:
                </h4>
                <div className="space-y-2">
                  {activeProject.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Стек и стандарты:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-zinc-500">
                Готово к кастомизации и развертыванию
              </span>
              <a
                href="#contact"
                className="w-full sm:w-auto"
                onClick={() => {
                  onSelectProject?.(activeProject.title);
                  setSelectedProject(null);
                }}
              >
                <Button className="w-full sm:w-auto bg-gradient-to-r from-[#22448f] via-[#0873b6] to-[#43609e] hover:from-[#0873b6] hover:to-[#22448f] text-white font-medium cursor-pointer">
                  Обсудить этот проект
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
