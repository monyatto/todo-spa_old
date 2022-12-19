<script setup>
  // import {formState} from ''
  import {reactive} from 'vue';
  // const formState = reactive({
  //   memoDetail:"aaa"
  // })

  //
  //
  //
  // const memoPinia = useMemoStore()
  // const formState = reactive({
  //   memoDetail = {
  //     id: ref(""),
  //     text: ref(""),
  //     canEdit: ref(false)
  //     };
  // })
  // const localmemos = reactive({
  //   allMemos: []
  // })
  //
  // const submitForm = () => {
  //   memoPinia.memoDetail = formState.memoDetail
  //   memoPinia.allMemos = localmemos.allMemos
  //   saveMemo()
  // }
  //
  // const saveMemo = () => {
  //   localStorage.setItem('Memos', JSON.stringify({text: memoPinia.memoDetail}));
  // }

</script>

<template>

  {{memoPinia.memoDetail}}
  {{memoPinia.memoDetail}}
<div>
  <input v-model="formState.memoDetail" type="text" id="memoDetail" name="memoDetail">
</div>
<div class="center">
    <button @click.prevent="submitForm">保存</button>
</div>
</template>
