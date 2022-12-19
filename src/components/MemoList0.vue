<script setup>

import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useMemosStore } from '../stores/memos';

import { RouterLink } from 'vue-router'



const { getMemos } = useMemosStore();
const { getCount } = useMemosStore();
const { getAll } = useMemosStore();



onMounted(() => {
  getMemos();
});
</script>

<template>
  <h2>メモ一覧</h2>
  <ul v-if="getCount">
    <li v-for="memo in getAll" v-bind:key="memo.id">
      <router-link :to="`/memos/${memo.id}`">{{ memo.text }}</router-link>
    </li>
  </ul>
  <p v-else>メモはありません</p>
  <RouterLink to="/memos/new">＋</RouterLink>
</template>
