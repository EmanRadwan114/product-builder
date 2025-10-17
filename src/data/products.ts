import { v4 as uuid } from "uuid";
import type { ICategory, IProduct } from "../interfaces/interfaces";

export const productInitValue: IProduct = {
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: [],
  category: { name: "", imageURL: "" },
};

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Cars",
    imageURL:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: uuid(),
    name: "Electronics",
    imageURL:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: uuid(),
    name: "Fashion",
    imageURL:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: uuid(),
    name: "Furniture",
    imageURL:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: uuid(),
    name: "Beauty",
    imageURL:
      "https://images.unsplash.com/photo-1603274737277-f43f54446c7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: uuid(),
    name: "Home Appliances",
    imageURL:
      "https://images.unsplash.com/photo-1617355186172-c32925aea7b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG9tZSUyMEFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
];

export const colors: string[] = [
  "#374151",
  "#D1D5DB",
  "#DC2626",
  "#9CA3AF",
  "#1E40AF",
  "#000000",
  "#ffbb0f",
  "#1F2937",
  "#E10600",
  "#2563EB",
  "#FF0032",
  "#10B981",
  "#F59E0B",
  "#9333EA",
  "#EC4899",
];

export const products: IProduct[] = [
  {
    id: uuid(),
    title: "BMW X5",
    description:
      "Luxury and practicality meet in BMW's flagship SUV, blending comfort and performance.",
    imageURL:
      "https://images.unsplash.com/photo-1653227229655-e9e10147a464?auto=format&fit=crop&w=800&q=80",
    price: "700000",
    colors: ["#1E40AF", "#FACC15", "#DC2626"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "Tesla Model 3",
    description:
      "A premium electric car with futuristic features and impressive acceleration.",
    imageURL:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80",
    price: "950000",
    colors: ["#000000", "#D1D5DB", "#FF0032"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "Samsung Galaxy S24 Ultra",
    description:
      "Experience power and precision with the latest Samsung Galaxy flagship.",
    imageURL:
      "https://img.freepik.com/free-vector/realistic-smartphone-with-two-cameras-different-views_23-2148324134.jpg?t=st=1760662099~exp=1760665699~hmac=286d1f215ab943a48a271c12ea70686ee3247c1c88e4f7b2b9e44bc968e6a2a7&w=1480",
    price: "40000",
    colors: ["#000000", "#D1D5DB", "#9333EA"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "MacBook Pro 16” M3",
    description:
      "Apple’s top-tier laptop for performance, design, and efficiency.",
    imageURL:
      "https://img.freepik.com/free-photo/still-life-device-table_23-2150994379.jpg?t=st=1760662007~exp=1760665607~hmac=6553d44cd3c3701c39ffd8ae5eb46888a1bd03c99b58905e726fa1ddf0a1311d&w=1480",
    price: "85000",
    colors: ["#374151", "#9CA3AF", "#D1D5DB"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "Men’s Leather Jacket",
    description:
      "Classic black leather jacket designed for both style and durability.",
    imageURL:
      "https://img.freepik.com/free-photo/guy-smiling-gently-black-leather-jacket-indicates-with-fore-finger-copy-space-advertisment-promotional-text-handsome-stylish-male-with-dark-hair-blue-eyes-points-into-distance_176420-13375.jpg?t=st=1760661180~exp=1760664780~hmac=00661f9a9965b0f208067b7b0eb4af344e586cdeab1f31f7579804ac95775e6d&w=1480",
    price: "3500",
    colors: ["#000000", "#9CA3AF", "#FF0032"],
    category: {
      name: "Fashion",
      imageURL:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "Women’s Summer Dress",
    description:
      "Light and comfortable dress made with high-quality fabric for everyday wear.",
    imageURL:
      "https://img.freepik.com/free-photo/full-shot-muslim-woman-posing-outdoors_23-2150494568.jpg?t=st=1760661657~exp=1760665257~hmac=70a7dd38dad59ff3670ce245d18b2f48a7afd7a965a665c0f55ccc8bd253b73a&w=1480",
    price: "1800",
    colors: ["#EC4899", "#F59E0B", "#9333EA"],
    category: {
      name: "Fashion",
      imageURL:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "Modern Bed Set",
    description:
      "Comfort meets style in this modern bed set for your bed room.",
    imageURL:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    price: "25000",
    colors: ["#9CA3AF", "#1F2937", "#10B981"],
    category: {
      name: "Furniture",
      imageURL:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "Minimalist Desk Lamp",
    description:
      "A sleek, energy-efficient lamp that brings modern elegance to your workspace.",
    imageURL:
      "https://img.freepik.com/free-photo/vintage-desk-lamp-illuminating-dark_53876-96921.jpg?t=st=1760661820~exp=1760665420~hmac=1781ca91f218501f1c0c9cb27f56b0d9ba8d8b7bf4e9aefc0247d79da445ce69&w=1480",
    price: "70",
    colors: ["#E5E7EB", "#1E3A8A", "#6B7280"],
    category: {
      name: "Furniture",
      imageURL:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "Luxury Perfume - Blossom Mist",
    description:
      "A soft floral fragrance that blends jasmine and vanilla for lasting freshness.",
    imageURL:
      "https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382884.jpg?t=st=1760661884~exp=1760665484~hmac=3de9623055976ae30b69db04c8aa8282609fffe1ea96b62e5c882d9df397e9dc&w=1480",
    price: "900",
    colors: ["#EC4899", "#F59E0B", "#9333EA"],
    category: {
      name: "Beauty",
      imageURL:
        "https://images.unsplash.com/photo-1603274737277-f43f54446c7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
  },
  {
    id: uuid(),
    title: "Dyson V15 Vacuum Cleaner",
    description:
      "High-performance cordless vacuum with smart dust detection and superior suction power.",
    imageURL:
      "https://img.freepik.com/free-photo/vacuum-cleaner-tackling-heavily-soiled-floor_23-2151340067.jpg",
    price: "20000",
    colors: ["#2563EB", "#F59E0B", "#374151"],
    category: {
      name: "Home Appliances",
      imageURL:
        "https://images.unsplash.com/photo-1617355186172-c32925aea7b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG9tZSUyMEFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    },
  },
];

export default products;
