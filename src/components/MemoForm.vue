<script setup>
import { onMounted, ref, defineComponent } from 'vue';

import { storeToRefs } from 'pinia';
import { useMemosStore } from '../stores/memos';

const { addMemo } = useMemosStore();
const { deleteMemo } = useMemosStore();
const { getMemoById } = useMemosStore();
const { editMemo } = useMemosStore();

const memos = useMemosStore();
const memoText = ref('');
const newText = ref('');

const props = defineProps({
  isNew: Boolean,
});

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
