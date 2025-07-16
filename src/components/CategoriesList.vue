<script setup>
    import menuData from '@/foodData/menuData.json'
    import { ref, computed } from 'vue';
    import MenuItem from './MenuItem.vue';
    const foodCategories = menuData.categories;
    import ItemDetails from './ItemDetails.vue';
    import BasketSidebar from './BasketSidebar.vue';
    import { ShoppingCart } from 'lucide-vue-next';
    const choosenItem = ref(null);

    const isOpen = ref(false);

    function displayItem(item){
        choosenItem.value = item;
        isOpen.value = true;
    }

    function closeTheModel(){
        isOpen.value = false;

    }

    // creating reactive variable to store items in basket
    const basketItems = ref([]);

    // add items to basketItems
  function handleAddtoBasket(selectedItemswithCustomization){
    console.log('The selected items are as follow: ', selectedItemswithCustomization)

    const newBasketItems = {
      basketItemId: Date.now() + Math.random().toString(36).substring(2,9),
      id: selectedItemswithCustomization.id,
      name: selectedItemswithCustomization.name,
      image_url: selectedItemswithCustomization.image_url,
      price: selectedItemswithCustomization.base_price,
      calories: selectedItemswithCustomization.calories,
      quantity: 1,
      userSelectedChoices: selectedItemswithCustomization.userSelectedChoices,
    }
    basketItems.value.push(newBasketItems);

    isOpen.value = false;
  }

  // reactivity for opening basket
  const isBasketOpen = ref(false);

  //function to increase basket item
    function increaseQuantity(id){
      const item = basketItems.value.find(item => item.basketItemId === id)
      if(item){

        if(item.quantity < 50){
          item.quantity++;
        }
      }
    }


  //function to decrease basket item
    function decreaseQuantity(id){
      const item = basketItems.value.find(item => item.basketItemId === id);
      if(item){
        if(item.quantity > 1){
          item.quantity--;
        }
      }
    }

    //function to delete a item completely
    function removeItem(id){
      const index = basketItems.value.findIndex(item => item.basketItemId === id);
      if(index !== -1){
        basketItems.value.splice(index, 1);
      }
    }

     // computed property to get the total of the products
 const totalPrice = computed(()=>{
    return basketItems.value.reduce((total, item)=>{
      return total + item.price * item.quantity
    }, 0);
 });

</script>

<template>
    <main>
        <header class="header p-2 bg-gray-800">
            <div class="header_contents max-w-screen-xl mx-auto py-3 ">
                <div class="categories_container">
                    <div class="flex flex-col md:flex-row items-center  text-white align-center gap-4 md:gap-10">
                        <h1 class="bg-[#d31c29] px-5 py-3 font-semibold uppercase  bg-red-700 hover:bg-red-800 transition-colors duration-300 px-5 py-2 font-bold uppercase text-lg md:text-xl rounded-md shadow-md">Extra hot Lunch Deals</h1>
                         <ul class="list_of_categories flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                            <li v-for="category in  foodCategories" :key="category.id" class="px-5 py-3 font-semibold cursor-pointer hover:text-red-400 transition-colors duration-200">{{ category.name }}</li>
                         </ul>
                    </div>

                    <button @click="isBasketOpen = !isBasketOpen" class="text-white hover:text-red-400" >
                      <ShoppingCart  size="50"/>
                    </button>

                </div>
            </div>
        </header>

        <section class="food_sections py-8 max-w-screen-xl mx-auto px-4 ">
            <h1 class="text-center text-3xl font-bold py-4 tracking-wide">Food Menu</h1>
            <div v-for="category in foodCategories" :key="category.id" class="pb-5">
                <p class="text-3xl tracking-wide font-bold mb-6 text-gray-900">{{category.name}}</p>
                <div class="food_items flex flex-wrap gap-4 mb-6 " >
                   <MenuItem v-for="item in category.items" :item="item" class="bg-white rounded-lg shadow-md hover:shadow-lg" v-on:view-menu-item="displayItem"/>
                </div>
            </div>
        </section>
        <ItemDetails v-if="isOpen" :item="choosenItem" v-on:close-model="closeTheModel" v-on:add-to-basket="handleAddtoBasket"/>
        <BasketSidebar v-if="isBasketOpen" :basketItem="basketItems" v-on:close="isBasketOpen = false"
        v-on:increase="increaseQuantity"  v-on:decrease="decreaseQuantity"
        v-on:remove="removeItem" :totalPrice="totalPrice"/>

    </main>
</template>
