<template>
    <div class="p-4 flex flex-col justify-center items-center">
      <h1 class="text-2xl font-bold mb-4">Add Task</h1>
      <form @submit.prevent="handleSubmit" class="mb-4 w-full max-w-md flex items-center">
        <input
          v-model="taskText"
          type="text"
          placeholder="Enter a task"
          class="border p-2 mr-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" class="bg-blue-500 text-white p-2 rounded text-sm w-[100px]">Add Task</button>
      </form>

    </div>
  </template>
  
  <script>import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        taskText: ''
      };
    },
    methods: {
      ...mapActions(['addTask']),
      handleSubmit() {
        const newTask = {
          id: Date.now(),
          text: this.taskText,
          completed: false,
        };
        this.addTask(newTask);
        this.taskText = '';
        this.$router.push('/'); // Navigate back to task list
      }
    }
  };
  
  </script>
  