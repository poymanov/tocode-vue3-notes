<template>
  <form class="note-form" @submit.prevent="submit">
    <textarea required v-model="text" placeholder="Enter your note"></textarea>
    <button class="btn btnPrimary" type="submit">New note</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: null,
    };
  },
  methods: {
    submit() {
      this.$emit("onSubmit", this.text);
      this.reset();
    },
    reset() {
      this.text = null;
    },
  },
};
</script>
