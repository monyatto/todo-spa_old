
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
      const title = memoText.split(/\n/)[0]
      const memo = { id: uid , text: memoText, title: title, canEdit: false };
      this.memos.push(memo);
      this.saveMemos()
    },
    editMemo(memoId, newText) {
      const foundMemo = this.findMemo(memoId);
      foundMemo.text = newText
      foundMemo.title = newText.split(/\n/)[0]
    },
    findMemo(memoId) {
      return this.memos.find((memo) => memo.id === memoId)
    },
    saveMemos() {
      localStorage.setItem('memos', JSON.stringify(this.memos));
    },
    deleteMemo(memoId) {
      const index = (this.memos.indexOf(this.memos.find((memo) => memo.id === memoId)))
      this.memos.splice(index, 1)
    },
  },
});
