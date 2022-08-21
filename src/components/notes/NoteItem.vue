<template>
  <div class="note">
    <div class="note-header">
      <p>{{ note.title }}</p>
      <p class="note-delete" @click="deleteNote(note.id)">x</p>
    </div>
    <div class="note-footer">
      <TagsList :items="note.tags" :isPreview="true" />
    </div>
  </div>
</template>

<script>
import TagsList from "@/components/tags/TagsList.vue";

export default {
  components: { TagsList },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteNote(id) {
      this.$store.dispatch("deleteNote", id);
    },
  },
};
</script>
