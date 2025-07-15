<script setup>
  import { defineEmits } from 'vue';
    defineProps({
      item: Object,
    })

    const emit = defineEmits(['view-menu-item'])

</script>

<template>
  <section @click="emit('view-menu-item', item)"  class="food_container p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg flex flex-wrap justify-between items-center p-4  shadow-2xl max-w-[600px] cursor-pointer">
    <div class="card_items flex-grow ">
        <h1 class="text-xl sm:text-2xl  text-gray-800 font-bold mb-2">{{item.name}}</h1>
        <p class="text-sm text-gray-600 mb-1">Calories: {{item.calories}}</p>
        <p class="text-sm text-gray-600 mb-3">{{item.description}}</p>
        <p class="font-bold text-lg  mt-2">Price: ${{item.base_price}}</p>
    </div>
    <div class="image_container flex-shrink-0 w-full sm:w-32 h-32 sm:h-24">
        <img :src="item.image_url" :alt="item.name" class="w-full h-full object-cover max-w-[100%]">
    </div>
  </section>
</template>

