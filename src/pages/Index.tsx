import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import NeonNetwork from "@/components/visual/NeonNetwork";

const Index: React.FC = () => {
  const [networkSeed, setNetworkSeed] = useState(0);

  const purpleButtonClass = "bg-purple-600 text-white hover:bg-purple-500";

  const scrollToId = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: change hash
      window.location.hash = `#${id}`;
    }
  };

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

      {/* Хедер */}
      <header className="w-full py-6 bg-gradient-to-r from-purple-900 via-black to-purple-950 border-b border-purple-700">
        <nav className="container mx-auto flex items-center justify-between text-white">
          <Link to="/" className="text-lg font-extrabold tracking-tight text-white">
            Hack CTF
          </Link>

          <div className="flex gap-6">
            {/* Ведём на блоки на той же странице */}
            <a href="#theory" onClick={scrollToId("theory")} className="text-white hover:text-purple-400">Теория</a>
            <a href="#ctf" onClick={scrollToId("ctf")} className="text-white hover:text-purple-400">CTF</a>
            <a href="#about" onClick={scrollToId("about")} className="text-white hover:text-purple-400">О проекте</a>
            <a href="#team" onClick={scrollToId("team")} className="text-white hover:text-purple-400">Команда</a>
          </div>

          <div className="flex gap-3">
            {/* Войти — ведёт на внешний Moodle login */}
            <Button
              className={purpleButtonClass}
              type="button"
              onClick={() =>
                (window.location.href = "https://hackstf.ru/lms/login/index.php")
              }
            >
              Войти
            </Button>

            {/* Регистрация — ведёт на внешний Moodle signup */}
            <Button
              className={purpleButtonClass}
              type="button"
              onClick={() =>
                (window.location.href =
                  "https://hackstf.ru/lms/login/signup.php")
              }
            >
              Регистрация
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Герой-блок (CTF) */}
        <section id="ctf" className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-black to-purple-950">
          <NeonNetwork className="absolute inset-0 -z-10" seed={networkSeed} color="purple" />
          <div
            className="container mx-auto min-h-[70vh] flex items-center"
            onMouseEnter={() => setNetworkSeed((s) => s + 1)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full text-white">
              <div className="text-left px-4 md:px-0">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                  Hack CTF — Олимпиадная платформа по ИБ
                </h1>
                <p className="max-w-xl text-white/80 text-lg sm:text-xl mt-4">
                  Олимпиадная платформа по информационной безопасности «Hack CTF». Участвуй в онлайн и очных этапах, проходи верификацию через Moodle и прокачивай скиллы.
                </p>
              </div>

              <div className="flex justify-center md:justify-end px-4 md:px-0">
                <img
                  src="/assets/hero-image.png"
                  alt="Hack CTF — олимпиадная платформа"
                  className="w-full max-w-xl md:max-w-2xl hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Блок о мобильном приложении — теперь id="theory" (ссылка "Теория" ведёт сюда) */}
        <section
          id="theory"
          className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:justify-start px-4 md:px-0">
               <img
                 src="/assets/about-img.png"
                 alt="О приложении Hack CTF"
                 className="w-full max-w-sm md:max-w-md hover:scale-105 transition-transform duration-300 object-cover"
               />
            </div>

            <div className="px-4 md:px-6 text-white">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-4 leading-snug">
                Мобильное приложение Hack CTF
              </h2>
              <p className="text-white/80 text-lg sm:text-xl mb-6">
                Наше мобильное приложение позволяет изучать кибербезопасность в удобном формате, 
                проходить CTF-задания и получать баллы прямо со смартфона. Оно включает:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 text-lg">
                <li>Доступ к теоретическим материалам и тестам</li>
                <li>Практические CTF-задачи с моментальной проверкой</li>
                <li>Соревнования и рейтинги</li>
                <li>Оффлайн-режим для обучения без интернета</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Синергия технологий */}
        <section className="bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16 text-white">
          <div className="container mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-12">
              В нашем решении представлена синергия трех технологий
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  img: "/assets/icon2.png",
                  title: "Искусственный интеллект",
                  desc: "Автоматизация анализа угроз и предсказание атак с помощью современных моделей AI."
                },
                {
                  img: "/assets/icon1.png",
                  title: "Информационная безопасность",
                  desc: "Комплексная защита данных и инфраструктуры от киберугроз и утечек."
                },
                {
                  img: "/assets/icon3.png",
                  title: "Большие данные",
                  desc: "Глубокий анализ больших объемов информации для поиска закономерностей."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-4 w-28 h-28 md:w-32 md:h-32"
                  />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Анализатор сетевого трафика */}
        <section className="bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16 text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-6">
            {/* Текстовый блок */}
            <div className="break-words max-w-full">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-6 leading-snug">
                Анализатор сетевого трафика для больших данных
              </h2>
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Моделирование атак, отработка навыков на реальных данных и анализ больших дампов сетевого трафика.
                Модель ИИ для автоматического выявления опасного трафика. Программная платформа для комплексного
                анализа Big Data сетевого трафика (pcap/csv) в реальном времени и ретроспективе, которая объединяет:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 text-lg">
                <li>Распределенную обработку Big Data (PySpark) — масштабируемость от МБ до ГБ+</li>
                <li>Продвинутый ИИ для детекции угроз (LSTM, автоэнкодеры)</li>
                <li>Потоковую аналитику (Kafka/Spark Streaming)</li>
                <li>Глубокий протокольный декодинг (уровень Wireshark)</li>
                <li>Интерактивную визуализацию (GUI)</li>
              </ul>
            </div>

            {/* Картинка */}
            <div className="flex justify-center md:justify-start md:ml-12">
              <img
                src="/assets/image-6.png"
                alt="Анализатор сетевого трафика"
                className="w-full max-w-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
          </div>
        </section>

        {/* Единая экосистема и социальная сеть — id="about" (ссылка "О проекте" ведёт сюда) */}
        <section id="about" className="bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16 text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-6">
            {/* Картинка слева */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/assets/testi-people.png"
                alt="Социальная сеть Hack CTF"
                className="w-5/6 md:w-4/5 hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>

            {/* Текстовый блок справа */}
            <div className="break-words max-w-full">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-6 leading-snug">
                Единая экосистема и кроссплатформенность
              </h2>
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Наше мобильное приложение интегрирует собственную социальную сеть, где студенты и школьники могут общаться, обсуждать задания и делиться опытом. 
                Всё это происходит прямо внутри приложения, не отвлекаясь от процесса обучения и прохождения CTF-заданий.
              </p>
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Создавай своё сообщество, объединяй единомышленников и получай поддержку от других участников платформы. 
                Единая экосистема позволяет сочетать обучение, соревнования и социальное взаимодействие в одном удобном интерфейсе.
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

        {/* Команда проекта — id="team" */}
        <section id="team" className="bg-gradient-to-r from-purple-900 via-black to-purple-950 py-16 text-white">
          <div className="container mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-12">
              Команда проекта
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {[
                {
                  img: "/assets/photo1.jpg",
                  name: "Галицына Анна",
                  role: "Лидер проекта, спикер, разработчик материалов"
                },
                {
                  img: "/assets/aly.jpg",
                  name: "Ильина Алевтина",
                  role: "Разработчик продуктов проекта"
                },
                {
                  img: "/assets/photo2.jpg",
                  name: "Овсянников Александр",
                  role: "Разработчик продуктов проекта"
                }
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
          {/* Нижняя полоса */}
          <div className="border-t border-purple-700 mt-8 pt-6 text-center text-white/80 text-sm"></div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Колонка 1: О проекте */}
              <div>
                <h3 className="font-bold text-white text-lg mb-4">Hack CTF</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Олимпиадная платформа по информационной безопасности для школьников и студентов.
                  Проходи верификацию через Moodle, участвуй в CTF-соревнованиях и повышай свой уровень знаний.
                </p>
              </div>

              {/* Колонка 2: Разделы */}
              <div>
                <h3 className="font-bold text-white text-lg mb-4">Услуги</h3>
                <div className="text-white/80 text-sm space-y-2">
                  <p>
                    <span className="font-medium">Защита IP (IP Protection)</span> 
                  </p>
                  <p>
                    <span className="font-medium">Видимость данных (Data Visibility)</span>
                  </p>
                  <p>
                    <span className="font-medium">Мониторинг активности пользователей</span> 
                  </p>
                  <p>
                    <span className="font-medium">Реагирование на инциденты</span>
                  </p>
                  <p>
                    <span className="font-medium">Кибербезопасность и обучение</span>
                  </p>
                  <p>
                    <span className="font-medium">Анализ сетевого трафика (Big Data)</span>
                  </p>
                </div>
              </div>

              {/* Колонка 3: Контакты */}
              <div>
                <h3 className="font-bold text-white text-lg mb-4">Контакты</h3>
                <div className="text-white/80 text-sm space-y-2">
                  <p>
                    <span className="font-medium">Адрес:</span> г.Курск, ул. Радищева 33
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> ovsyannikov_av@kursksu.ru
                  </p>
                  <p>
                    <span className="font-medium">Телефон:</span> + 7 (909) 239 - 87 - 39
                  </p>
                  <p>
                    <span className="font-medium">Fax:</span> 7 (909) 239 - 87 - 39
                  </p>
                </div>
              </div>

              {/* Колонка 4: Регистрация */}
              <div>
                <h3 className="font-bold text-white text-lg mb-4">Присоединяйтесь</h3>
                <p className="text-white/80 text-sm mb-4">
                  Зарегистрируйтесь для участия в CTF-соревнованиях и получения доступа к образовательным материалам
                </p>
                <div className="flex flex-col space-y-2">
                </div>
              </div>
            </div>

            {/* Нижняя полоса */}
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
