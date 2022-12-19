<script setup>
import { onMounted, ref, reactive } from 'vue';

import { storeToRefs } from 'pinia';
import { useMemosStore } from '../stores/memos';

const { getMemos } = useMemosStore();
const { addMemo } = useMemosStore();
const { deleteMemo } = useMemosStore();
const { getMemoById } = useMemosStore();

const memos = useMemosStore();
const memo = getMemoById("898ab340-13b1-484a-a090-76893587fcf8")

const memoText = ref('')
const props = defineProps({
  isNew: Boolean,
})

onMounted(() => {
  getMemos();
});

const patch = () => {
  memos.$patch({
    memo:{
      text: '',
    }
  })
}

</script>

<template>

  <div v-if="props.isNew">
    <p>newやで</p>
    <textarea v-model="memoText" placeholder="メモを入力してください"></textarea>
    <button @click="addMemo(memoText)">保存</button>
    <button @click="deleteMemo($route.params.memoId)">削除</button>
  </div>
  <div v-else>
    <p>newちゃうで</p>
    <textarea v-model="memotext"></textarea>
    <button @click="patch">変更</button>
    <button @click="getMemoById($route.params.memoId)">削除</button>
  </div>


</template>
