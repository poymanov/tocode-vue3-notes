<template>
  <div class="notes">
    <NoteItem :note="note" v-for="note in notes" :key="note.id" />
  </div>
</template>

<script>
import NoteItem from "@/components/notes/NoteItem.vue";

export default {
  components: { NoteItem },
  data() {
    return {
      notes: [
        { id: 1, title: "Task 1" },
        { id: 2, title: "Task 2" },
        { id: 3, title: "Task 3" },
      ],
    };
  },
};
</script>
