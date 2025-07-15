<template>
  <aside class="sidebar_component">
    <div class="container fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto z-50">
      <div v-if="basketItem.length === 0" class="flex items-center justify-center gap-2" >
        <ShoppingCart  size="30" fill="black"/>
        <h1 class="text-lg font-bold tracking-wide">Your cart is empty </h1>
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
