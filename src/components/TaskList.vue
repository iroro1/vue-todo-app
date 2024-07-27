<template>
    <div class="p-4 flex flex-col justify-center items-center">
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
    }
  }
};
  </script>
  