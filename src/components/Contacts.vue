<template>
  <div
    class="
      mt-36
      items-start
      flex-col
      md:flex-row
      md:mt-28
      max-w-6xl
      mx-auto
      flex
      justify-between
      md:items-center
      px-4
      py-4
      space-x-12
    "
  >
    <div class="w-52 ml-16 md:ml-0 flex flex-col justify-start h-48">
      <img
        class="py-3 h-14 w-10"
        alt="Hitmarker"
        src="../assets/hitmarker2.png"
      />
      <p class="text-textdark font-light text-xs mt-4 mb-8">
        Open an account in minutes, get full Control for much longer.
      </p>
    </div>
    <div class="flex justify-between items-center space-x-6 md:space-x-12">
      <footercompany />
      <footercontact />
      <more />
    </div>

    <discover />
  </div>
</template>

<script>
import Discover from "./Discover.vue";
import Footercompany from "./Footercompany.vue";
import Footercontact from "./Footercontact.vue";
import More from "./More.vue";
export default {
  components: { Footercompany, More, Footercontact, Discover },
};
</script>