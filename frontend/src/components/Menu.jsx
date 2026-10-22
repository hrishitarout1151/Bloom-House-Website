import { useState } from "react";

// Real menu, transcribed from Bloom House's Google Maps listing (Satya Vihar,
// Rasulgarh). `seasonal: true` marks items flagged as good picks for right
// now — early October in Bhubaneswar: warm afternoons, cooling evenings,
// and festive-season appetite. Update freely as the actual season/festival
// calendar changes.
const MENU = {
  "Soups": [
    { name: "Sweet Corn Soup", price: "₹69 / ₹89" },
    { name: "Veg Clear Soup", price: "₹69" },
    { name: "Lemon Coriander Soup", price: "₹79 / ₹99", seasonal: true },
    { name: "Mushroom Clear Soup", price: "₹99" },
    { name: "Hot & Sour Soup", price: "₹79 / ₹99", seasonal: true },
    { name: "Manchow Soup", price: "₹89 / ₹109" },
    { name: "Prawn Pepper Soup", price: "₹199" },
  ],
  "Chinese Starters": [
    { name: "Veg Spring Roll", price: "₹109" },
    { name: "Chili Paneer", price: "₹159" },
    { name: "Crispy Chilli Baby Corn", price: "₹149" },
    { name: "Mushroom Chilli", price: "₹169" },
    { name: "Crispy American Corn", price: "₹119" },
    { name: "Veg Manchurian", price: "₹119" },
    { name: "Gobi Chilly", price: "₹119" },
    { name: "Gobi 65", price: "₹139" },
    { name: "Chicken Pakoda", price: "₹119" },
    { name: "Chili Chicken Chapter-2", price: "₹139" },
    { name: "Chicken Manchurian", price: "₹139" },
    { name: "Fiery Garlic Chicken", price: "₹159" },
    { name: "Chicken Salt & Pepper", price: "₹159" },
    { name: "Andhra Spicy 65", price: "₹149" },
    { name: "Chicken Lollipop", price: "₹220", seasonal: true },
    { name: "Hot Chilli Fish", price: "₹230" },
    { name: "Wok'd Garlic Fish", price: "₹220" },
    { name: "Apollo Fish", price: "₹240" },
    { name: "Devil Egg Chop", price: "₹59" },
    { name: "Spicy Egg 65", price: "₹119" },
    { name: "Island Bali Prawns", price: "₹209" },
    { name: "Butter Garlic Prawn", price: "₹269" },
    { name: "Korean Bubble Prawn", price: "₹299" },
  ],
  "Momos": [
    { name: "Classic Steam Momo", price: "₹49 / ₹59" },
    { name: "Fried Momo", price: "₹59 / ₹69" },
    { name: "KFC Momo", price: "₹69 / ₹79" },
    { name: "Schezwan Momo", price: "₹69 / ₹79" },
    { name: "Chilly Garlic Momo", price: "₹79 / ₹99", seasonal: true },
    { name: "Red Sauce Momo", price: "₹89 / ₹99" },
    { name: "White Sauce Momo", price: "₹99 / ₹109" },
  ],
  "Rice & Noodles": [
    { name: "Veg Fried Rice", price: "₹119" },
    { name: "Egg Fried Rice", price: "₹139" },
    { name: "Chicken Fried Rice", price: "₹159" },
    { name: "Schezwan Fried Rice", price: "₹149 / ₹169" },
    { name: "Mix Treasure Fried Rice", price: "₹199" },
    { name: "Veg Hakka Noodles", price: "₹89" },
    { name: "Egg Noodles", price: "₹109" },
    { name: "Chicken Noodles", price: "₹119" },
    { name: "Egg Chicken Noodles", price: "₹129" },
    { name: "Mix Noodles", price: "₹159" },
    { name: "Schezwan Noodles", price: "₹149" },
    { name: "Egg Schezwan Noodles", price: "₹169" },
    { name: "Chicken Schezwan Noodles", price: "₹189" },
    { name: "Mix Schezwan Noodles", price: "₹220" },
  ],
  "Pizza": [
    { name: "Classic Margherita Pizza", price: "₹149" },
    { name: "Paneer Pizza", price: "₹169" },
    { name: "Farmhouse Pizza", price: "₹219" },
    { name: "Peri-Peri Veg Pizza", price: "₹209" },
    { name: "Paneer Makhani Pizza", price: "₹229" },
    { name: "Classic Chicken Pizza", price: "₹219" },
    { name: "Chicken Tikka Pizza", price: "₹249" },
    { name: "Café's Special Chicken Pizza", price: "₹299" },
  ],
  "Burgers & Sandwiches": [
    { name: "Classic Veg Burger", price: "₹89" },
    { name: "Paneer Burger", price: "₹99" },
    { name: "Cheese Veg Burger", price: "₹109" },
    { name: "Peri-Peri Paneer Burger", price: "₹119" },
    { name: "Classic Chicken Burger", price: "₹129" },
    { name: "Cheese Chicken Burger", price: "₹139" },
    { name: "Overloaded Cheese Burger", price: "₹149 / ₹169" },
    { name: "Chilly Chicken Burger", price: "₹199" },
    { name: "Veg Grill Sandwich", price: "₹99" },
    { name: "Cheese Corn Sandwich", price: "₹119" },
    { name: "Cheese Corn Grill Sandwich", price: "₹129" },
    { name: "Paneer Grill Sandwich", price: "₹129" },
    { name: "Egg Sandwich", price: "₹139" },
    { name: "Chicken Mayo Sandwich", price: "₹149" },
    { name: "Chicken Grill Sandwich", price: "₹159" },
  ],
  "Pasta & Crisp Bites": [
    { name: "White Sauce Pasta", price: "₹129 / ₹149" },
    { name: "Red Sauce Pasta", price: "₹139 / ₹159" },
    { name: "Mix Sauce Pasta", price: "₹149 / ₹169" },
    { name: "Masala Pasta", price: "₹139 / ₹159" },
    { name: "French Fries", price: "₹99" },
    { name: "Masala French Fries", price: "₹109" },
    { name: "Potato Nuggets", price: "₹119" },
    { name: "Cheese Balls", price: "₹159" },
    { name: "Cheese Corn Balls", price: "₹169" },
    { name: "Aloo Tikki", price: "₹99" },
    { name: "Chicken Nuggets", price: "₹139" },
    { name: "Fried Chicken", price: "₹209" },
    { name: "Chicken Popcorn", price: "₹129" },
    { name: "Fish Finger", price: "₹199" },
    { name: "Chicken Finger", price: "₹159" },
  ],
  "Indian Veg": [
    { name: "Plain Dal", price: "₹59" },
    { name: "Dal Tadka", price: "₹69" },
    { name: "Dal Fry", price: "₹99" },
    { name: "Butter Dal Fry", price: "₹109" },
    { name: "Paneer Masala", price: "₹199" },
    { name: "Kadai Paneer", price: "₹209" },
    { name: "Paneer Makhani", price: "₹219" },
    { name: "Paneer Hyderabadi", price: "₹219" },
    { name: "Paneer Butter Masala", price: "₹229" },
    { name: "Mushroom Masala", price: "₹189" },
    { name: "Kadai Mushroom", price: "₹189" },
    { name: "Mushroom Hyderabadi", price: "₹199" },
  ],
  "Indian Non-Veg": [
    { name: "Egg Bhurji Classic", price: "₹49" },
    { name: "Butter Delight Egg Bhurji", price: "₹59" },
    { name: "Classic Omelette", price: "₹59" },
    { name: "Peri-Peri Omelette", price: "₹69" },
    { name: "Butter Masala Omelette", price: "₹89" },
    { name: "Cheese Burst Omelette", price: "₹99" },
    { name: "Café Special Omelette", price: "₹109" },
    { name: "Egg Dopyaza", price: "₹109" },
    { name: "Creamy Egg Masala", price: "₹109" },
    { name: "Chicken Kassa Classic", price: "₹119" },
    { name: "Masala Chicken Delight", price: "₹139" },
    { name: "Rustic Kadai Chicken", price: "₹189" },
    { name: "Nawabi Hyderabadi Chicken", price: "₹199" },
    { name: "Imperial Butter Chicken", price: "₹249" },
    { name: "Mughal-E-Azam Chicken", price: "₹249" },
    { name: "Shahi Chicken Do-Pyaza", price: "₹179" },
    { name: "Royal Prawn Pan Fry", price: "₹249" },
    { name: "Coastal Prawn Masala", price: "₹259" },
    { name: "Prawn Butter Masala", price: "₹269" },
    { name: "Nawabi Creamy Prawn Masala", price: "₹269" },
    { name: "Kadai Prawn", price: "₹259" },
    { name: "Silky Malai Prawns", price: "₹299" },
  ],
  "Breads & Rice": [
    { name: "Plain Paratha", price: "₹20" },
    { name: "Butter Paratha", price: "₹30" },
    { name: "Lachha Paratha", price: "₹35" },
    { name: "Egg Lachha Paratha", price: "₹50" },
    { name: "Double Egg Lachha Paratha", price: "₹60" },
    { name: "Cheese Corn Paratha", price: "₹80" },
    { name: "Plain Long Grain Rice", price: "₹99" },
    { name: "Jeera Rice", price: "₹55" },
    { name: "Lemon Rice", price: "₹65" },
    { name: "Chicken Khichdi", price: "₹149", note: "Subject to availability" },
    { name: "Mutton Khichdi", price: "₹349", note: "Subject to availability" },
    { name: "Chicken Pulao", price: "₹149" },
    { name: "Mutton Pulao", price: "₹349", note: "Subject to availability" },
  ],
  "Chef's Specials": [
    {
      name: "Mutton Home Style, Pure Authentic",
      price: "₹349",
      note: "Slow-cooked mutton in a rich, aromatic blend of traditional spices — a homestyle curry that brings the authentic taste of home to the table.",
      seasonal: true,
    },
    {
      name: "Mutton Roghan Josh",
      price: "₹399",
      note: "Tender mutton pieces cooked in a rich, aromatic blend of Kashmiri spices, simmered to perfection in a luscious, flavourful gravy.",
      seasonal: true,
    },
  ],
  "Hot Beverages": [
    { name: "Hot Coffee Black", price: "₹49" },
    { name: "Hot Coffee Milk", price: "₹59" },
    { name: "Espresso", price: "₹69" },
    { name: "Cappuccino", price: "₹69" },
    { name: "Latte", price: "₹75" },
    { name: "Mocha", price: "₹79" },
    { name: "Hot Chocolate", price: "₹99" },
    { name: "Classic Milk Tea", price: "₹19" },
    { name: "Masala Tea", price: "₹29", seasonal: true },
    { name: "Lemon Tea", price: "₹39" },
    { name: "Tulsi Honey Tea", price: "₹49", seasonal: true },
    { name: "Green Tea", price: "₹59" },
  ],
  "Cold Beverages & Refreshers": [
    { name: "Fresh Lime Soda", price: "₹49" },
    { name: "Cold Coffee", price: "₹89", seasonal: true },
    { name: "Iced Latte", price: "₹99" },
    { name: "Iced Mocha", price: "₹99" },
    { name: "Chocolate Frappe", price: "₹119" },
    { name: "Royal Mango Shake", price: "₹119" },
    { name: "Shake It Banana", price: "₹109" },
    { name: "O-Range Shake", price: "₹119" },
    { name: "GoMix Shake", price: "₹129" },
    { name: "Oreo Bliss", price: "₹119" },
    { name: "KitKat Crunch", price: "₹129" },
    { name: "Munch Mania", price: "₹129" },
    { name: "Masala Mist", price: "₹99" },
    { name: "Virgin Mojito", price: "₹89" },
    { name: "Blue Lagoon", price: "₹99" },
    { name: "Sunrise Cooler", price: "₹109" },
    { name: "Pineapple Fizz", price: "₹129" },
  ],
};

const CATEGORIES = Object.keys(MENU);

export default function Menu() {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <section id="menu" className="bg-ivory">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-3">
          <h2 className="text-3xl md:text-4xl text-plum-900 mb-3">A menu built for lingering</h2>
          <p className="text-plum-500">
            The full Bloom House menu. Items with a
            <span className="inline-flex items-center gap-1 mx-1.5 align-middle rounded-full bg-gold-100 text-gold-700 text-xs font-semibold px-2.5 py-0.5">
              in season
            </span>
            tag are what we'd spotlight right now — early-October evenings
            cooling down while afternoons stay warm.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 mt-8" role="tablist" aria-label="Menu categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-colors ${
                active === cat
                  ? "bg-bloom-500 border-bloom-500 text-ivory"
                  : "border-sage-100 text-plum-700 hover:border-bloom-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="grid sm:grid-cols-2 gap-5">
          {MENU[active].map((item) => (
            <li
              key={item.name}
              className="flex items-start justify-between gap-4 bg-sage-50 rounded-2xl px-5 py-4"
            >
              <div>
                <p className="font-display text-lg text-plum-900 flex items-center gap-2 flex-wrap">
                  {item.name}
                  {item.seasonal && (
                    <span className="rounded-full bg-gold-100 text-gold-700 text-[11px] font-semibold px-2 py-0.5 tracking-wide">
                      in season
                    </span>
                  )}
                </p>
                {item.note && <p className="text-sm text-plum-500 mt-1">{item.note}</p>}
              </div>
              <span className="font-semibold text-bloom-600 whitespace-nowrap">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
