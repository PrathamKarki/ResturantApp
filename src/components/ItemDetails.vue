<template>
    <aside class="model_container fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center items-center z-50">
        <div class="contents bg-white p-6 rounded-lg max-w-md w-full relative">
            <button class="close-btn" @click="emit('close-model')">&times;</button>
            <div class="image_container">
                <img :src="item.image_url" alt="item.name" class="w-full h-48 object-cover rounded-md mb-4">
            </div>
            <h1 class="title text-2xl font-bold mb-2">{{ item.name }}</h1>
            <p class="calories text-gray-600 mb-2">{{ item.calories }}</p>
            <p class="description text-gray-700 mb-4">{{ item.description }}</p>
            <span class="price font-bold text-lg">{{ item.price }}</span>
        </div>
    </aside>
  
</template>

<script setup>
    import { defineEmits } from 'vue';
    defineProps({
        item: Object,
    });

    const emit = defineEmits('close-model');



</script>