import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleComplete(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit("addTask", task);
    },
    deleteTask({ commit }, taskId) {
      commit("deleteTask", taskId);
    },
    toggleComplete({ commit }, taskId) {
      commit("toggleComplete", taskId);
    },
  },
  getters: {
    tasks: (state) => state.tasks,
  },
});
