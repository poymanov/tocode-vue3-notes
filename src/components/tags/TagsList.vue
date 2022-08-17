<template>
  <div class="tags-list">
    <div class="tag-item isPreview" v-for="item in items" :key="item">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
