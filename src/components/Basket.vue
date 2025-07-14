<template>
    <section class="basket_container">
      <div v-if="basketItems.length === 0">
        <h1></h1>
      </div>
    </section>

</template>


<script setup>
  const props = defineProps({
    basketItems: Array,
  });

</script>
