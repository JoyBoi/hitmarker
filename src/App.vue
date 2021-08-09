<template>
  <div id="app" class="flex flex-col h-screen justify-between">
    <Header />
    <Contentheader />
    <div
      class="
        max-w-6xl
        mx-auto
        p-10
        grid grid-cols-1
        sm:grid-cols-1
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-3
        gap-5
      "
    >
      <card
        v-for="(car, index) in carddata"
        :key="index"
        :title="car.title"
        :company="car.company"
        :country="car.country"
      />
    </div>
    <promotecard />
    <whatpeoplethink />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Contentheader from "./components/Contentheader.vue";
import Card from "./components/Card.vue";
import Promotecard from "./components/Promotecard.vue";
import Whatpeoplethink from "./components/Whatpeoplethink.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Contentheader,
    Card,
    Promotecard,
    Whatpeoplethink,
  },
  data() {
    return {
      carddata: [
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
        },
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
        },
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
        },
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
        },
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
        },
      ],
    };
  },
};
</script>
