<template>
    <div class="p-4 max-w-6xl mx-auto">
      <h1 class="text-xl font-bold mb-4">Posts</h1>
      <div v-if="loading" class="text-gray-500">Loading...</div>
      <div v-if="error" class="text-red-500">Error: {{ error }}</div>
      <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id" class="mb-4 border p-4 rounded">
          <h2 class="text-lg font-semibold">{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
        loading: false,
        error: null
      };
    },
    created() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        this.loading = true;
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          this.posts = response.data;
        } catch (err) {
          this.error = err.message || 'An error occurred';
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add some basic styling */
  </style>
  