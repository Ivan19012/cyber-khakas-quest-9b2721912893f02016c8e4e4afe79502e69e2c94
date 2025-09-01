import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <Helmet>
        <title>Аутентификация | Информационная безопасность</title>
        <meta name="description" content="Выберите способ входа: локальная учетная запись или через Moodle." />
        <link rel="canonical" href="/auth" />
      </Helmet>
      <main className="container mx-auto py-16">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold">Вход в систему</h1>
          <p className="text-muted-foreground">Продолжите через Moodle для верификации личности или создайте локальную учетную запись.</p>
          <div className="grid gap-3 justify-center">
            <Link to="/verify"><Button variant="hero" size="lg">Продолжить через Moodle</Button></Link>
            <Link to="/home"><Button size="lg">Войти локально</Button></Link>
            <Link to="/home"><Button variant="secondary">Зарегистрироваться</Button></Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Auth;
