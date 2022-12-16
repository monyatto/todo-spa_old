<script setup>
  import {reactive} from 'vue';
  import {useMemoStore} from '../stores/memo'

  const memoPinia = useMemoStore()
  
  const formState = reactive({
    memoDetail: ""
  })

  const submitForm = () => {
    memoPinia.memoDetail = formState.memoDetail
    saveMemo()
  }

  const allMemos = () => {
    if (localStorage.getItem('Memos')){
      try {
        memos = JSON.parse(localStorage.getItem('Memos'))
      } catch (e){
        localStorage.removeItem('Memos')
      }
    }
  }

  const saveMemo = () => {
  localStorage.setItem('Memos', JSON.stringify({text: memoPinia.memoDetail}));
}
</script>

<template>


  {{memoPinia.memoDetail}}
<div>
  <input v-model="formState.memoDetail" type="text" id="memoDetail" name="memoDetail">
</div>
<div class="center">
    <button @click.prevent="submitForm">保存</button>
</div>
</template>
