<template>
<div class="py-7">
<div class="container p-8 max-w-md mx-auto border-1">

  <div class="header flex gap-3 items-center mb-5">
    <button @click="goBack" class="cursor-pointer"><StepBack size="30" fill="black"/></button>
    <h1 class="Checkout text-2xl tracking-wider font-bold ">Checkout</h1>
  </div>

  <form action="#" class="space-y-4" @submit.prevent="onSubmit">
      <div class="ml-1 mb-5">
           <label for="name" class=" font-semibold mb-3 block gap-2 flex items-center">Name
            <User color="gray"/>
           </label>
           <input type="text" id="name" name="name" v-model="name" class="w-full border px-2 py-1" required>
           <p class="text-red-500 text-sm mt-2">{{ nameError }}</p>
       </div>

      <div class="ml-1 mb-5 ">
          <label for="email" class="font-semibold mb-3 block flex gap-2 items-center">Email
            <Mail color="gray"/>
          </label>
          <input type="email" id="email" name="email" v-model="email" class="w-full border px-2 py-1" required>
          <p class="text-red-500 text-sm mt-2">{{ emailError }}</p>

      </div>

      <div class="ml-1 mb-5">
        <label for="phone" class="block text-sm font-medium  flex gap-2 items-center mb-3">Phone
          <Phone size="20" color="gray"/>
        </label>
        <input type="tel" id="phone" name="phone" v-model="phone" class="w-full border px-2 py-1" required >
        <p class="text-red-500 text-sm mt-2">{{ phoneError }}</p>
      </div>

      <div class="ml-1 mb-5">
        <label for="address" class="block text-sm font-medium mb-3 gap-2 flex">Address
          <House color="gray"/>
        </label>
        <textarea  id="address" name="address" v-model="address" class="w-full border px-2 py-1" required> </textarea>
        <p class="text-red-500 text-sm mt-2">{{ addressError }}</p>
      </div>

      <button class="place_order w-full px-2 py-2 bg-black text-white hover:opacity-80 cursor-pointer" type="submit">Confirm Order</button>
  </form>
</div>
</div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';
  import { Phone, StepBack, Mail, User, House } from 'lucide-vue-next';
  import { useForm, useField } from 'vee-validate';
  import * as yup from 'yup';



  const router = useRouter();

  const toast = useToast();

  function goBack(){
    router.push('/')
  }

//  use of Yup schema for form validation

const schema = yup.object({
  name: yup.string()
        .required('Name is required.')
        .min(5, 'Name must be at least 5 characters')
        .max(20, 'Name must be less than 20 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required')
  .min(5, 'Address must be at least 5 characters')
  .max(50, 'Address must be less than 50 characters'),
  phone: yup
        .string('Phone number is required')
        .max(10, 'Phone must be at least 10 digits')
        .min(10, 'Phone number must be at least 10 digits')
        .matches(/^[0-9]+$/, 'Phone number must contain only digits')
})

const { handleSubmit } = useForm({
  validationSchema: schema
});

const onSubmit = handleSubmit((values)=>{
  console.log(values);
  toast.success('Order successful!');
})

const { value: name, errorMessage: nameError } = useField('name');
const { value: email, errorMessage: emailError } = useField('email');
const { value: address, errorMessage: addressError } = useField('address');
const { value: phone, errorMessage: phoneError } = useField('phone');
</script>
