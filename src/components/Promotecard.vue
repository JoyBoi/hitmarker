<template>
  <div
    class="
      shadow-inner
      max-w-6xl
      mx-auto
      flex
      justify-between
      items-center
      px-4
      py-2
      bg-primary
      rounded
      space-x-6
      mb-10
    "
  >
    <div class="mr-52">
      <h1 class="text-xl font-bold mb-4 text-textlight">Promote Your job</h1>
      <p class="text-textlight font-light text-sm mb-3">
        Listings that are promoted average over 200% more views and 150% more
        applications.
      </p>
    </div>
    <a
      class="
        transform
        transition
        w-24
        h-16
        md:h-16
        md:w-16
        duration-300
        hover:scale-105
      "
      href="#"
    >
      <img class="w-full h-full" alt="Next" src="../assets/next.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Promotecard",
};
</script>