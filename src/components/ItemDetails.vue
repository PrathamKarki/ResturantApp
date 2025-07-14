<template>
    <aside className="fixed inset-0  bg-opacity-3 flex justify-center items-center z-50 ">
      <div className="bg-white p-6  max-w-md w-full mx-4 relative animate-scale-in shadow-2xl overflow-y-auto max-h-[90vh]">
        <button @click="emit('close-model', item)"  className=" text-2xl absolute top-3  rounded bg-red-500  right-4 text-black-600 hover:text-gray-70 rounded-full transition-colors duration-200  font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"> &times; </button>
        <div className="mb-4">
          <img :src="item.image_url":alt="item.name" className="w-full object-cover h-auto  shadow-md"/>
        </div>

        <h1 className="text-2xl font-bold mb-2 text-gray-800 pr-8">{{item.name}}</h1>
        <p className="text-gray-600 mb-2 text-sm font-medium"> Calories: {{item.calories}}</p>
        <p className="text-gray-700 mb-4 leading-relaxed">{{item.description}} </p>
        <div className="bg-[#ebe6c8] inline p-2">
          <span className="text-lg font-light text-gray-600">From</span>
          <span className="font-bold text-lg text-green-600"> £{{item.base_price}}</span>
        </div>

        <div class="customization_section ">
          <div v-if="item.customization_options && item.customization_options.length" class="mb-5">
            <h2 class="text-center mt-4 text-lg font-bold  text-gray-800 tracking-wide">Customize your item</h2>
            <div v-for="option in item.customization_options">
              <h3 class="bg-[#ebe6c8] text-gray-600 inline-block mb-2 mt-3 p-1 font-bold">{{ option.title}}</h3>
              <div class="choices_button " v-if="option.type==='single'">
                <label  class="flex items-start mb-4" v-for="choice in option.choices" :key="choice.id">
                   <input type="radio" :name="option.id" :value="choice.id" class="mr-2 mt-1" >
                   <span>
                    <p class="name block font-bold text-[18px] tracking-wider" :class="{'text-[#441e0a]': choice.name === 'Extra Hot'
                      , 'text-[#a40e25]' : choice.name === 'Hot', 'text-[#fc9530]' : choice.name === 'Medium', 'text-[#9dc62a]' : choice.name === 'Lemon & Herb', 'text-[#566128]' : choice.name === 'Plain...ish', 'text-[#53766e]' : choice.name === 'PERI-Tamer' }">{{ choice.name }}</p>
                    <p class="description block text-sm text-gray-600"> {{ choice.description }}</p>
                    <p class="calories inline-block text-sm text-gray-600">Calories: {{ choice.calories}}</p>
                   </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
        <button  @click="emit('add-to-basket', item)" class="flex mt-4  justify-center items-center w-full bg-black text-white uppercase tracking-wider p-2 hover:opacity-80">Add to Basket</button>
        </div>
      </div>
    </aside>
</template>

<script setup>
    import { defineEmits, ref } from 'vue';
    defineProps({
        item: Object,
    });

    const emit = defineEmits(['close-model', 'add-to-basket']);


</script>
