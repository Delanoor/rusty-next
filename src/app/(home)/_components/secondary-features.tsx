import { CalendarCheck, Fingerprint, type LucideIcon, Milestone } from 'lucide-react';
import Link from 'next/link';
import { ElementType } from 'react';
import { type IconType } from 'react-icons';
import { LiaDoorOpenSolid, LiaDraftingCompassSolid } from 'react-icons/lia';
import { PiLadder } from 'react-icons/pi';

const features: {
  name: string;
  description: string;
  href: string;
  icon: ElementType;
}[] = [
  {
    name: 'Легкий Доступ',
    description:
      'Удобная Навигация: Наша платформа обеспечивает легкий доступ к учебным материалам и курсам. Интуитивно понятный интерфейс помогает быстро находить нужные ресурсы.',
    href: 'https://habsida.com',
    icon: LiaDoorOpenSolid as ElementType,
  },
  {
    name: 'Индивидуальный Подход',
    description:
      'Персонализированное Обучение: Каждый студент получает индивидуальный учебный план, адаптированный под его уровень знаний и цели обучения.',
    href: 'https://habsida.com',
    icon: Fingerprint,
  },
  {
    name: 'Практическое Применение',
    description:
      'Интерактивные Задания: Практикуйте навыки программирования с помощью реальных проектов и интерактивных заданий, которые повышают практические навыки.',
    href: 'https://habsida.com',
    icon: LiaDraftingCompassSolid as ElementType,
  },
  {
    name: 'Экспертная Поддержка',
    description:
      'Поддержка Экспертов: Наши преподаватели – опытные программисты, готовые помочь вам на каждом этапе обучения.',
    href: 'https://habsida.com',
    icon: Milestone,
  },
  {
    name: 'Гибкость Обучения',
    description:
      'Гибкий График: Учебные материалы доступны онлайн 24/7, позволяя вам учиться в удобное для вас время.',
    href: 'https://habsida.com',
    icon: CalendarCheck as ElementType,
  },
  {
    name: 'Карьерный Рост',
    description:
      'Карьерные Перспективы: Мы предлагаем ресурсы для трудоустройства и связи с работодателями в Корее, открывая новые возможности для наших выпускников.',
    href: 'https://habsida.com',
    icon: PiLadder as ElementType,
  },
];

export default function SecondaryFeatures() {
  return (
    <div className="z-30 mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-3xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-accent-foreground">Учись быстрее</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          всё необходимое для успешного обучения и карьеры в программировании
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Наша платформа предоставляет персонализированные учебные планы, интерактивные задания по
          программированию и прямой доступ к вакансиям в Корее. Мы обеспечиваем всеобъемлющее
          обучение, от базовых концепций до продвинутых технологий, чтобы вы были готовы к успеху в
          мире IT.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground/80">
                <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
                <p className="mt-6">
                  <Link
                    href={feature.href}
                    className="text-sm font-semibold leading-6 text-blue-600"
                  >
                    Узнать Больше
                  </Link>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
