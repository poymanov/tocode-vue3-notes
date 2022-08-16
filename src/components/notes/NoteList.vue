<template>
  <div class="notes">
    <NoteItem
      :note="item"
      v-for="item in items"
      :key="item.id"
      @onDelete="onDeleteItem"
    />
  </div>
</template>

<script>
import NoteItem from "@/components/notes/NoteItem.vue";

export default {
  components: { NoteItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$emit("onDeleteNote", id);
    },
  },
};
</script>
