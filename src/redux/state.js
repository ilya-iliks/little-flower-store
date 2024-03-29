let state = {
  roseData: [
    {
      id: 1,
      image: require("../assets/Pictures-of-roses/roses-400х400-1.jpg"),
      text: "15 белых роз",
      button: "+ 2 320₽",
    },
    {
      id: 2,
      image: require("../assets/Pictures-of-roses/roses-400х400-2.jpg"),
      text: "25 белых роз в упаковке",
      button: "+ 3 835₽",
    },
    {
      id: 3,
      image: require("../assets/Pictures-of-roses/roses-400х400-3.jpg"),
      text: "51 белая роза",
      button: "+ 6 500₽",
    },
    {
      id: 4,
      image: require("../assets/Pictures-of-roses/roses-400х400-4.jpg"),
      text: "Микс белых и розовых роз 35 шт.",
      button: "+ 5 250₽",
    },
    {
      id: 5,
      image: require("../assets/Pictures-of-roses/roses-400х400-5.jpg"),
      text: "15 розовых роз",
      button: "+ 2 320₽",
    },
  ],

  boxesData: [
    {
      id: 1,
      image: require("../assets/Pictures-of-boxes/boxes-400х400-1.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 2,
      image: require("../assets/Pictures-of-boxes/boxes-400х400-2.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 3,
      image: require("../assets/Pictures-of-boxes/boxes-400х400-3.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 4,
      image: require("../assets/Pictures-of-boxes/boxes-400х400-4.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 5,
      image: require("../assets/Pictures-of-boxes/boxes-400х400-5.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 6,
      image: require("../assets/Pictures-of-boxes/boxes-400х400-6.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 7,
      image: require("../assets/Pictures-of-boxes/boxes-400х400-7.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 8,
      image: require("../assets/Pictures-of-boxes/boxes-400х400-8.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 9,
      image: require("../assets/Pictures-of-boxes/boxes-400х400-9.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
  ],

  bouquetsData: [
    {
      id: 1,
      image: require("../assets/Pictures-of-bouquets/bouquets-400х400-1.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 2,
      image: require("../assets/Pictures-of-bouquets/bouquets-400х400-2.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 3,
      image: require("../assets/Pictures-of-bouquets/bouquets-400х400-3.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
    {
      id: 4,
      image: require("../assets/Pictures-of-bouquets/bouquets-400х400-4.jpg"),
      text: "нет текста",
      button: "нет цены",
    },
  ],

  footerOrderData: [
    {
      id: 1,
      text: "Цветы",
    },
    {
      id: 2,
      text: "Аптеки",
    },
    {
      id: 3,
      text: "Другое",
    },
    {
      id: 4,
      text: "Сбермаркет",
    },
    {
      id: 5,
      text: "Продукты",
    },
    {
      id: 6,
      text: "Рестораны и кафе",
    },
    {
      id: 7, 
      text: "Одежда",
    },
  ],

  footerPopularPlacesData: [
    {
      id: 1,
      text: "Конфитюр",
    },
    {
      id: 2,
      text: "Культ",
    },
  ],

  footerCitiesData: [
    {
      id: 1,
      text: "Воронеж",
    },
    {
      id: 2,
      text: "Белгород",
    },
    {
      id: 3,
      text: "Краснодар",
    },
    {
      id: 4,
      text: "Новороссийск",
    },
    {
      id: 5,
      text: "Екатеринбург",
    },
    {
      id: 6,
      text: "Рязань",
    },
    {
      id: 7,
      text: "Уфа",
    },
    {
      id: 8,
      text: "Сочи",
    },
    {
      id: 9,
      text: "Самарканд",
    },
    {
      id: 10,
      text: "Нижний Новгород",
    },
    {
      id: 11,
      text: "Ростов-на-Дону",
    },
    {
      id: 12,
      text: "Тюмень",
    },
    {
      id: 13,
      text: "Казань",
    },
    {
      id: 14,
      text: "Новосибирск",
    },
    {
      id: 15,
      text: "Геленджик",
    },
    {
      id: 16,
      text: "Тверь",
    },
    {
      id: 17,
      text: "Самара",
    },
    {
      id: 18,
      text: "Волгоград",
    },
    {
      id: 19,
      text: "Москва",
    },
    {
      id: 20,
      text: "Ташкент",
    },
    {
      id: 21,
      text: "Анапа",
    },
  ],

  footerAboutTheCompanyData: [
    {
      id: 1,
      text: "Пользовательское соглашение",
    },
    {
      id: 2,
      text: "Согласие на обработку персональных данных",
    },
    {
      id: 3,
      text: "Правила оказания услуг продавцом",
    },
    {
      id: 4,
      text: "Правила оказания услуг по доставке",
    },
    {
      id: 5,
      text: "Политика конфиденциальности",
    },
    {
      id: 6,
      text: "Контакты",
    },
    {
      id: 7,
      text: "Хочу работать в ...",
    },
    {
      id: 8,
      text: "Карта сайта",
    },
  ],
};

export default state;






