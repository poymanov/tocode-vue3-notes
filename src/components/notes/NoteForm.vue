<template>
  <form class="note-form" @submit.prevent="handleSubmit">
    <textarea required v-model="text" placeholder="Enter your note"></textarea>
    <TagsList
      :items="tags"
      :selectedItems="selectedTags"
      @onSelectItem="handleAddTag"
    />
    <button class="btn btnPrimary" type="submit">New note</button>
  </form>
</template>

<script>
import TagsList from "@/components/tags/TagsList.vue";

export default {
  components: { TagsList },
  data() {
    return {
      text: null,
      selectedTags: [],
      tags: ["home", "travel", "work"],
    };
  },
  methods: {
    handleSubmit() {
      const newNote = {
        title: this.text,
        tags: this.selectedTags,
      };
      this.$store.dispatch("addNote", newNote);
      this.reset();
    },
    reset() {
      this.text = null;
      this.selectedTags = [];
    },
    handleAddTag(tag) {
      const tagIndex = this.selectedTags.indexOf(tag);

      if (tagIndex < 0) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags.splice(tagIndex, 1);
      }
    },
  },
};
</script>
