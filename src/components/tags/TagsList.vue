<template>
  <div class="tags-list">
    <div
      class="tag-item"
      :class="{ isPreview: isPreview, isActive: isItemSelected(item) }"
      v-for="item in items"
      :key="item"
      @click="selectItem(item)"
    >
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
    selectedItems: {
      type: Array,
      required: false,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectItem(item) {
      if (this.isPreview) {
        return false;
      }

      this.$emit("onSelectItem", item);
    },
    isItemSelected(item) {
      if (!this.selectedItems || this.selectedItems.length === 0) {
        return false;
      }

      return this.selectedItems.includes(item);
    },
  },
};
</script>
