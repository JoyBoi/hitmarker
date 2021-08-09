<template>
  <div class="bg-herobg pb-12">
    <div class="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
      <div>
        <img alt="Hitmarker" src="../assets/hitmarker.png" />
      </div>
      <div class="text-textlight flex space-x-6 font-light text-sm">
        <a href="#">Find a job</a>
        <a href="#">Post a job</a>
        <a href="">Create advice</a>
      </div>
      <div class="text-textlight flex space-x-4 font-light text-sm">
        <a href="#" class="px-4 p-2">Login</a>
        <a href="#" class="bg-primary font-bold rounded px-4 p-2"
          >Create account</a
        >
      </div>
    </div>
    <div class="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
      <div>
        <h1 class="text-5xl font-bold mb-4 text-textlight">
          The home of gaming and esports jobs
        </h1>

        <p class="text-textlight text-sm mb-8">
          With over 8,000 active listings from more than 50 countries, Hitmarker
          is the largest gaming and esports jobs platform in the world. Find
          your dream career. Hire top talent. Make your mark.
        </p>
        <div class="text-textlight text-sm mb-8 flex space-x-4 items-center">
          <a href="#" class="bg-primary rounded px-4 py-3 font-bold"
            >View jobs</a
          >
          <a href="#" class="px-4 py-2 flex space-x-5 items-center">
            <img alt="play" src="../assets/playicon.png" class="px-2" />
            Watch our video</a
          >
        </div>
      </div>
      <div>
        <img alt="Hero Image" src="../assets/heroimg.png" />
      </div>
    </div>
    <company />
  </div>
</template>

<script>
import Company from "./Company.vue";
export default {
  name: "Header",
  components: {
    Company,
  },
};
</script>
