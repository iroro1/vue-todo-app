<template>
  <div id="app" class=" mx-auto">
    <div class="bg-slate-900 flex justify-center p-4 h-[60px] fixed w-full ">
      <nav class="flex  text-white  w-full justify-between max-w-6xl">
        <h1 class="font-bold text-2xl">VueJs Todo App</h1>
        <div>
  
          <router-link exact-active-class="text-blue-500" to="/" class="mr-4">Task List</router-link>
          <router-link active-class="text-blue-500" to="/add-task" class="mr-4">Add Task</router-link>
          <router-link active-class="text-blue-500" to="/api" class="mr-4">Api Call</router-link>
        </div>
      </nav>
    </div>
    <!-- the methods used in the router view will be passed to the child component. the child components can then emit events -->
   <div class="pt-16">

     <router-view 
       :tasks="tasks" 
       @add-task="addTask" 
       @toggle-complete="toggleComplete" 
       @delete-task="deleteTask" 
     />
   </div>
  </div>
</template>

<script>
import { loadState, saveState } from './utils/localStorage';

export default {
  data() {
    return {
      tasks: loadState() 
    };
  },
  methods: {
    addTask(taskText) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
      };
      this.tasks.push(newTask);
      saveState(this.tasks); 
    },
    toggleComplete(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        saveState(this.tasks); 
      }
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(t => t.id !== taskId);
      saveState(this.tasks); 
    }
  }
};
</script>

<style scoped>
@import './assets/tailwind.css';
nav {
  margin-bottom: 20px;
}
</style>
