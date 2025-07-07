
# 🍽️ Restaurant Menu App

A responsive Vue.js application for browsing a restaurant's food menu, viewing item details, customizing orders, and managing a shopping basket. Inspired by the [Nando's UK Menu](https://www.nandos.co.uk/food/menu/).

---

## ✅ Project Phases Checklist

---

## 📌 Phase 1: Basic Menu Viewing & Item Details

> Core functionality to browse menu and add items to the basket.  
> _Goal: Complete this phase to have a working product showcase._

- [X] **Project Setup**
  - [X] Initialize Vue.js project (`npm create vue@latest`)
  - [X] Setup project structure (components, assets, router, etc.)
  - [X] Add Tailwind CSS for styling

- [X] **Load JSON Data (Local)**
  - [X] Create local JSON file for menu data
  - [X] Load & parse JSON data in the app

- [X] **Home/Menu Screen**
  - [X] Sticky category navigation bar (e.g., Starters, PERi-PERi Chicken)
  - [X] Render section headers for categories
  - [X] Display menu item cards
    - [X] Image
    - [X] Name
    - [X] Calorie count
    - [X] Short description
    - [X] Price

- [ ] **Detailed Item View (Route/Pop-up)**
  - [ ] Show large product image
  - [ ] Display item name, description, calories, and price
  - [ ] Implement customization panels (accordion style):
    - [ ] "How spicy?" choices
    - [ ] "Choose your side" choices
  - [ ] Add to Basket button (with quantity selector)

- [ ] **Add to Basket Functionality**
  - [ ] Add item to basket from main menu
  - [ ] Add item to basket from detailed view
  - [ ] Manage item quantity when adding to basket

---

## 🚀 Phase 2: Basket Management

> After the basic flow works, add basket interaction.

- [ ] **Basket Page/Screen**
  - [ ] View list of added items
  - [ ] Sticky checkout header showing running total
  - [ ] Upsell carousel: Suggested items ("Don't forget these...")

- [ ] **Basket Item Controls**
  - [ ] Edit Item customization
  - [ ] Remove Item (trash icon)
  - [ ] Quantity Selector (+ and - buttons)

---

## 🔜 Phase 3: Checkout Process

> Finalize the basic order flow.

- [ ] **Simple Checkout Form**
  - [ ] User details (optional) or confirmation button
  - [ ] Confirmation message after "Checkout"

---

## 🔧 Future Improvements (Optional)

- [ ] Replace local JSON with API call (backend server)
- [ ] Authentication (login/signup)
- [ ] Order history
- [ ] Payment integration
- [ ] Responsive optimizations
- [ ] Unit & E2E testing

---

## 🛠️ Tech Stack

- **Framework:** Vue.js 3
- **Routing:** Vue Router
- **State Management:** (Optional: Pinia or Vuex for basket)
- **Styling:** Tailwind CSS
- **Data:** Local JSON (Later API)

---

## 🔗 Design Reference

[Nando's UK Menu](https://www.nandos.co.uk/food/menu/)

---

## 📂 Project Setup (To be filled as you go)

\`\`\`bash
# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

---

## ✨ Author

- Pratham Karki

---
