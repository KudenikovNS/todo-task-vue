import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import TaskList from "../components/TaskList.vue";
import TaskEdit from "../components/TaskEdit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "TaskList",
    component: TaskList,
  },
  {
    path: "/tasks/:taskId",
    name: "TaskEdit",
    component: TaskEdit,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
