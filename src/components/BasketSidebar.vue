<template>
  <aside class="sidebar_component">
    <div class="container fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto z-50">
      <div v-if="basketItem.length === 0" class="flex items-center justify-center gap-2" >
        <ShoppingCart  size="30" fill="black"/>
        <h1 class="text-lg font-bold tracking-wide">Your cart is empty </h1>
      </div>
      <div v-else>
        <h1 class="text-center mb-3 font-bold tracking-wider">Your Cart Items:</h1>
        <div v-for="item in basketItem" class="rounded-lg shadow-lg p-3">
          <h1 class="text-gray-700 mb-2 bg-[#ebe6c8] font-bold p-1 inline-block">{{ item.name }}</h1>
          <img :src="item.image_url" :alt="item.name">
           <p class="text-sm font-bold p-1 text-gray-700 mt-2  bg-[#ebe6c8] inline-block">Price: £{{ item.price }}</p>
           <p class="text-sm font-bold p-1 text-gray-700 mt-2 bg-[#ebe6c8] inline-block ">Calories: {{ item.calories }} </p>
        </div>
      </div>
     
    </div>
  </aside>
</template>


<script setup>
import { ShoppingCart } from 'lucide-vue-next';
 const props = defineProps({
   basketItem: Array,
   default: () => []
 })


</script>
