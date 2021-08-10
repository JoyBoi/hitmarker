<template>
  <div
    class="max-w-6xl mx-auto flex justify-center items-start px-4 py-4 mt-15"
  >
    <img class="mr-10" alt="WhatPeopleThink" src="../assets/wptimg.png" />
    <div class="mt-44">
      <div class="flex justify-between pb-10">
        <h1 class="text-4xl mr-20 font-bold text-textdark">What people say</h1>
        <div class="flex justify-between">
          <a
            href="#"
            class="
              rounded-full
              h-14
              w-14
              bg-bggradientstart
              mx-3
              transform
              transition
              duration-300
              hover:scale-105
            "
          >
            <img class="px-2 py-2" alt="left" src="../assets/Left.png" />
          </a>
          <a
            href="#"
            class="
              rounded-full
              h-14
              w-14
              bg-primary
              transform
              transition
              duration-300
              hover:scale-105
            "
          >
            <img class="px-2 py-2" alt="right" src="../assets/Right.png" />
          </a>
        </div>
      </div>
      <div class="relative">
        <div class="absolute -left-20 -bottom-30 bg-textlight">
          <div
            class="
              z-10
              max-w-xl
              shadow-md
              h-64
              flex flex-col
              justify-around
              px-6
              py-3
              border-l-8 border-primary
            "
          >
            <div class="flex justify-between">
              <div>
                <h1 class="text-2xl font-bold text-textdark">
                  Darrell Steward
                </h1>
                <p class="text-xl text-textdark">CEO, ESport.</p>
              </div>
              <div>
                <img class="px-2 py-2" alt="left" src="../assets/rating.png" />
              </div>
            </div>
            <div>
              <p class="text-textdark text-sm font-light">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Contrary to popular
                belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC, making it over
                2000 years old.
              </p>
            </div>
          </div>
        </div>
        <div class="-z-10 absolute -left-40 -bottom-80">
          <img class="" alt="dots" src="../assets/Dots.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Whatpeoplethink",
};
</script>