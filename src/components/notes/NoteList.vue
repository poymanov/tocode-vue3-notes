<template>
  <div class="notes">
    <NoteItem :note="item" v-for="item in items" :key="item.id" />
  </div>
</template>

<script>
import NoteItem from "@/components/notes/NoteItem.vue";

export default {
  components: { NoteItem },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.items = this.$store.getters.getNotes;
  },
};
</script>
