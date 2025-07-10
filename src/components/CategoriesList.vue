<script setup>
    import menuData from '@/foodData/menuData.json'
    import { ref } from 'vue';
    import MenuItem from './MenuItem.vue';
    const foodCategories = menuData.categories;
    import ItemDetails from './ItemDetails.vue';

    const choosenItem = ref(null);

    const isOpen = ref(false);

    function displayItem(item){
        choosenItem.value = item;
        isOpen.value = true;
    }

    function closeTheModel(){
        isOpen.value = false;

    }

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
        <ItemDetails v-if="isOpen" :item="choosenItem" v-on:close-model="closeTheModel"/>
        
    </main>
</template>