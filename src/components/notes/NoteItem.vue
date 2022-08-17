<template>
  <div class="note">
    <div class="note-header">
      <p>{{ note.title }}</p>
      <p class="note-delete" @click="$emit('onDelete', note.id)">x</p>
    </div>
    <div class="note-footer">
      <TagsList :items="note.tags" />
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
};
</script>
