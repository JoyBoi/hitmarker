<template>
  <div
    class="
      mt-28
      max-w-6xl
      mx-auto
      flex
      justify-between
      items-center
      px-4
      py-4
      space-x-6
    "
  >
    <div class="w-52 flex flex-col justify-start h-48">
      <img
        class="py-3 h-14 w-10"
        alt="Hitmarker"
        src="../assets/hitmarker2.png"
      />
      <p class="text-textdark font-light text-xs mt-4 mb-8">
        Open an account in minutes, get full Control for much longer.
      </p>
    </div>
    <footercompany />
    <footercontact />
    <more />
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