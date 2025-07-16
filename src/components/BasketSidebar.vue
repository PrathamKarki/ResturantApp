<template>
  <aside class="sidebar_component">
    <div class="container fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto z-50">

      <div v-if="basketItem.length === 0" class="flex items-center justify-center gap-2" >
        <ShoppingCart  size="30" fill="black"/>
        <h1 class="text-lg font-bold tracking-wide">Your cart is empty </h1>
      </div>

      <div v-else>
        <h1 class="text-center mb-3 font-bold tracking-wider">Your Cart Items:</h1>

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
          </div>
      </div>
    </div>
  </aside>
</template>


<script setup>
import { ShoppingCart } from 'lucide-vue-next';
import menuData from "@/foodData/menuData.json";
 const props = defineProps({
   basketItem: Array,
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
