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
        { id: 1, title: "Task 1" },
        { id: 2, title: "Task 2" },
        { id: 3, title: "Task 3" },
      ],
    };
  },
  methods: {
    addNote(text) {
      const newNote = {
        id: this.notes.length + 1,
        title: text,
      };
      this.notes.push(newNote);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
};
</script>
