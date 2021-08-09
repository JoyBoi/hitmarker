<template>
  <div class="p-10">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-textdark text-base">
          {{ company }}
        </p>
        <p class="text-gray-700 text-base">
          {{ country }}
        </p>
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
  },
};
</script>