// import Vue from "vue";
// import VueRouter from "vue-router";
import TaskList from "../components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";
import ApiCall from "../components/ApiCall.vue";
import { createRouter, createWebHistory } from "vue-router";
// Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: TaskList },
  { path: "/add-task", name: "AddTask", component: TaskForm },
  { path: "/api", name: "ApiCall", component: ApiCall },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
