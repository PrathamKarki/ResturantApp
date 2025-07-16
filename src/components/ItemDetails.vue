<template>
    <aside class="fixed inset-0  bg-opacity-3 flex justify-center items-center z-50 ">
      <div class="bg-white p-6  max-w-md w-full mx-4 relative animate-scale-in shadow-2xl overflow-y-auto max-h-[90vh]">
        <button @click="emit('close-model', item)"  className=" text-2xl absolute top-3  rounded bg-red-500  right-4 text-black-600 hover:text-gray-70 rounded-full transition-colors duration-200  font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"> &times; </button>
        <div class="mb-4">
          <img :src="item.image_url":alt="item.name" className="w-full object-cover h-auto  shadow-md"/>
        </div>

        <h1 class="text-2xl font-bold mb-2 text-gray-800 pr-8">{{item.name}}</h1>
        <p class="text-gray-600 mb-2 text-sm font-medium"> Calories: {{item.calories}}</p>
        <p class="text-gray-700 mb-4 leading-relaxed">{{item.description}} </p>
        <div class="bg-[#ebe6c8] inline p-2">
          <span class="text-lg font-bold text-gray-600">From</span>
          <span class="font-bold text-lg text-green-600"> £{{item.base_price}}</span>
        </div>

        <div class="customization_section ">
          <div v-if="item.customization_options && item.customization_options.length" class="mb-5">
            <h2 class="text-center mt-4 text-lg font-bold  text-gray-800 tracking-wide">Customize your item</h2>
            <div v-for="option in item.customization_options">
              <h3 class="bg-[#ebe6c8] text-gray-600 inline-block mb-2 mt-3 p-1 font-bold">{{ option.title}}</h3>
              <div class="choices_button " v-if="option.type==='single'">
                <label  class="flex items-start mb-4" v-for="choice in option.choices" :key="choice.id">
                   <input v-model="userSelectedChoices[option.id]" type="radio" :name="option.id" :value="choice.id" class="mr-2 mt-1" >
                   <span>
                    <p class="name block font-bold text-[18px] tracking-wider" :class="spiceLevelColor(choice.name)">{{ choice.name }}</p>

                    <div class="fires  flex">
                        <FlameIcon v-for="n in (choice.name === 'Extra Hot' ? 5:
                        choice.name === 'Hot' ? 4 :
                        choice.name === 'Medium' ? 3 :
                        choice.name === 'Lemon & Herb' ? 2 :
                        choice.name === 'Plain...ish' ? 1 : 0
                      )" :key="n" size="16"  :fill="choice.name === 'Extra Hot'? '#b2222'
                      : choice.name === 'Hot' ? '#ff4500': choice.name === 'Medium' ? '#ff8c00' : choice.name === 'Lemon & Herb' ? '#9dc62a' : '#ccc'  " class="mr-1"/>
                    </div>
                    <p class="description block text-sm text-gray-600"> {{ choice.description }}</p>
                    <p class="calories inline-block text-sm text-gray-600">Calories: {{ choice.calories}}</p>
                   </span>
                </label>
              </div>

              <!-- multiple-choice customization -->

            </div>
          </div>
        </div>

        <div class="text-center">
          <!-- handling click on event -->
        <button  @click="emitAddToBasket" class="flex mt-4  justify-center items-center w-full bg-black text-white uppercase tracking-wider p-2 hover:opacity-80">Add to Basket</button>
        </div>
      </div>
    </aside>
</template>

<script setup>
    import { defineEmits, reactive, ref } from 'vue';
    import { FlameIcon } from 'lucide-vue-next';
   const props =  defineProps({
        item: Object,
    });

    const emit = defineEmits(['close-model', 'add-to-basket']);


    const spiceLevelColor = (name) =>{
      switch(name){
        case 'Extra Hot':
          return 'text-[#441e0a]'

        case 'Hot':
          return 'text-[#a40e25]'

        case 'Medium':
          return 'text-[#fc9530]'

        case 'Lemon & Herb':
          return 'text-[#9dc62a]'

        case 'Plain...ish':
          return 'text-[#566128]'

        default:
        return ''
      }
    }

    // for storing the selected option by user on different spice levels.
    const userSelectedChoices = ref({});


    // trigger when we click "add to basket"
    // also for logging selected customization option, spice level and emits the object (including customization  to parent components
    function emitAddToBasket(){
        console.log("Selected choice on clikcing add to basket", userSelectedChoices.value);
        emit('add-to-basket', {...props.item, userSelectedChoices: userSelectedChoices.value})
        console.log(props.item);
        console.log(userSelectedChoices.value);
    }

</script>
