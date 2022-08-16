<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <RouterLink to="/" class="navbar-logo">{{ title }}</RouterLink>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="item in menu" :key="item.alias">
              <RouterLink :to="item.url" class="navbar-link">{{
                item.title
              }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { app } from "@/_config.js";

export default {
  data() {
    return {
      title: app.title,
      menu: app.menu,
    };
  },
};
</script>
