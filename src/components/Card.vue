<template>
  <div class="p-10">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg h-36 hover:shadow-inner"
    >
      <div class="px-6 py-4 h-32 flex flex-col justify-between">
        <div class="font-bold text-sm mb-2">{{ title }}</div>
        <div>
          <div class="flex py-2">
            <img
              class="h-4 w-4"
              :alt="companyimg"
              :src="require(`../assets/${companyimg}`)"
            />
            <p class="text-textdark px-6 text-xs font-light">
              {{ company }}
            </p>
          </div>
          <div class="flex py-2">
            <img
              class="h-4 w-4"
              :alt="countryimg"
              :src="require(`../assets/${countryimg}`)"
            />
            <p class="text-gray-50 px-6 text-xs font-light">
              {{ country }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    company: String,
    country: String,
    companyimg: String,
    countryimg: String,
  },
};
</script>