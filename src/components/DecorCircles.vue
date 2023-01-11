<template>
  <div
    :class="{
      'flex-column': !horizontal,
      'justify-start': start,
      'justify-center': center,
      'justify-end': end,
    }"
    class="d-flex"
  >
    <v-avatar
      v-for="(circle, index) in circles"
      :key="circle"
      color="secondary"
      :class="marginX + ' ' + marginY"
      :size="circle"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  circles: Array,
  horizontal: { type: Boolean, default: true },
  marginX: { type: String, default: "mx-1" },
  marginY: { type: String, default: "my-1" },
  center: Boolean,
  start: Boolean,
  end: Boolean,
});
</script>
