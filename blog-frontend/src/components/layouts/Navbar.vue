<template>
  <nav
    id="navbar"
    class="px-4 py-4 sm:py-6 bg-white shadow sm:fixed w-full z-10 transition-colors duration-500"
    :class="{ 'sm:bg-transparent sm:shadow-none': !showWhiteBackground }"
  >
    <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between">
      <div class="w-full flex flex-row items-center justify-between">
        <div class="text-3xl font-bold">
          <span :class="{ 'sm:text-white': !showWhiteBackground }">Abir's</span>
          <span class="text-primary">Blog</span>
        </div>
        <div>
          <button v-show="!isVisible" class="sm:hidden" @click="toggle">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <button v-show="isVisible" class="sm:hidden" @click="toggle">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        class="mt-4 sm:mt-0 w-full sm:space-x-4 sm:text-right sm:block"
        :class="{ hidden: !isVisible, 'sm:text-white': !showWhiteBackground }"
      >
        <NavbarLinkVue to="/" label="Home" />
        <NavbarLinkVue to="/articles" label="Articles" />
        <NavbarLinkVue to="/about" label="About" />
        <NavbarLinkVue to="/contact" label="Contact" />
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLinkVue from "./NavbarLink.vue";
import { useToggle } from "@/composables/useToggle";
import { ref } from "vue";
export default {
  components: {
    NavbarLinkVue,
  },
  props: {},
  setup() {
    let { isVisible, toggle } = useToggle();
    let showWhiteBackground = ref(false);

    document.addEventListener("scroll", function () {
      let bodyTopPosition = document.body.getBoundingClientRect().top;

      if (bodyTopPosition < -150) {
        showWhiteBackground.value = true;
      } else {
        showWhiteBackground.value = false;
      }
    });

    return {
      isVisible,
      toggle,
      showWhiteBackground,
    };
  },
};
</script>
