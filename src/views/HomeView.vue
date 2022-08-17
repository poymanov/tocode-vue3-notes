<template>
  <div class="view-sm isCenter">
    <NoteForm :tags="tags" @onSubmit="addNote" />
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
      tags: ["home", "travel", "work"],
    };
  },
  created() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler: function (updatedNotes) {
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
      },
      deep: true,
    },
  },
  methods: {
    addNote(note) {
      const newNote = {
        id: this.notes.length + 1,
        title: note.text,
        tags: note.tags,
      };
      this.notes.push(newNote);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    getNotes() {
      const localNotes = localStorage.getItem("notes");

      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
  },
};
</script>
