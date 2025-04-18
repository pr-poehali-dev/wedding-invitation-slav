import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

const RsvpSection = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState<"yes" | "no" | "">("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы запрос к API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="my-12 text-center max-w-md mx-auto px-4">
        <div className="bg-slavic/10 backdrop-blur-sm border border-slavic/30 rounded-lg p-6">
          <h2 className="text-3xl mb-4 text-slavic-secondary">Спасибо!</h2>
          <p className="text-lg text-slavic-dark">
            Мы получили ваш ответ и очень рады, что вы разделите с нами этот особенный день.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="my-12 max-w-md mx-auto px-4">
      <div className="bg-slavic/10 backdrop-blur-sm border border-slavic/30 rounded-lg p-6">
        <div className="flex justify-center mb-4">
          <MessageSquare className="h-10 w-10 text-slavic" />
        </div>
        <h2 className="text-3xl text-center text-slavic-secondary mb-6">Подтвердите присутствие</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-slavic-dark">Ваше имя</Label>
            <Input 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/50 border-slavic/30 focus-visible:ring-slavic"
            />
          </div>
          
          <div>
            <Label className="text-slavic-dark">Вы придёте?</Label>
            <div className="flex gap-4 mt-2">
              <Button
                type="button"
                variant={response === "yes" ? "default" : "outline"}
                className={response === "yes" ? "bg-slavic hover:bg-slavic/90" : "border-slavic/30"}
                onClick={() => setResponse("yes")}
              >
                Да, буду
              </Button>
              <Button
                type="button"
                variant={response === "no" ? "default" : "outline"}
                className={response === "no" ? "bg-slavic hover:bg-slavic/90" : "border-slavic/30"}
                onClick={() => setResponse("no")}
              >
                К сожалению, нет
              </Button>
            </div>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-slavic-dark">Сообщение для нас</Label>
            <Textarea 
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white/50 border-slavic/30 focus-visible:ring-slavic"
              placeholder="Пожелания или вопросы..."
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-slavic-secondary hover:bg-slavic-secondary/90"
            disabled={!name || !response}
          >
            Отправить
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RsvpSection;