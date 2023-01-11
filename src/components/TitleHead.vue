<template>
  <div class="pt-10" :class="{ 'px-5': !mdAndUp, 'px-12': mdAndUp }">
    <h1
      :class="{
        'text-h4': !mdAndUp,
        'text-h2': mdAndUp,
      }"
      class="font-weight-black my-10 pb-0 mb-2 text-primary"
    >
      Hi! <br />
      I'm Mik, <br />
      I make web apps
    </h1>
    <decor-circles
      :circles="[20, 20, 20, 20, 20]"
      :horizontal="true"
      start
      class="mb-4"
    />
    <p
      :class="{ 'text-center': !mdAndUp }"
      class="text-subtitle-1 text-justify mb-10 text-primary"
      style="line-height: 110%"
    >
      Full stack developer with professional experience designing, building and
      maintaining scalable web applications and services.
    </p>
    <!-- <decor-circles :circles="[20, 20, 20, 20, 20]" :horizontal="false" center /> -->
  </div>
</template>

<script>
import { useDisplay } from "vuetify";
import DecorCircles from "@/components/DecorCircles.vue";

export default {
  components: {
    DecorCircles,
  },
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return {
      xs,
      mdAndUp,
    };
  },
};
</script>
<style>
.experience-badges {
  width: 50px;
}
</style>
