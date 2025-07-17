<template>
<div class="container p-8 max-w-md mx-auto border-1">

  <div class="header flex gap-3 items-center mb-5">
    <button @click="goBack" class="cursor-pointer"><StepBack size="30" fill="black"/></button>
    <h1 class="Checkout text-2xl tracking-wider font-bold ">Checkout</h1>
  </div>

  <form action="#" class="space-y-4" @submit.prevent="handleSubmit">
      <div class="ml-1 mb-5">
           <label for="name" class=" font-semibold mb-3 block gap-2 flex items-center">Name
            <User color="gray"/>
           </label>
           <input type="text" id="name" name="name" v-model="name" class="w-full border px-2 py-1">
      </div>

      <div class="ml-1 mb-5 ">
          <label for="email" class="font-semibold mb-3 block flex gap-2 items-center">Email
            <Mail color="gray"/>
          </label>
          <input type="email" id="address" name="address" v-model="email" class="w-full border px-2 py-1">
      </div>

      <div class="ml-1 mb-5">
        <label for="phone" class="block text-sm font-medium  flex gap-2 items-center mb-3">Phone
          <Phone size="20" color="gray"/>
        </label>
        <input type="tel" id="phone" name="phone" v-model="phone" class="w-full border px-2 py-1" required >
      </div>

      <div class="ml-1 mb-5">
        <label for="address" class="block text-sm font-medium mb-3 gap-2 flex">Address
          <House color="gray"/>
        </label>
        <textarea  id="address" name="address" v-model="address" class="w-full border px-2 py-1" required> </textarea>
      </div>

      <button class="place_order w-full px-2 py-2 bg-black text-white hover:opacity-80 cursor-pointer" type="submit">Confirm Order</button>
  </form>
</div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { Phone, StepBack, Mail, User, House } from 'lucide-vue-next';
  import {ref} from 'vue';

  const name = ref('');
  const address = ref('');
  const phone = ref('');
  const email = ref('');

  const router = useRouter();

  function goBack(){
    router.push('/')
  }

  function handleSubmit(){
    console.log('Submitted:', {
    name: name.value,
    address: address.value,
    phone: phone.value,
  });

  if (!name.value || !address.value || !phone.value) {
    alert('Please fill in all fields');
    return;
  }

  alert('Form submitted successfully!');
  }

</script>
