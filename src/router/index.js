import Vue from "vue";
import VueRouter from "vue-router";
import TaskList from "../components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";
import ApiCall from "../components/ApiCall.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: TaskList },
  { path: "/add-task", component: TaskForm },
  { path: "/api", component: ApiCall },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
