export const app = {
  title: "Notes",
  courseUrl: "https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/",
  menu: [
    {
      alias: "home",
      url: "/",
      title: "Home",
    },
    {
      alias: "about",
      url: "/about",
      title: "About",
    },
  ],
  defaultNotes: [
    { id: 1, title: "Task 1", tags: ["home", "travel", "work"] },
    { id: 2, title: "Task 2", tags: ["travel"] },
    { id: 3, title: "Task 3", tags: [] },
  ],
};
