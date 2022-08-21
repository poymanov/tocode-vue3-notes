<template>
  <div class="view-sm isCenter">
    <NoteForm />
    <NoteList />
  </div>
</template>

<script>
import NoteList from "@/components/notes/NoteList.vue";
import NoteForm from "@/components/notes/NoteForm.vue";

export default {
  components: { NoteList, NoteForm },
};
</script>
