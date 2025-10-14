import type { IProduct } from "../interfaces/products";
import { v4 as uuid } from "uuid";

const products: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea's Genesis is setting a new standard with the GV70.",
    imageURL:
      "https://images.unsplash.com/photo-1650256242865-fe94f12e9fcf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2VuZXNpcyUyMEdWNzB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    price: 500000,
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
  },
  {
    id: uuid(),
    title: "Tesla Model S Plaid",
    description:
      "A futuristic electric sedan combining cutting-edge tech with breathtaking performance.",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1736043345534-47745872fee0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    price: 1200000,
    colors: ["#000000", "#C0C0C0", "#E10600"],
    category: {
      name: "Electric Cars",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1737677106532-840bafbf98fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFRlc2xhJTIwTW9kZWwlMjBTJTIwUGxhaWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
  },
  {
    id: uuid(),
    title: "Porsche 911 Carrera",
    description:
      "A timeless sports car offering exceptional speed and performance on every road.",
    imageURL:
      "https://images.unsplash.com/photo-1646567799145-bd59ff6cc476?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBvcnNjaGUlMjA5MTElMjBDYXJyZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    price: 850000,
    colors: ["#F3F4F6", "#FF0000", "#1F2937"],
    category: {
      name: "Sports Cars",
      imageURL:
        "https://images.unsplash.com/photo-1646567799137-b1e1508b6b96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UG9yc2NoZSUyMDkxMSUyMENhcnJlcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
  },
  {
    id: uuid(),
    title: "BMW X5",
    description:
      "Luxury and practicality meet in BMW's flagship SUV, blending comfort and performance.",
    imageURL:
      "https://images.unsplash.com/photo-1653227229655-e9e10147a464?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEJNVyUyMFg1fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    price: 700000,
    colors: ["#1E40AF", "#FACC15", "#DC2626"],
    category: {
      name: "SUVs",
      imageURL:
        "https://images.unsplash.com/photo-1635089917414-6da790da8479?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qk1XJTIwWDV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
  },
  {
    id: uuid(),
    title: "Mercedes-Benz E-Class",
    description:
      "The epitome of elegance and advanced driving experience, tailored for true comfort.",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TWVyY2VkZXMtQmVueiUyMEUtQ2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    price: 950000,
    colors: ["#374151", "#D1D5DB", "#9CA3AF"],
    category: {
      name: "Luxury Cars",
      imageURL:
        "https://images.unsplash.com/photo-1619015629774-e2319d5534fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxNZXJjZWRlcy1CZW56JTIwRS1DbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
  },
];

export default products;
