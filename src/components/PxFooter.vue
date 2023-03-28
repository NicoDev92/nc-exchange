<template>
  <footer class="bg-gray-900 dark:bg-gray-900">
    <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex">
          <router-link to="/"> <px-icon class="mr-2" /> </router-link>
          <span class="font-semibold text-xl text-white tracking-tight"
            >NC-Crypto</span
          >
        </div>

        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <router-link
              to="about"
              class="text-white font-semibold hover:text-blue-200 transition md:mr-6"
              >About Us</router-link
            >
          </li>
          <li>
            <a
              href="#"
              class="text-white font-semibold hover:text-blue-200 transition md:mr-6"
              >Privacy Policy</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-white font-semibold hover:text-blue-200 transition md:mr-6"
              >Licensing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-white font-semibold hover:text-blue-200 transition md:mr-6"
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <a href="https://flowbite.com/" class="hover:underline">NiCode™</a>. All
        Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  components: { PxIcon },
  name: "PxFooter",
};
</script>
