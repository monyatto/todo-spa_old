<script setup>
import { onMounted, ref, defineComponent } from 'vue';
import { computed } from 'vue'

import { storeToRefs } from 'pinia';
import { useMemosStore } from '../stores/memos';
import { useRoute } from 'vue-router';

const { addMemo } = useMemosStore();
const { deleteMemo } = useMemosStore();
const { getMemoById } = useMemosStore();
const { editMemo } = useMemosStore();
const { findMemo } = useMemosStore();


const memos = useMemosStore();
const memoText = ref('');


const route = useRoute();

const props = defineProps({
  isNew: Boolean,
});


const newText = computed(() => findMemo(route.params.memoId).text)

// const newText = ref('')

// const newText = ref(computed(() => findMemo(route.params.memoId).text))


</script>

<template>
  <div v-if="props.isNew">
    <p>newやで</p>
    <textarea v-model="memoText" placeholder="メモを入力してください"></textarea>
    <button @click="addMemo(memoText)">保存</button>
  </div>
  <div v-else>
    <p>newちゃうで</p>
    <textarea v-model="newText"></textarea>
    <button @click="editMemo($route.params.memoId, newText)">変更</button>
    <button @click="deleteMemo($route.params.memoId)">削除</button>
  </div>
</template>
