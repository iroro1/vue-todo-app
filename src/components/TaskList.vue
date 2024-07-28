<template>
    <div class="p-4 flex flex-col justify-center items-center">
     <h1 class="text-2xl font-bold mb-4">Task List</h1>
      <p class="text-gray-500">There are {{ tasks.length }} tasks.</p>
      <div v-if="!tasks" class="my-4 text-center space-y-2">
        <p>To add a task, click the "Add Task" button</p>
        <button  class="bg-blue-500 text-white mt-1 cursor-pointer p-2 rounded text-sm" @click="handleAddTask" >Add Task</button>
      </div>
      <ul>
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @toggle-complete="handleToggleComplete"
          @delete-task="handleDeleteTask"
        />
      </ul>
    </div>
  </template>
  
  <script>
import TaskItem from './TaskItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    TaskItem
  },
  computed: {
    ...mapGetters(['tasks']),
  },
  methods: {
    ...mapActions(['deleteTask', 'toggleComplete']),
    handleToggleComplete(taskId) {
      this.toggleComplete(taskId);
    },
    handleDeleteTask(taskId) {
      this.deleteTask(taskId);
    },
    handleAddTask() {
      this.$router.push('/add-task');
    } 
  },
  watch: {
    tasks: {
      immdiate: true,
      deep: true,
      handler() {
        console.log(this.tasks.length, "tasks length");
      }
    }
  }
};
  </script>
  