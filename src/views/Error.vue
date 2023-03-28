<template>
  <div class="flex-col items-center">
    <h1 class="text-gray-700 text-xl text-center uppercase">
      Ups! ocurrió un Error! <br />(╯°□°）╯︵ ┻━┻
    </h1>
    <router-link
      class="mt-5 text-xl text-green-600 hover:underline hover:text-green-900 transition"
      to="/"
      >Volver a la página de Inicio</router-link
    >
  </div>
</template>

<script>
export default {
  name: "InternalError",
};
</script>
