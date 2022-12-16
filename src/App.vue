<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MemoList from './components/MemoList.vue';
import MemoForm from './components/MemoForm.vue';
import NewPost from './components/NewPost.vue';
</script>

<template>
  <div id="app">
    <h1>Memo</h1>
    <hr />
    <MemoList />
    <RouterView />
    <hr />
    <NewPost />
  </div>
</template>
