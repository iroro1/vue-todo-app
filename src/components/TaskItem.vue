<template>
  <li class="flex items-center justify-between mb-2  p-2 ">
    <div class="flex items-center ">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle-complete', task.id)"
      />
      <span :class="{ 'line-through': task.completed }" class="ml-2 text-lg mx-3 w-auto" >{{ task.text }}</span>
    </div>
    <button @click="$emit('delete-task', task.id)" class="bg-red-500 text-white p-2 rounded">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object
  }
};
</script>

<style>
.line-through {
  text-decoration: line-through;
}
</style>
