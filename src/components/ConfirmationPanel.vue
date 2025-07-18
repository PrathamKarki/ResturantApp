<template>
  <div class="main_container bg-gray-200 p-3 flex items-center justify-center min-h-screen shadow-2xl">
      <div class="confirmation_container max-w-[600px] mx-auto shadow-2xs bg-white  p-8">
        <div>
          <div class="bg-green-500 mb-6 mx-auto rounded-full w-20 h-20 flex items-center justify-center">
            <p class="text-5xl text-white font-bold"> ✓</p>
          </div>
          <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">Thanks for your order!</h1>
          <p class="text-gray-600 text-lg">Your order is successfully received, A receipt is on it's way to your inbox</p>
        </div>

        <div class="mt-5 text-center">
           <button @click="mainMenu" class="inline-block bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-6 cursor-pointer">Order Again</button>
        </div>
     </div>
  </div>
</template>



<script setup>
 import { useRouter } from 'vue-router';

 const router = useRouter();

  function mainMenu(){
    router.push('/');
  }

</script>
