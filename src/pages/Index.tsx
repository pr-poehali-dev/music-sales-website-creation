import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    beatId: "",
    budget: "",
    deadline: "",
    description: "",
    requirements: "",
    agreedToTerms: false,
  });
  const beats = [
    {
      id: 1,
      title: "Trap Melody",
      genre: "Trap",
      bpm: 140,
      price: 2500,
      waveform: "img/7a0a9fbe-5eee-4f52-a397-84bed8a986fa.jpg",
    },
    {
      id: 2,
      title: "Hip-Hop Classic",
      genre: "Hip-Hop",
      bpm: 90,
      price: 3000,
      waveform: "img/7a0a9fbe-5eee-4f52-a397-84bed8a986fa.jpg",
    },
    {
      id: 3,
      title: "R&B Vibes",
      genre: "R&B",
      bpm: 85,
      price: 2800,
      waveform: "img/7a0a9fbe-5eee-4f52-a397-84bed8a986fa.jpg",
    },
  ];

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки заказа
    console.log("Заказ отправлен:", orderForm);
    setIsOrderModalOpen(false);
    // Показать уведомление об успешной отправке
    alert("Заказ отправлен! Мы свяжемся с вами в ближайшее время.");
  };

  const openOrderModal = (service: string, beatId?: number) => {
    setOrderForm((prev) => ({
      ...prev,
      service,
      beatId: beatId ? beatId.toString() : "",
    }));
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="border-b border-gray-800 bg-black/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Music" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">BeatHub</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beats" className="hover:text-primary transition-colors">
              Биты
            </a>
            <a href="#mixing" className="hover:text-primary transition-colors">
              Сведение
            </a>
            <a
              href="#mastering"
              className="hover:text-primary transition-colors"
            >
              Мастеринг
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Корзина
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Профессиональная
              <span className="text-primary block">Музыкальная Студия</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
              Продажа эксклюзивных битов, услуги сведения и мастеринга от
              профессиональных звукорежиссеров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Прослушать Биты
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 hover:bg-gray-800 text-lg px-8"
              >
                <Icon name="Headphones" size={20} className="mr-2" />
                Услуги Студии
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Image */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="img/54306d33-f0e3-4238-9b50-45c7edf73200.jpg"
              alt="Профессиональная студия звукозаписи"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-3xl font-bold mb-2">
                Студия мирового уровня
              </h2>
              <p className="text-gray-300">
                Оборудование премиум-класса для идеального звука
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beats Section */}
      <section id="beats" className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Эксклюзивные Биты</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Авторские инструменталы высочайшего качества для ваших треков
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beats.map((beat) => (
              <Card
                key={beat.id}
                className="bg-gray-800 border-gray-700 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{beat.title}</CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary"
                    >
                      {beat.genre}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">
                    {beat.bpm} BPM • {beat.price}₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-4">
                    <img
                      src={beat.waveform}
                      alt="Waveform"
                      className="w-full h-16 object-cover rounded opacity-80"
                    />
                    <Button
                      size="sm"
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-primary hover:bg-primary/90"
                    >
                      <Icon name="Play" size={16} />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => openOrderModal("Покупка бита", beat.id)}
                    >
                      <Icon name="ShoppingCart" size={14} className="mr-2" />
                      Купить
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 hover:bg-gray-700"
                    >
                      <Icon name="Heart" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="mixing" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Студийные Услуги</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Профессиональное сведение и мастеринг ваших треков
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Sliders" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Сведение</h3>
                  <p className="text-gray-400">Профессиональный микс</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-3" />
                  Многодорожечное сведение
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-3" />
                  Коррекция и обработка
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-3" />
                  Пространственная обработка
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-3" />
                  Бесплатные правки
                </li>
              </ul>
              <div className="text-3xl font-bold text-primary mb-4">
                от 599₽
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => openOrderModal("Сведение")}
              >
                Заказать сведение
              </Button>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Volume2" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Мастеринг</h3>
                  <p className="text-gray-400">Финальная обработка</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-3" />
                  Эквализация и компрессия
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-3" />
                  Стерео расширение
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-3" />
                  Громкостная обработка
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-3" />
                  Подготовка к релизу
                </li>
              </ul>
              <div className="text-3xl font-bold text-primary mb-4">
                от 799₽
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => openOrderModal("Мастеринг")}
              >
                Заказать мастеринг
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-gray-300 text-lg">
              Готовы создать ваш идеальный звук? Свяжитесь с нами прямо сейчас
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <CardHeader>
                <CardTitle className="text-white">Быстрый заказ</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Имя
                  </label>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Услуга
                  </label>
                  <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                    <option>Покупка битов</option>
                    <option>Сведение трека</option>
                    <option>Мастеринг</option>
                    <option>Комплексная работа</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-primary mr-3"
                  />
                  <h3 className="text-xl font-bold text-white">Telegram</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Быстрая связь для срочных вопросов
                </p>
                <Button
                  variant="outline"
                  className="border-gray-600 hover:bg-gray-700"
                >
                  @wellam_ov
                </Button>
              </Card>

              <Card className="bg-gray-800 border-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Mail" size={24} className="text-primary mr-3" />
                  <h3 className="text-xl font-bold text-white">Email</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Детальные консультации и техническое задание
                </p>
                <Button
                  variant="outline"
                  className="border-gray-600 hover:bg-gray-700"
                >
                  info@beathub.ru
                </Button>
              </Card>

              <Card className="bg-gray-800 border-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Clock" size={24} className="text-primary mr-3" />
                  <h3 className="text-xl font-bold text-white">Время работы</h3>
                </div>
                <div className="text-gray-300">
                  <p>Пн-Пт: 10:00 - 22:00</p>
                  <p>Сб-Вс: 12:00 - 20:00</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Music" size={24} className="text-primary" />
            <span className="text-xl font-bold">BeatHub</span>
          </div>
          <p className="text-gray-400 mb-4">
            Профессиональная музыкальная студия
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Music" size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Order Modal */}
      <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              Оформление заказа
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Заполните форму для создания индивидуального предложения
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleOrderSubmit} className="space-y-6 mt-4">
            {/* Контактная информация */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                Контактная информация
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">
                    Имя *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={orderForm.name}
                    onChange={(e) =>
                      setOrderForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={orderForm.email}
                    onChange={(e) =>
                      setOrderForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-300">
                  Телефон
                </Label>
                <Input
                  id="phone"
                  value={orderForm.phone}
                  onChange={(e) =>
                    setOrderForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <Separator className="bg-gray-600" />

            {/* Детали заказа */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                Детали заказа
              </h3>

              <div>
                <Label htmlFor="service" className="text-gray-300">
                  Услуга *
                </Label>
                <Select
                  value={orderForm.service}
                  onValueChange={(value) =>
                    setOrderForm((prev) => ({ ...prev, service: value }))
                  }
                >
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="Покупка бита">Покупка бита</SelectItem>
                    <SelectItem value="Сведение">Сведение трека</SelectItem>
                    <SelectItem value="Мастеринг">Мастеринг</SelectItem>
                    <SelectItem value="Сведение + Мастеринг">
                      Сведение + Мастеринг
                    </SelectItem>
                    <SelectItem value="Создание бита на заказ">
                      Создание бита на заказ
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {orderForm.beatId && (
                <div>
                  <Label className="text-gray-300">Выбранный бит</Label>
                  <div className="bg-gray-700 p-3 rounded-md">
                    <span className="text-primary">
                      Бит #{orderForm.beatId}
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget" className="text-gray-300">
                    Бюджет
                  </Label>
                  <Select
                    value={orderForm.budget}
                    onValueChange={(value) =>
                      setOrderForm((prev) => ({ ...prev, budget: value }))
                    }
                  >
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Выберите диапазон" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="До 5000₽">До 5 000₽</SelectItem>
                      <SelectItem value="5000-10000₽">
                        5 000 - 10 000₽
                      </SelectItem>
                      <SelectItem value="10000-25000₽">
                        10 000 - 25 000₽
                      </SelectItem>
                      <SelectItem value="25000-50000₽">
                        25 000 - 50 000₽
                      </SelectItem>
                      <SelectItem value="Свыше 50000₽">
                        Свыше 50 000₽
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="deadline" className="text-gray-300">
                    Срок выполнения
                  </Label>
                  <Select
                    value={orderForm.deadline}
                    onValueChange={(value) =>
                      setOrderForm((prev) => ({ ...prev, deadline: value }))
                    }
                  >
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Выберите срок" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="Срочно (1-2 дня)">
                        Срочно (1-2 дня)
                      </SelectItem>
                      <SelectItem value="Быстро (3-5 дней)">
                        Быстро (3-5 дней)
                      </SelectItem>
                      <SelectItem value="Стандартно (1-2 недели)">
                        Стандартно (1-2 недели)
                      </SelectItem>
                      <SelectItem value="Без спешки (3-4 недели)">
                        Без спешки (3-4 недели)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator className="bg-gray-600" />

            {/* Описание проекта */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                Описание проекта
              </h3>

              <div>
                <Label htmlFor="description" className="text-gray-300">
                  Опишите ваш проект *
                </Label>
                <Textarea
                  id="description"
                  required
                  value={orderForm.description}
                  onChange={(e) =>
                    setOrderForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                  placeholder="Расскажите о жанре, настроении, референсах..."
                />
              </div>

              <div>
                <Label htmlFor="requirements" className="text-gray-300">
                  Технические требования
                </Label>
                <Textarea
                  id="requirements"
                  value={orderForm.requirements}
                  onChange={(e) =>
                    setOrderForm((prev) => ({
                      ...prev,
                      requirements: e.target.value,
                    }))
                  }
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Формат файлов, качество, дополнительные пожелания..."
                />
              </div>
            </div>

            <Separator className="bg-gray-600" />

            {/* Соглашение */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={orderForm.agreedToTerms}
                onCheckedChange={(checked) =>
                  setOrderForm((prev) => ({
                    ...prev,
                    agreedToTerms: !!checked,
                  }))
                }
                className="border-gray-600"
              />
              <Label htmlFor="terms" className="text-sm text-gray-300">
                Я согласен с условиями обработки персональных данных и условиями
                сотрудничества
              </Label>
            </div>

            {/* Кнопки */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-gray-600 hover:bg-gray-700"
                onClick={() => setIsOrderModalOpen(false)}
              >
                Отмена
              </Button>
              <Button
                type="submit"
                disabled={!orderForm.agreedToTerms}
                className="flex-1 bg-primary hover:bg-primary/90 disabled:opacity-50"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Отправить заказ
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
