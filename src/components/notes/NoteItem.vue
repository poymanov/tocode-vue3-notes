<template>
  <div class="note">
    <div class="note-header">
      <p>{{ note.title }}</p>
      <p class="note-delete" @click="$emit('onDelete', note.id)">x</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>
