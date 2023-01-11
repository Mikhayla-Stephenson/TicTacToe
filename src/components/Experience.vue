<template>
  <div class="pt-10" :class="{ 'px-5': !mdAndUp, 'px-12': mdAndUp }">
    <h1 class="text-primary font-weight-black">My Languages</h1>
    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    />
    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    />
    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    />
    <h1 class="text-primary font-weight-black">What I know</h1>

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain.svg"
    />
    <h1 class="text-primary font-weight-black">What I love</h1>

    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-plain.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    />
    <h1 class="text-primary font-weight-black">What I'm learning</h1>
    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    />

    <img
      class="experience-badges"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg"
    />
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
