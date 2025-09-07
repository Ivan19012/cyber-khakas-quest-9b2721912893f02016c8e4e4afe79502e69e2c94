import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import NeonNetwork from "@/components/visual/NeonNetwork";

const Index: React.FC = () => {
  const [networkSeed, setNetworkSeed] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const purpleButtonClass = "bg-purple-600 text-white hover:bg-purple-500";

  // Функция плавного скролла к элементу по id и закрытия моб. меню
  const scrollToId = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = `#${id}`;
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: "theory", label: "Теория" },
    { id: "ctf", label: "CTF" },
    { id: "about", label: "О проекте" },
    { id: "team", label: "Команда" },
  ];

  return (
    <>
      <Helmet>
        <title>Hack CTF — олимпиадная платформа по ИБ</title>
        <meta
          name="description"
          content="Hack CTF — черно-фиолетовая платформа олимпиад по информационной безопасности для школьников и студентов. Верификация через Moodle."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <header className="w-full bg-gradient-to-r from-purple-900 via-black to-purple-950 border-b border-purple-700 relative z-50">
        <nav className="container mx-auto flex items-center justify-between px-4 py-6 relative">
          <Link to="/" className="text-lg font-extrabold tracking-tight text-white z-20">
            Hack CTF
          </Link>
          {/* Гамбургер для мобилки */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden z-30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Десктопное меню */}
          <div className="hidden md:flex gap-6 select-none">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={scrollToId(item.id)}
                className="text-white hover:text-purple-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Кнопки Войти и Регистрация (десктоп) */}
          <div className="hidden md:flex gap-3">
            <Button
              className={purpleButtonClass}
              type="button"
              onClick={() => (window.location.href = "https://hackstf.ru/lms/login/index.php")}
            >
              Войти
            </Button>
            <Button
              className={purpleButtonClass}
              type="button"
              onClick={() => (window.location.href = "https://hackstf.ru/lms/login/signup.php")}
            >
              Регистрация
            </Button>
          </div>
        </nav>

        {/* Мобильное меню с анимацией */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden w-full border-t border-purple-700 bg-gradient-to-r from-purple-900 via-black to-purple-950 text-white overflow-hidden"
            >
              <div className="flex flex-col items-center py-6 space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={scrollToId(item.id)}
                    className="text-white text-lg hover:text-purple-400 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}

                <Button
                  className={purpleButtonClass + " w-4/5"}
                  type="button"
                  onClick={() => (window.location.href = "https://hackstf.ru/lms/login/index.php")}
                >
                  Войти
                </Button>
                <Button
                  className={purpleButtonClass + " w-4/5"}
                  type="button"
                  onClick={() => (window.location.href = "https://hackstf.ru/lms/login/signup.php")}
                >
                  Регистрация
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Контент */}
      <main>
        {/* Герой-блок */}
        <section
          id="ctf"
          className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-black to-purple-950"
        >
          <NeonNetwork className="absolute inset-0 -z-10" seed={networkSeed} color="purple" />
          <div
            className="container mx-auto min-h-[70vh] flex flex-col md:flex-row items-center"
            onMouseEnter={() => setNetworkSeed((s) => s + 1)}
          >
            {/* Текст и заголовок */}
            <div className="text-left px-4 md:px-0 md:w-1/2 mt-10 md:mt-0">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Hack CTF — Олимпиадная платформа по ИБ
              </h1>
              <p className="max-w-xl text-white/80 text-lg sm:text-xl">
                Олимпиадная платформа по информационной безопасности «Hack CTF». Участвуй в онлайн и очных этапах,
                прокачивая скиллы.
              </p>
            </div>

            {/* Картинка */}
            <div className="flex justify-center md:justify-end px-4 md:px-0 md:w-1/2 mt-8 md:mt-0 w-full max-w-2xl">
              <img
                src="/assets/hero-image.png"
                alt="Hack CTF — олимпиадная платформа"
                className="w-full hover:scale-105 transition-transform duration-300 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Теория — фото, заголовок, описание идут вертикально на мобилках */}
        <section
          id="theory"
          className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16"
        >
          <div className="container mx-auto px-4 md:px-0">
            {/* Фото с заголовком и списком под ним */}
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="md:w-1/2 flex justify-center md:justify-start">
                <img
                  src="/assets/about-img.png"
                  alt="О приложении Hack CTF"
                  className="w-full max-w-sm md:max-w-md rounded-lg hover:scale-105 transition-transform duration-300 object-cover shadow-md"
                />
              </div>

              <div className="md:w-1/2 text-white">
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-4 leading-snug">
                  Мобильное приложение Hack CTF
                </h2>
                <p className="text-white/80 text-lg sm:text-xl mb-6">
                  Наше мобильное приложение позволяет изучать кибербезопасность в удобном формате, проходить CTF-задания и получать баллы прямо со смартфона. Оно включает:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 text-lg">
                  <li>Доступ к теоретическим материалам и тестам</li>
                  <li>Практические CTF-задачи с моментальной проверкой</li>
                  <li>Соревнования и рейтинги</li>
                  <li>Оффлайн-режим для обучения без интернета</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Секция синергии технологий - отдельно каждый блок вертикально по 1 фото + заголовок + описание */}
        <section className="bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16 text-white">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-12">
              В нашем решении представлена синергия трех технологий
            </h2>

            {/* Делать карты вертикально на мобилках */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-12">
              {[
                {
                  img: "/assets/icon2.png",
                  title: "Искусственный интеллект",
                  desc: "Автоматизация анализа угроз и предсказание атак с помощью современных моделей AI.",
                },
                {
                  img: "/assets/icon1.png",
                  title: "Информационная безопасность",
                  desc: "Комплексная защита данных и инфраструктуры от киберугроз и утечек.",
                },
                {
                  img: "/assets/icon3.png",
                  title: "Большие данные",
                  desc: "Глубокий анализ больших объемов информации для поиска закономерностей.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-4 w-28 h-28 md:w-32 md:h-32"
                  />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 max-w-xs md:max-w-none">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Анализатор сетевого трафика - фото с заголовком и описанием вертикально */}
        <section className="bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 max-w-full">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-6 leading-snug">
                Анализатор сетевого трафика для больших данных
              </h2>
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Моделирование атак, отработка навыков на реальных данных и анализ больших дампов сетевого трафика. Модель ИИ для автоматического выявления опасного трафика. Программная платформа для комплексного анализа Big Data сетевого трафика (pcap/csv) в реальном времени и ретроспективе, которая объединяет:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 text-lg">
                <li>Распределенную обработку Big Data (PySpark) — масштабируемость от МБ до ГБ+</li>
                <li>Продвинутый ИИ для детекции угроз (LSTM, автоэнкодеры)</li>
                <li>Потоковую аналитику (Kafka/Spark Streaming)</li>
                <li>Глубокий протокольный декодинг (уровень Wireshark)</li>
                <li>Интерактивную визуализацию (GUI)</li>
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-start md:ml-12 w-full max-w-xl">
              <img
                src="/assets/image-6.png"
                alt="Анализатор сетевого трафика"
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
          </div>
        </section>

        {/* Единая экосистема и соцсеть по схеме вертикального расположения фото и текста */}
        <section
          id="about"
          className="bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16 text-white"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-6">
            <div className="flex justify-center md:justify-start">
              <img
                src="/assets/testi-people.png"
                alt="Социальная сеть Hack CTF"
                className="w-5/6 md:w-4/5 hover:scale-105 transition-transform duration-300 object-contain rounded-lg shadow-md"
              />
            </div>

            <div className="break-words max-w-full">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-6 leading-snug">
                Единая экосистема и кроссплатформенность
              </h2>
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Наше мобильное приложение интегрирует собственную социальную сеть, где студенты и школьники могут общаться, обсуждать задания и делиться опытом. Всё это происходит прямо внутри приложения, не отвлекаясь от процесса обучения и прохождения CTF-заданий.
              </p>
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Создавай своё сообщество, объединяй единомышленников и получай поддержку от других участников платформы. Единая экосистема позволяет сочетать обучение, соревнования и социальное взаимодействие в одном удобном интерфейсе.
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 text-lg">
                <li>Социальная сеть прямо в приложении</li>
                <li>Создание и участие в комьюнити</li>
                <li>Обмен опытом и совместное решение задач</li>
                <li>Кроссплатформенность: Android и iOS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Команда проекта */}
        <section
          id="team"
          className="bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16 text-white"
        >
          <div className="container mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-20">Команда проекта</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {[
                {
                  img: "/assets/photo1.jpg",
                  name: "Галицына Анна",
                  role: "Лидер проекта, спикер, разработчик материалов",
                },
                {
                  img: "/assets/aly.jpg",
                  name: "Ильина Алевтина",
                  role: "Разработчик продуктов проекта",
                },
                {
                  img: "/assets/photo2.jpg",
                  name: "Овсянников Александр",
                  role: "Разработчик продуктов проекта",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white rounded-full p-2 w-40 h-40 flex items-center justify-center shadow-lg">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                  <p className="text-white/80 mt-1 text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Футер */}
        <footer className="bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16 text-white">
          <div className="border-t border-purple-700 mt-8 pt-6 text-center text-white/80 text-sm"></div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-white text-lg mb-4">Hack CTF</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Олимпиадная платформа по информационной безопасности для школьников и студентов. Участвуй в CTF-соревнованиях и повышай свой уровень знаний.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-lg mb-4">Наши продукты</h3>
                <div className="text-white/80 text-sm space-y-2">
                  <p>
                    <span className="font-medium">Веб-плафторма</span>
                  </p>
                  <p>
                    <span className="font-medium">Мобильное приложение</span>
                  </p>
                  <p>
                    <span className="font-medium">Анализатор сетевого трафика для больших данных</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-white text-lg mb-4">Контакты</h3>
                <div className="text-white/80 text-sm space-y-2">
                  <p>
                    <span className="font-medium">Адрес:</span> г.Курск, ул. Радищева 33
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    <a href="mailto:ovsyannikov_av@kursksu.ru" className="underline hover:text-purple-400">
                      ovsyannikov_av@kursksu.ru
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Телефон:</span> +7 (909) 239 - 87 - 39
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-white text-lg mb-4">Присоединяйтесь</h3>
                <p className="text-white/80 text-sm mb-4">
                  <a
                    href="https://vk.com/hackctf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-purple-400"
                  >
                    https://vk.com/hackctf
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-purple-700 mt-8 pt-6 text-center text-white/80 text-sm">
              <p>© {new Date().getFullYear()} Hack CTF. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;