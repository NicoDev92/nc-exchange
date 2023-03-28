<template>
  <div>
    <div>
      <nav>
        <ul class="inline-flex items-center space-x-px">
          <li v-for="pag in pages()" v-bind:key="pag">
            <a
              v-on:click="pagedElements(pag)"
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-900 hover:text-blue-100 dark:bg-gray-800 transition dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >{{ pag }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="mb-5">
      <input
        class="font-semibold text-white rounded-md bg-gray-700 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
        id="filter"
        placeholder="Buscar🔎..."
        type="text"
        v-model="filter"
      />
    </div>
    <table>
      <thead>
        <tr class="bg-gray-100 border-b-2 border-gray-200">
          <th></th>
          <th>
            <span>Ranking</span>
          </th>
          <th>Nombre</th>
          <th>Precio(U$S)</th>
          <th>Cap. de Mercado</th>
          <th>Variación 24hs</th>
          <td class="hidden sm:block"></td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="asset in filteredAssets"
          v-bind:key="asset.id"
          class="bg-gray-300 border-b border-gray-200 hover:bg-blue-200 hover:bg-orange-100 transition"
        >
          <td>
            <img
              class="w-8 px-1"
              v-bind:src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
              v-bind:alt="asset.name"
            />
          </td>
          <td class="font-bold">#{{ asset.rank }}</td>
          <td class="hover:text-green-600 hover:underline transition">
            <router-link
              v-bind:to="{ name: 'coin-detail', params: { id: asset.id } }"
            >
              {{ asset.name }}
            </router-link>
          </td>
          <td>{{ asset.priceUsd | dollar }}</td>
          <td>{{ asset.marketCapUsd | dollar }}</td>
          <td
            v-bind:class="
              asset.changePercent24Hr.includes('-')
                ? 'text-red-600'
                : 'text-green-600'
            "
          >
            {{ asset.changePercent24Hr | percent }}
          </td>
          <td class="hidden sm:block"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PxAssetsTable",

  data() {
    return {
      elementsPages: 10,
      pagedData: [],
      elements: 1,
      filter: "",
      sortOrder: 1,
    };
  },

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredAssets() {
      if (!this.filter) {
        return this.pagedData;
      }
      return this.assets.filter(
        (elem) =>
          elem.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
          elem.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
  },

  mounted() {
    this.pagedElements(1);
  },
  methods: {
    pages() {
      return Math.ceil(this.assets.length / this.elementsPages);
    },

    pagedElements(numPage) {
      this.pagedData = [];
      let start = numPage * this.elementsPages - this.elementsPages;
      let end = numPage * this.elementsPages;

      for (let i = start; i < end; i++) {
        this.pagedData.push(this.assets[i]);
      }
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td,
nav {
  padding: 20px 0px;
  text-align: center;
}

th {
  padding: 15px;
}

@media (max-width: 640px) {
  td,
  th,
  nav {
    font-size: 0.8rem;
  }

  th {
    padding: 5px;
  }
}
</style>
