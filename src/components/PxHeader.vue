<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <router-link to="/"> <px-icon class="mr-2" /> </router-link>
          <span class="font-semibold text-xl tracking-tight">NC-Crypto</span>
        </div>
        <router-link
          to="about"
          class="text-white font-semibold hover:text-blue-200 transition"
          >About Us</router-link
        >
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:wauto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";
export default {
  name: "PxHeader",
  components: { PxIcon },
};
</script>
