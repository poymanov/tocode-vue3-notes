<template>
  <form class="note-form" @submit.prevent="submit">
    <textarea required v-model="text" placeholder="Enter your note"></textarea>
    <TagsList
      :items="tags"
      :selectedItems="selectedTags"
      @onSelectItem="addTag"
    />
    <button class="btn btnPrimary" type="submit">New note</button>
  </form>
</template>

<script>
import TagsList from "@/components/tags/TagsList.vue";

export default {
  components: { TagsList },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      text: null,
      selectedTags: [],
    };
  },
  methods: {
    submit() {
      const newNote = {
        text: this.text,
        tags: this.selectedTags,
      };

      this.$emit("onSubmit", newNote);
      this.reset();
    },
    reset() {
      this.text = null;
      this.selectedTags = [];
    },
    addTag(tag) {
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
