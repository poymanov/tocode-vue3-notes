<template>
  <div class="view-sm isCenter">
    <div class="md-body">
      <h1>В этом приложении разработано:</h1>
      <ul>
        <li>Vue 3 + Vite</li>
        <li>Полная настройка VUEX</li>
        <li>Хранение заметок в localStorage</li>
        <li>Передача данных между компонентами</li>
        <li>Разделение логики по компонентам</li>
        <li>Фильтрация Элементов</li>
        <li>Создание глобальных конфигов</li>
      </ul>
      <p>
        Сделано на курсе
        <a :href="courseUrl" target="_blank" class="link"
          >"Vue.js 3 С нуля до результата"</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { app } from "@/_config.js";

export default {
  data() {
    return {
      courseUrl: app.courseUrl,
    };
  },
};
</script>
