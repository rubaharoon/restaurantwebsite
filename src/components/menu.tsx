"use client";
import { useState } from "react";

type Item = {
  name: string;
  description: string;
  price: number;
};

type MenuData = Record<string, Item[]>;

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Breakfast");

  const categories = [
    { name: "Breakfast", icon: "🍞" },
    { name: "FastFood", icon: "🍔" },
    { name: "BBQ", icon: "🍟" },
    { name: "Pizza", icon: "🍕" },
    { name: "ChineseFood", icon: "🍲" },
    { name: "OrganicFood", icon: "🥦" },
    { name: "Sandwiches", icon: "🥪" },
    { name: "Dessert", icon: "🍩" },
  ];

  const menuData: MenuData = {
    Breakfast: [
      {
        name: "Blueberry Pancakes",
        description:
          "Fluffy pancakes with fresh blueberries, served with butter and maple syrup",
        price: 120,
      },
      {
        name: "French Toast with Berries",
        description:
          "Cinnamon-vanilla custard-soaked brioche, topped with fresh berries",
        price: 110,
      },
      {
        name: "Vegetable Omelette",
        description:
          "Fluffy omelette with mushrooms, bell peppers, spinach, and cheddar cheese",
        price: 100,
      },
      {
        name: "Pancakes with Blueberry Syrup",
        description:
          "Fluffy pancakes topped with blueberry syrup and a drizzle of honey, served with your choice of butter or blueberry syrup.",
        price: 110,
      },
      {
        name: "Waffles with Chocolate Sauce",
        description:
          "Rich, dense waffles filled with a rich chocolate sauce, served with your choice of toppings.",
        price: 110,
      },
      {
        name: "Pancakes with Chocolate Syrup",
        description:
          "Fluffy pancakes topped with chocolate syrup and a drizzle of honey, served with your choice of butter or chocolate syrup.",
        price: 110,
      },
      {
        name: "OatMeal with Coffee",
        description:
          "A hearty oatmeal with your choice of coffee, served with your choice of toppings.",
        price: 120,
      },
      {
        name: "Sandwitches with Cheese",
        description:
          "Freshly-baked sandwiches filled with your choice of cheese and served with your choice of toppings.",
        price: 120,
      },
      {
        name: "Waffles with Vanilla Sauce",
        description:
          "Rich, dense waffles filled with a rich vanilla sauce, served with your choice of toppings.",
        price: 110,
      },
      {
        name: "Tea & Coffee",
        description: "Tea or coffee served with great taste & quality.",
        price: 100,
      },
    ],
    FastFood: [
      {
        name: "Zinger Burger",
        description:
          "Juicy chicken  with lettuce, tomato, and cheese, served with a side of fries",
        price: 300,
      },
      {
        name: "Chicken Burger",
        description: "Freshly-baked chicken breast served with a side of fries",
        price: 200,
      },
      {
        name: "Beef Burger",
        description: "Freshly-baked beef patty served with a side of fries",
        price: 200,
      },
      {
        name: "Steak",
        description: "Freshly-baked steak served with a side of fries",
        price: 300,
      },
      {
        name: "Chicken Broast",
        description: "Freshly-baked chicken breast served with a side of fries",
        price: 300,
      },
      {
        name: "Chicken Mayo Roll",
        description: "Freshly-baked chicken with mayonnaise topping",
        price: 300,
      },
      {
        name: "Chicken Tikka",
        description: "Freshly-baked chicken tikka served with a side of fries",
        price: 300,
      },
      {
        name: "Chicken Kebab",
        description: "Freshly-baked chicken kebab served with a side of fries",
        price: 300,
      },
    ],
    BBQ: [
      {
        name: "Chicken Malai Boti",
        description: "Freshly-baked chicken breast served with a side of fries",
        price: 400,
      },
      {
        name: "Beef Malai Boti",
        description: "Freshly-baked beef  served with a side of fries",
        price: 450,
      },
      {
        name: "Beef Bihari Boti",
        description: "Freshly-baked beef served with a side of fries",
        price: 450,
      },
      {
        name: "Chicken Reshmi Kabab",
        description: "Freshly-baked chicken kabab served with a side of fries",
        price: 430,
      },
      {
        name: "Chicken Boti",
        description: "Freshly-baked chicken served with a side of fries",
        price: 470,
      },
      {
        name: "Beef Gola Kabab",
        description: "Freshly-baked beef kabab served with a side of fries",
        price: 430,
      },
    ],
    Pizza: [
      { name: "Chicken Tikka", description: "Freshly-baked", price: 900 },
      { name: "Chicken Fajita", description: "Freshly-baked", price: 900 },
      { name: "Chicken Mexican", description: "Freshly-baked", price: 900 },
      { name: "Chicken Afghani", description: "Freshly-baked", price: 900 },
      { name: "Chicken cheesy", description: "Freshly-baked", price: 900 },
    ],
    ChineseFood: [
      {
        name: "Chicken Shashlik with rice",
        description: "Made with fresh ingredients",
        price: 550,
      },
      {
        name: "Chicken Manchurian with rice",
        description: " Made with fresh ingredients",
        price: 550,
      },
      {
        name: "Chicken Fried Rice",
        description: "Made with fresh ingredients",
        price: 380,
      },
      {
        name: "Singapore Fried Rice",
        description: "Made with fresh ingredients",
        price: 500,
      },
      {
        name: "Chicken Pasta",
        description: "Made with fresh ingredients",
        price: 400,
      },
      {
        name: "Chicken Cheese Pasta",
        description: "Made with fresh ingredients and with cheese topping",
        price: 450,
      },
      {
        name: "Chicken Chowmein",
        description: " Made with fresh ingredients",
        price: 440,
      },
      {
        name: "Special Chowmein",
        description: "Made with fresh ingredients",
        price: 500,
      },
    ],
    OrganicFood: [
      { name: "Salad", description: "Made with fresh ingredients", price: 300 },
      {
        name: "Chicken Corn Soup",
        description: "Made with fresh ingredients",
        price: 150,
      },
      {
        name: "Hot & Sour Soup",
        description: "Made with fresh ingredients",
        price: 200,
      },
      {
        name: "Veggie Soup",
        description: "Made with fresh ingredients",
        price: 200,
      },
    ],
    Sandwiches: [
      {
        name: "Chicken Sandwich",
        description: "Made with fresh ingredients",
        price: 300,
      },
      {
        name: "Chicken Cheese Sandwich",
        description: "Made with fresh ingredients",
        price: 360,
      },
      {
        name: "Club Sandwich",
        description: "Made with fresh ingredients",
        price: 360,
      },
      {
        name: "Club Cheese Sandwich",
        description: "Made with fresh ingredients",
        price: 410,
      },
      {
        name: "Crispy Chicken Sandwich",
        description: "Made with fresh ingredients",
        price: 350,
      },
      {
        name: "Crispy Chicken Cheese Sandwich",
        description: "Made with fresh ingredients",
        price: 400,
      },
      {
        name: "BBQ Chicken Sandwich",
        description: "Made with fresh ingredients",
        price: 350,
      },
      {
        name: "BBQ Chicken Cheese Sandwich",
        description: "Made with fresh ingredients",
        price: 400,
      },
    ],
    Dessert: [
      { name: "Cheese Cake", description: "Freshly-baked", price: 800 },
      { name: "Choclate Cake", description: "Freshly-baked", price: 800 },
      { name: "Vanilla Cake", description: "Freshly-baked", price: 800 },
      { name: "Strawberry Cake", description: "Freshly-baked", price: 800 },
      { name: "Redvelvet Cake", description: "Freshly-baked", price: 800 },
      { name: "Pineapple Cake", description: "Freshly-baked", price: 800 },
      { name: "Blueberry Cake", description: "Freshly-baked", price: 800 },
      { name: "Blackforest Cake", description: "Freshly-baked", price: 800 },
      { name: "Coffee Cake", description: "Freshly-baked", price: 800 },
      {
        name: "Chocolate Lava Cake",
        description: "Freshly-baked",
        price: 1000,
      },
    ],
  };

  const categoryImages: Record<string, string> = {
    Breakfast: "/images/breakfast.jpg",
    FastFood: "/images/burger.jpg",
    BBQ: "/images/bbq.jpg",
    Pizza: "/images/pizza.jpg",
    ChineseFood: "/images/chinese.jpg",
    OrganicFood: "/images/organicfood.jpg",
    Sandwiches: "/images/sandwitch.jpg",
    Dessert: "/images/dessert.jpg",
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Text Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-purple-400">
          Explore Our Menu
        </h1>
        <p className="text-gray-500">
          Indulge in our diverse selection of gourmet dishes, crafted to
          perfection to satisfy every palate. Choose from our categories below
          to find the perfect meal for any occasion.
        </p>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex flex-col items-center p-4 rounded-lg ${
              selectedCategory === category.name
                ? "bg-purple-500 text-white"
                : "bg-purple-100 text-gray-800"
            } shadow-md`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="font-semibold">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Menu Content */}
      <div className="bg-purple-300 rounded-lg p-6 shadow-lg flex flex-col sm:flex-row items-start">
        {/* Image */}
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
          <img
            src={categoryImages[selectedCategory]}
            alt={`${selectedCategory} Dish`}
            className="w-48 h-48 object-cover rounded-full shadow-lg ring-2 ring-purple-500"
          />
        </div>
        {/* Menu Items */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-purple-800">
            {selectedCategory}
          </h2>
          <ul>
            {menuData[selectedCategory] ? (
              menuData[selectedCategory].map((item: Item) => (
                <li
                  key={item.name}
                  className="flex justify-between items-center py-2 border-b border-dashed border-purple-500"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-purple-500 font-bold">
                    ${item.price.toFixed(2)}
                  </span>
                </li>
              ))
            ) : (
              <p className="text-gray-500">
                Menu not available for this category.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
