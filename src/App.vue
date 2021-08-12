<template>
  <div
    id="app"
    class="
      flex flex-col
      h-screen
      justify-between
      bg-gradient-to-br
      from-bggradientstart
      to-white
    "
  >
    <Header />
    <Contentheader />
    <div
      class="
        gap-1
        max-w-6xl
        mx-auto
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-3
        md:gap-5
      "
    >
      <card
        v-for="(car, index) in carddata"
        :key="index"
        :title="car.title"
        :company="car.company"
        :country="car.country"
        :companyimg="car.companyimg"
        :countryimg="car.countryimg"
      />
    </div>
    <promotecard />
    <whatpeoplethink />
    <contacts />
    <hr class="border-1 max-w-sm md:max-w-6xl md:ml-24 border-gray-300" />
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
import Contacts from "./components/Contacts.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Contentheader,
    Card,
    Promotecard,
    Whatpeoplethink,
    Contacts,
  },
  data() {
    return {
      carddata: [
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
          companyimg: "dp1.png",
          countryimg: "Germany.png",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
          companyimg: "dp2.png",
          countryimg: "Canada.png",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
          companyimg: "dp3.png",
          countryimg: "Nigeria.png",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
          companyimg: "dp2.png",
          countryimg: "Canada.png",
        },
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
          companyimg: "dp1.png",
          countryimg: "Germany.png",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
          companyimg: "dp3.png",
          countryimg: "Nigeria.png",
        },
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
          companyimg: "dp1.png",
          countryimg: "Germany.png",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
          companyimg: "dp3.png",
          countryimg: "Nigeria.png",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
          companyimg: "dp2.png",
          countryimg: "Canada.png",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
          companyimg: "dp2.png",
          countryimg: "Canada.png",
        },
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
          companyimg: "dp1.png",
          countryimg: "Germany.png",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
          companyimg: "dp3.png",
          countryimg: "Nigeria.png",
        },
        {
          title: "Social Video Creator",
          company: "Pipeline.com",
          country: "Germany",
          companyimg: "dp1.png",
          countryimg: "Germany.png",
        },
        {
          title: "Graphic Designer",
          company: "Pipeline.com",
          country: "Irland",
          companyimg: "dp3.png",
          countryimg: "Nigeria.png",
        },
        {
          title: "Esports Competition Coordinator",
          company: "Thescore",
          country: "Canada",
          companyimg: "dp2.png",
          countryimg: "Canada.png",
        },
      ],
    };
  },
};
</script>
