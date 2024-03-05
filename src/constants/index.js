import {
  support,
  truckFast,
  deadline,
  instagram,
  whatsapp,
  tiktok,
} from "../assets/icons";
import {
  machine_sm,
  thumbnail_machine_sm,
  airbag,
  thumbnail_airbag,
  smartTouch,
  thumbnail_smartTouch,
  x_rey,
  thumbnail_x_rey,
  product_details,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Негізгі" },
  { href: "#details", label: "Өнім" },
  { href: "#services", label: "Қызметтер" },
];

export const products = [
  {
    thumbnail: thumbnail_machine_sm,
    bigImg: machine_sm,
  },
  {
    thumbnail: thumbnail_airbag,
    bigImg: airbag,
  },
  {
    thumbnail: thumbnail_smartTouch,
    bigImg: smartTouch,
  },
  {
    thumbnail: thumbnail_x_rey,
    bigImg: x_rey,
  },
];

export const productDetails = {
  imgURL: product_details,
  name: "8D SMART аяқ массажы аппараты",
  size: "47.5x27x43cm",
  weight: "6.9kg",
  temperature: "40℃-50℃",
  price: "40000",
};

export const contact = {
  whatsapp_link: "https://wa.me/+77003167000",
  instagram_link: "https://www.instagram.com/aqerke_erkin/",
};

export const services = [
  {
    imgURL: truckFast,
    label: "Жеткізу бағасы",
    subtext: "кг: ?? тг",
  },
  {
    imgURL: deadline,
    label: "Жоғары жылдамдық",
    subtext: "Продажа: 5 күн",
  },
  {
    imgURL: support,
    label: "Көмек",
    subtext: "Біздің арнайы команда сізге әр қадамда көмектесу үшін осында.",
  },
];

export const socialMedia = [
  {
    src: instagram,
    alt: "instagram logo",
    url: "https://www.instagram.com/aqerke_erkin/",
  },
  { src: whatsapp, alt: "whatsapp logo", url: "https://wa.me/+77003167000" },
  { src: tiktok, alt: "TikTok logo", url: "https://tiktok.com" },
];
