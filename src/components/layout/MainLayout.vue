<template>
  <div class="wrapper">
    <HeaderContent />
    <div class="wrapper-content">
      <div class="section">
        <div class="container">
          <slot></slot>
        </div>
      </div>
    </div>
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from "@/components/layout/HeaderContent.vue";
import FooterContent from "@/components/layout/FooterContent.vue";

export default {
  components: { HeaderContent, FooterContent },
};
</script>
