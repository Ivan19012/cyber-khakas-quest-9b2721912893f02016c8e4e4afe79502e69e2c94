import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Verify = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { search } = useLocation();

  const token = useMemo(() => new URLSearchParams(search).get("token"), [search]);

  useEffect(() => {
    if (token) {
      toast({ title: "Верификация успешна", description: "Добро пожаловать!" });
      const t = setTimeout(() => navigate("/home"), 800);
      return () => clearTimeout(t);
    }
  }, [token, toast, navigate]);

  return (
    <>
      <Helmet>
        <title>Верификация Moodle | Информационная безопасность</title>
        <meta name="description" content="Подтвердите личность через LMS Moodle. При успешной проверке вы будете перенаправлены на главную страницу." />
        <link rel="canonical" href="/verify" />
      </Helmet>
      <main className="container mx-auto py-16">
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold">Верификация через Moodle</h1>
          {token ? (
            <p className="text-muted-foreground">Проверяем токен… Сейчас вы будете перенаправлены.</p>
          ) : (
            <>
              <p className="text-muted-foreground">Нажмите кнопку ниже, чтобы перейти в Moodle для подтверждения личности. После верификации вы вернетесь сюда с параметром token.</p>
              <div className="flex items-center justify-center gap-3">
                <a href="#moodle" onClick={(e) => { e.preventDefault(); toast({title:"Открытие Moodle", description:"Демо навигация"}); }}>
                  <Button variant="hero" size="lg">Перейти в Moodle</Button>
                </a>
                <Button variant="secondary" onClick={() => navigate("/verify?token=dummy-success")}>У меня уже есть token</Button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Verify;
