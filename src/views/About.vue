<template>
  <div class="flex-col items-center">
    <h1 class="text-gray-700 text-6xl text-center">NiCodeExchage v1.0.0</h1>
    <p class="text-gray-600 text-xl text-center mt-10">
      Servicio gratuito para obtener las cotizaciones de las cryptomonedas más
      importantes a traves de Coincap.
      <br />
      <span class="font-weight-semibold">
        Los Administradores de NiCodeExchage no se hacen responsables por
        variantes a la hora de realizar transacciones.
      </span>
    </p>

    <router-link
      to="/"
      class="mt-5 text-xl text-green-600 hover:underline hover:text-green-900 transition"
      >Inicio</router-link
    >
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
