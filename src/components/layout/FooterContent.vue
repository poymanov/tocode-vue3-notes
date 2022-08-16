<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="item in menu" :key="item.alias">
          <RouterLink :to="item.url" class="navbar-link">{{
            item.title
          }}</RouterLink>
        </li>
      </ul>
      <ul class="navbar-list navbar-list-info">
        <li class="navbar-item">
          <a :href="courseUrl" class="navbar-link" target="_blank"
            >Сделано на курсе "Vue.js 3 С нуля до результата"</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { app } from "@/_config.js";

export default {
  data() {
    return {
      courseUrl: app.courseUrl,
      menu: app.menu,
    };
  },
};
</script>
