
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { RouterLink, RouterView } from 'vue-router'

export const useMemosStore = defineStore('memos', {
  state: () => ({
    memos: useLocalStorage('memos',[])
  }),
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
  },
  actions: {
    getMemos() {
      return this.memos
    },
    getMemoById(id){
      const memo = this.memos.find((memo) => memo.id === id)
      return memo
    },
    addMemo(memoText) {
      const uid = self.crypto.randomUUID();
      const memo = { id: uid , text: memoText, canEdit: false };
      this.memos.push(memo);
      this.saveMemos()
    },
    editMemo(memoId, newText) {
      const foundMemo = this.findMemo(memoId);
      foundMemo.text = newText
    },
    findMemo(memoId) {
      return this.memos.find((memo) => memo.id === memoId)
    },
    saveMemos() {
      localStorage.setItem('memos', JSON.stringify(this.memos));
    },
    deleteMemo(memoId) {
      this.memos = this.memos.filter(memo => memo.id !== memoId)
      // this.$router.push('/memos')
    },
  },
});
