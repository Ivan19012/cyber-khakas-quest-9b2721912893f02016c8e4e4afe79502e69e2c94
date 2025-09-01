import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Главная | Информационная безопасность</title>
        <meta name="description" content="Основная страница с модулями и советами по кибербезопасности." />
        <link rel="canonical" href="/home" />
      </Helmet>
      <main className="container mx-auto py-16 space-y-10">
        <section className="text-center space-y-3">
          <h1 className="font-display text-4xl font-extrabold">Добро пожаловать!</h1>
          <p className="text-muted-foreground">Вы успешно авторизованы. Начните с первых модулей или изучите советы по безопасности.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <article className="card-ui p-6 rounded-lg">
            <h2 className="font-semibold text-xl mb-2">Пароли и менеджеры</h2>
            <p className="text-muted-foreground">Создавайте длинные уникальные пароли и храните их безопасно.</p>
          </article>
          <article className="card-ui p-6 rounded-lg">
            <h2 className="font-semibold text-xl mb-2">Фишинг</h2>
            <p className="text-muted-foreground">Не переходите по подозрительным ссылкам, проверяйте адреса отправителей.</p>
          </article>
          <article className="card-ui p-6 rounded-lg">
            <h2 className="font-semibold text-xl mb-2">Приватность</h2>
            <p className="text-muted-foreground">Ограничивайте доступ к личной информации и настройте двухфакторную аутентификацию.</p>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
