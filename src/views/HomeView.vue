<template>
  <div class="view-sm isCenter">
    <NoteForm @onSubmit="addNote" />
    <NoteList :items="notes" @onDeleteNote="deleteNote" />
  </div>
</template>

<script>
import NoteList from "@/components/notes/NoteList.vue";
import NoteForm from "@/components/notes/NoteForm.vue";

export default {
  components: { NoteList, NoteForm },
  data() {
    return {
      notes: [
        { id: 1, title: "Task 1", tags: ["home", "travel", "work"] },
        { id: 2, title: "Task 2", tags: ["travel"] },
        { id: 3, title: "Task 3", tags: [] },
      ],
    };
  },
  methods: {
    addNote(text) {
      const newNote = {
        id: this.notes.length + 1,
        title: text,
        tags: [],
      };
      this.notes.push(newNote);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
};
</script>
