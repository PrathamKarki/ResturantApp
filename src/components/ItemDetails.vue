<template>
    <aside className="fixed inset-0  bg-opacity-3 flex justify-center items-center z-50">
      <div className="bg-white p-6  max-w-md w-full mx-4 relative animate-scale-in shadow-2xl overflow-y-auto">
        <button @click="emit('close-model', item)"  className=" text-2xl absolute top-4 rounded bg-red-500  right-4 text-black-600 hover:text-gray-70 rounded-full transition-colors duration-200  font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"> &times; </button>
        <div className="mb-4">
          <img :src="item.image_url":alt="item.name" className="w-full h-48 object-cover rounded-md shadow-md"/>
        </div>
        
        <h1 className="text-2xl font-bold mb-2 text-gray-800 pr-8">{{item.name}}</h1>
        <p className="text-gray-600 mb-2 text-sm font-medium"> Calories: {{item.calories}}</p>
        <p className="text-gray-700 mb-4 leading-relaxed">{{item.description}} </p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-green-600"> $ {{item.base_price}}</span>
        </div>
      </div>
    </aside>
</template>

<script setup>
    import { defineEmits } from 'vue';
    defineProps({
        item: Object,
    });

    const emit = defineEmits(['close-model']);



</script>