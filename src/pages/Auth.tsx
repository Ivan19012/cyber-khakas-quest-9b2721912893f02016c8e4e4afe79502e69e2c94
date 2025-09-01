import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <Helmet>
        <title>Аутентификация | Информационная безопасность</title>
        <meta
          name="description"
          content="Выберите способ входа: локальная учетная запись или через Moodle."
        />
        <link rel="canonical" href="/auth" />
      </Helmet>

      <main className="container mx-auto py-16">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold">
            Вход в систему
          </h1>
          <p className="text-muted-foreground">
            Продолжите через Moodle для верификации личности или создайте локальную
            учетную запись.
          </p>

          <div className="grid gap-3 justify-center">
            {/* Перенаправление на Moodle (внешний URL) */}
            <Button
              variant="hero"
              size="lg"
              type="button"
              onClick={() =>
                (window.location.href = "https://hackstf.ru/lms/login/index.php")
              }
            >
              Продолжить через Moodle
            </Button>

            {/* Локальный вход остаётся через react-router */}
            <Link to="/home">
              <Button size="lg">Войти локально</Button>
            </Link>

            {/* Регистрация — вести на внешний URL Moodle signup */}
            <Button
              variant="secondary"
              type="button"
              onClick={() =>
                (window.location.href =
                  "https://hackstf.ru/lms/login/signup.php")
              }
            >
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Auth;