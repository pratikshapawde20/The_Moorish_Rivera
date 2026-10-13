/* ==========================================
   THE MOORISH RIVERA
   MENU INTERACTIONS
========================================== */


/* ==========================================
   MENU DATA
========================================== */

const dishes = [

    // VEGETARIAN MAIN COURSE

    {
        category: "Vegetarian Main Course",
        name: "Paneer Makhani",
        price: 390,
        description: "Soft paneer in a rich, creamy, aromatic tomato gravy.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Paneer Lababdar",
        price: 390,
        description: "Paneer cooked in a flavourful Indian gravy with warming spices.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Dum Ka Paneer",
        price: 409,
        description: "Aromatic paneer preparation with a rich, slow-cooked flavour.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Tawa Paneer",
        price: 419,
        description: "Paneer prepared with aromatic spices and a delicious tawa-style masala.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Veg Tawa",
        price: 379,
        description: "A hearty vegetarian preparation with fresh ingredients and balanced spices.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Lasooni Methi",
        price: 369,
        description: "Fragrant fenugreek leaves prepared with garlic and warming Indian spices.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Paneer Khurchan",
        price: 429,
        description: "Paneer cooked with peppers, onions and an aromatic Indian masala.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Paneer Tikka Laziz",
        price: 429,
        description: "A rich paneer specialty with a bold, satisfying spice profile.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Banarasi Aloo Dum",
        price: 389,
        description: "Tender potatoes simmered in an aromatic Indian gravy.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Bhoone Subz Ke Kofte",
        price: 389,
        description: "Vegetable kofta prepared with aromatic spices and rich curry.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Makai Corn Palak",
        price: 389,
        description: "Sweet corn and spinach combined in a comforting Indian curry.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Dhingri Mutter",
        price: 399,
        description: "Mushrooms and green peas cooked in a fragrant masala.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Veg Kolhapuri",
        price: 390,
        description: "A bold, spicy Maharashtrian-style vegetable curry.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Shev Bhaji",
        price: 369,
        description: "A regional Indian curry finished with crunchy sev.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Paneer Tikka Masala",
        price: 409,
        description: "Paneer in a richly spiced masala gravy.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Paneer Butter Masala",
        price: 389,
        description: "A classic paneer curry with a rich, buttery tomato gravy.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Main Course",
        name: "Malai Kofta",
        price: 399,
        description: "Delicate vegetable dumplings served in a creamy curry.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85"
    },


    // SOUPS

    {
        category: "Soups",
        name: "Cream of Tomato",
        price: 199,
        description: "Smooth tomato soup with a rich and gently tangy flavour.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Cream of Veg Soup",
        price: 199,
        description: "A comforting vegetable soup with balanced seasoning.",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Cream of Spinach Soup",
        price: 199,
        description: "Silky spinach soup with a delicate, comforting flavour.",
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Cream of Mushroom Soup",
        price: 199,
        description: "Creamy mushroom soup with earthy notes and a velvety texture.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Cream of Broccoli Soup",
        price: 209,
        description: "A velvety broccoli soup with a mellow savoury flavour.",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Chicken Manchow Soup",
        price: 199,
        description: "A warming Indo-Chinese soup with garlic and ginger.",
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Hot and Sour Chicken Soup",
        price: 199,
        description: "A lively broth balancing spice and tangy flavours.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Sweet Corn Chicken Soup",
        price: 199,
        description: "A comforting sweet corn soup with a savoury finish.",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Tomkha Gai",
        price: 229,
        description: "Thai-inspired coconut broth with fragrant herbs.",
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Tomato Chicken Basil",
        price: 219,
        description: "A smooth tomato soup with chicken and aromatic basil.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Cream of Chicken Soup",
        price: 219,
        description: "A rich, creamy chicken soup for a comforting start.",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Soups",
        name: "Saffron Seafood Broth",
        price: 299,
        description: "A fragrant seafood broth with delicate spices.",
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=900&q=85"
    },


    // NON-VEG STARTERS

    {
        category: "Non-Veg Starters",
        name: "Crispy Chicken in Chilli Sauce",
        price: 389,
        description: "Crispy chicken tossed in a punchy chilli sauce.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Crispy Chicken in Manchurian Sauce",
        price: 389,
        description: "Crispy chicken with a savoury Indo-Chinese Manchurian sauce.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Crispy Chicken in Hot Garlic Sauce",
        price: 399,
        description: "Crispy chicken coated in a fragrant hot garlic sauce.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Crispy Chicken in Szechuan Sauce",
        price: 399,
        description: "Chicken tossed in a bold, spicy Szechuan sauce.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Crispy Chicken in Oyster Sauce",
        price: 399,
        description: "Crispy chicken with a savoury oyster-style sauce.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Spicy Crunchy Chicken",
        price: 399,
        description: "A flavour-packed chicken starter with aromatic spices.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Honey Chilli Chicken",
        price: 399,
        description: "Crispy chicken coated in a glossy sweet chilli sauce.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Spicy Szechuan Hot Pan Chicken",
        price: 399,
        description: "Chicken tossed with bold Szechuan spices.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Chicken Lollipop",
        price: 429,
        description: "Juicy chicken with a bold Indo-Chinese glaze.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Drums of Heaven",
        price: 409,
        description: "Crispy chicken drumettes with a savoury spicy glaze.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Chicken Salt and Pepper",
        price: 449,
        description: "Golden chicken tossed with pepper and savoury seasoning.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Spicy Chicken Katsu",
        price: 449,
        description: "Crispy-coated chicken with a gently spiced finish.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Murg Tangdi Kebab (2 Pieces)",
        price: 399,
        description: "Marinated chicken legs with aromatic spices.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Murg Pahadi Kebab",
        price: 409,
        description: "Aromatic chicken kebab with a deliciously seasoned marinade.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Murg Banjara Kebab",
        price: 409,
        description: "A flavourful chicken kebab with an aromatic marinade.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Murg Zafarni Kebab",
        price: 409,
        description: "A richly seasoned chicken kebab.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Murg Afghani Kebab",
        price: 419,
        description: "Tender chicken kebab with a rich, aromatic marinade.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Murg Lassoni Kebab",
        price: 419,
        description: "Garlic-forward chicken kebab with warming spices.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Murg Kalimiri Kebab",
        price: 419,
        description: "Chicken kebab with aromatic spices and peppery notes.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Murg Peshwari Kebab",
        price: 399,
        description: "A deliciously seasoned chicken kebab.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Murg Chatpata Nazrana",
        price: 419,
        description: "A tangy, flavour-packed chicken starter.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Gilafi Dum Matka Kebab",
        price: 429,
        description: "Aromatic kebab prepared with a rich spice blend.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Chicken AI Faham",
        price: 749,
        description: "A richly seasoned chicken specialty with a smoky finish.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Tandoori Chicken",
        price: 449,
        description: "Chicken marinated in aromatic spices and cooked tandoori-style.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Non-Veg Starters",
        name: "Mutton Chapli Kabab",
        price: 479,
        description: "A richly seasoned mutton kebab with bold spices.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
    },


    // VEGETARIAN STARTERS

    {
        category: "Vegetarian Starters",
        name: "Stuffed Mushroom Tossed in Szechuan Sauce",
        price: 329,
        description: "Stuffed mushrooms tossed in a lively Szechuan sauce.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Starters",
        name: "Thai Corn Fritters",
        price: 289,
        description: "Golden Thai-style corn fritters with a crisp exterior.",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Starters",
        name: "Cheese Chilli Bombs",
        price: 329,
        description: "Crispy cheese bites with a gooey centre and chilli kick.",
        image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Starters",
        name: "Papad Roasted Masala",
        price: 59,
        description: "Roasted crisp papad finished with a sprinkle of masala.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Vegetarian Starters",
        name: "French Fries Plain",
        price: 189,
        description: "Classic golden fries, crisp outside and fluffy inside.",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=85"
    },


    // PIZZA

    {
        category: "Pizza",
        name: "Margherita Pizza",
        price: 429,
        description: "Classic pizza topped with tomato, mozzarella and herbs.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Pizza",
        name: "Ortolana Pizza",
        price: 439,
        description: "A garden-style pizza topped with vegetables and melted cheese.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Pizza",
        name: "Chicken Exotic Pizza",
        price: 429,
        description: "Chicken pizza layered with cheese and flavourful toppings.",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Pizza",
        name: "Chicken Picante Pizza",
        price: 449,
        description: "A chicken pizza with bold toppings and a spicy finish.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85"
    },


    // EGGS

    {
        category: "Eggs",
        name: "Boiled Egg",
        price: 149,
        description: "A simple, protein-rich classic.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Eggs",
        name: "Boiled Egg Bhurji",
        price: 199,
        description: "Eggs scrambled with onion, tomato and Indian spices.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85"
    },


    // FISH AND SEAFOOD
    // Additional dishes and prices from your latest message.

    {
        category: "Fish and Seafood",
        name: "Crispy Fried Fish Sauce",
        price: 429,
        description: "Crispy fish served with a flavourful, savoury sauce.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Thai Fish Chilli",
        price: 429,
        description: "Thai-inspired fish with chilli and aromatic seasoning.",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Thai Barbeque Prawns",
        price: 449,
        description: "Prawns prepared with aromatic spices and a bold barbecue flavour.",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Tempura Shrimp Szechuan Peppercorn",
        price: 449,
        description: "Crispy tempura shrimp with a distinctive Szechuan peppercorn finish.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Szechuan Fish Tikka",
        price: 429,
        description: "Fish tikka with bold Szechuan seasoning and a smoky finish.",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Mahi Tikka",
        price: 429,
        description: "A flavourful fish tikka prepared with aromatic spices.",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Thecha Prawns",
        price: 449,
        description: "Prawns with a bold, spicy thecha-inspired flavour.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Sizzling Tawa Pomfret",
        price: 549,
        description: "Pomfret seasoned with fragrant masala and cooked tawa-style.",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Prawns Tawa Fry",
        price: 449,
        description: "Prawns cooked with aromatic spices and a delicious tawa-fried finish.",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Sumrai Tawa Fry",
        price: 549,
        description: "A fish specialty seasoned with fragrant masala and cooked on the tawa.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Fish and Seafood",
        name: "Bhatti Da Jhinga",
        price: 439,
        description: "A flavour-packed prawn specialty with aromatic spices.",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85"
    },


    // SALADS

    {
        category: "Salads",
        name: "Green Salad",
        price: 129,
        description: "Fresh seasonal greens and crisp vegetables.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Salads",
        name: "Rustic Caesar Salad",
        price: 219,
        description: "Crisp greens with a creamy Caesar-style dressing.",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Salads",
        name: "Vinegrette Exotica",
        price: 199,
        description: "Fresh vegetables tossed in a tangy vinaigrette.",
        image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Salads",
        name: "Chicken Green Salad",
        price: 229,
        description: "Fresh greens and tender chicken in a light salad.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Salads",
        name: "Chicken Caesar Salad",
        price: 239,
        description: "Chicken, crisp greens and a creamy Caesar-style dressing.",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Salads",
        name: "Peri Peri Chicken Salad",
        price: 239,
        description: "Tender chicken, crisp greens and a peri-peri kick.",
        image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?auto=format&fit=crop&w=900&q=85"
    },

    {
        category: "Salads",
        name: "Chicken Russian Salad",
        price: 229,
        description: "A creamy chicken salad with vegetables.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
    }

];



/* ==========================================
   DOM ELEMENTS
========================================== */

const menuGrid = document.getElementById("menuGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("menuSearch");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const resetSearch = document.getElementById("resetSearch");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.getElementById("siteHeader");
const pageLoader = document.getElementById("pageLoader");


/* ==========================================
   CATEGORY FILTERS
========================================== */

const categories = [
    "All Menu",
    ...new Set(dishes.map(dish => dish.category))
];

let activeCategory = "All Menu";


function renderFilters() {

    categoryFilters.innerHTML = categories.map(category => {

        const isActive = category === activeCategory;

        return `
            <button
                type="button"
                class="filter-btn ${isActive ? "active" : ""}"
                data-category="${category}"
                aria-pressed="${isActive}"
            >
                ${category}
            </button>
        `;

    }).join("");

}


/* ==========================================
   RENDER MENU CARDS
========================================== */

function renderMenu() {

    const query = searchInput.value.trim().toLowerCase();

    const filteredDishes = dishes.filter(dish => {

        const matchesCategory =
            activeCategory === "All Menu" ||
            dish.category === activeCategory;

        const searchableText = [
            dish.name,
            dish.category,
            dish.description
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(query);

        return matchesCategory && matchesSearch;

    });


    resultCount.textContent =
        `${filteredDishes.length} ${
            filteredDishes.length === 1 ? "dish" : "dishes"
        } to discover`;


    emptyState.hidden = filteredDishes.length !== 0;
    menuGrid.hidden = filteredDishes.length === 0;


    menuGrid.innerHTML = filteredDishes.map((dish, index) => {

        return `
            <article
                class="dish-card"
                style="animation-delay: ${Math.min(index * 35, 280)}ms"
            >

                <div class="dish-image-wrap">

                    <img
                        class="dish-image"
                        src="${dish.image}"
                        alt="${dish.name}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80';"
                    >

                    <span class="dish-category">
                        ${dish.category}
                    </span>

                </div>


                <div class="dish-content">

                    <div class="dish-topline">

                        <h3 class="dish-name">
                            ${dish.name}
                        </h3>

                        <span class="dish-price">
                            ₹${dish.price}
                        </span>

                    </div>


                    <p class="dish-description">
                        ${dish.description}
                    </p>


                    <div class="dish-bottom">

                        <span class="dish-tagline">
                            Made for food lovers
                        </span>

                        <span class="dish-arrow" aria-hidden="true">
                            ↗
                        </span>

                    </div>

                </div>

            </article>
        `;

    }).join("");

}


/* ==========================================
   FILTER BUTTON EVENTS
========================================== */

categoryFilters.addEventListener("click", event => {

    const button = event.target.closest("[data-category]");

    if (!button) return;

    activeCategory = button.dataset.category;

    renderFilters();
    renderMenu();

});


/* ==========================================
   SEARCH
========================================== */

searchInput.addEventListener("input", () => {

    renderMenu();

});


/* ==========================================
   RESET SEARCH
========================================== */

resetSearch.addEventListener("click", () => {

    activeCategory = "All Menu";
    searchInput.value = "";

    renderFilters();
    renderMenu();

    document.getElementById("ourMenu").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* ==========================================
   MOBILE NAVIGATION
========================================== */

function closeNavigation() {

    mainNav.classList.remove("open");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    document.body.classList.remove("menu-open");

}


menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    document.body.classList.toggle("menu-open", isOpen);

});


mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", closeNavigation);

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeNavigation();
    }

});


window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {
        closeNavigation();
    }

});


/* ==========================================
   HEADER SCROLL EFFECT
========================================== */

function updateHeader() {

    siteHeader.classList.toggle(
        "scrolled",
        window.scrollY > 40
    );

}

window.addEventListener("scroll", updateHeader, {
    passive: true
});

updateHeader();


/* ==========================================
   PAGE LOADER
========================================== */

function hideLoader() {

    if (pageLoader) {
        pageLoader.classList.add("loaded");
    }

}


window.addEventListener("load", () => {

    setTimeout(hideLoader, 350);

});


/* Fallback in case external images take too long. */

setTimeout(hideLoader, 2500);


/* ==========================================
   FOOTER YEAR
========================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", event => {

    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   INITIALIZE
========================================== */

renderFilters();
renderMenu();
