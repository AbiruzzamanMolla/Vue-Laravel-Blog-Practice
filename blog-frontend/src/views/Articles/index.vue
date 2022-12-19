<template>
  <InnerPageHero image-url="/images/image-3.jpg" title="Articles" />
  <div class="container px-4 py-8 mx-auto sm:py-12 sm:px-0">
    <Articles layout="grid" :show-view-all="false" />
    <div class="mt-8 sm:mt-12">
      <button class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none">
        View More
      </button>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero.vue";
import Articles from "../../components/Articles.vue";

export default {
  setup() {},
  components: { InnerPageHero, Articles },
};
</script>
