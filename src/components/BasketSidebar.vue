<template>
  <aside class="sidebar_component">
    <div class="container fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto z-50 flex flex-col justify-between ">
      <button @click="$emit('close')"  className=" text-2xl absolute top-3  rounded bg-red-500  right-4 text-black-600 hover:text-gray-70 rounded-full transition-colors duration-200  font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"> &times; </button>

      <div v-if="basketItem.length === 0" class="flex items-center justify-center gap-2" >
        <ShoppingCart  size="30" fill="black"/>
        <h1 class="text-lg font-bold tracking-wide">Your Basket is empty </h1>
      </div>

      <div v-else>
        <h1 class="text-center mb-3 font-bold tracking-wider">Your Basket Items:</h1>

        <div v-for="item in basketItem" :key="item.basketItemId" class="rounded-lg shadow-lg p-3">
          <h1 class="text-gray-700 mb-2 bg-[#ebe6c8] font-bold p-1 inline-block">{{ item.name }}</h1>
          <img :src="item.image_url" :alt="item.name">
           <p class="text-sm font-bold p-1 text-gray-700 mt-2  bg-[#ebe6c8] inline-block">Price: £{{ item.price }}</p>
           <p class="text-sm font-bold p-1 text-gray-700 mt-2 bg-[#ebe6c8] inline-block ">Calories: {{ item.calories }} </p>
            <div v-if="item.userSelectedChoices" class="mt-2 ">
              <p v-for="(choiceId, optionId) in item.userSelectedChoices" :key="optionId" class=" text-gray-800 font-semibold inline-block p-1">
                {{ getChoiceLabel(optionId, choiceId) }}
              </p>
            </div>
            <div class="mt-4 space-y-2 mb-2">
                 <p class="text-sm font-bold p-1 text-gray-700 bg-[#ebe6c8] flex items-center rounded-md">
                  Quantity:
                 <button @click="$emit('increase', item.basketItemId)"  class="ml-3 px-3 py-0.6 bg-red-500 text-white rounded-full ">+</button>
                 <span class="mx-2 text-base C">{{ item.quantity }}</span>
                 <button @click="$emit('decrease', item.basketItemId)" class="px-3 py-0.6 bg-red-500 text-white rounded-full  text-sm font-semibold">-</button>
                </p>
            </div>

            <div class="total_and_delete_icon flex items-center justify-between">
              <p class="text-base font-bold p-1 text-gray-800">Total:
              <span class="font-bold text-lg">£{{ (item.quantity * item.price).toFixed(2) }}</span>
             </p>
             <button @click="$emit('remove', item.basketItemId)" class=" hover:text-red-800 p-1 rounded-full">
                  <Trash2Icon fill="white" size="20"/>
             </button>
            </div>
          </div>
           <div class="p-3 flex items-center justify-between">
              <p class="text-lg font-semibold  text-gray-800">Estimated total</p>
              <span class="font-semibold text-lg text-gray-800">£ {{ totalPrice.toFixed(2) }}</span>
            </div>

            <div class="checkout_section p-3 ">
              <button class="checkout mt-4 w-full bg-red-500 text-white p-2 rounded cursor-pointer hover:opacity-80 active:bg-black">Checkout</button>
            </div>
      </div>
    </div>
  </aside>
</template>


<script setup>
import { ShoppingCart } from 'lucide-vue-next';
import { Trash2Icon } from 'lucide-vue-next';
import menuData from "@/foodData/menuData.json";
 const props = defineProps({
   basketItem: Array,
   totalPrice: Number,
   default: () => []
 })

 // a function to get customization details
 function getChoiceLabel(optionId, choiceId){
    for(const category of menuData.categories){
      for(const item of category.items){
        const option = item.customization_options?.find(opt=> opt.id === optionId);
        const choice = option?.choices?.find(c => c.id === choiceId)
        if(choice){
          return `${option.title}:  ${choice.name}`;
        }
      }
    }
    return null;
 }
/*
{
  id: 101,
  name: "Double Chicken Wrap",
  price: 12.50,
  calories: 894,
  image_url: "...",
  userSelectedChoices: {
    opt_spice: "spice_medium",   here optionId = opt_spice and choiceId = side_rice
    opt_sides: "side_rice"
  }
}
*/
</script>
