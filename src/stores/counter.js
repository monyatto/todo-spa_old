import { defineStore } from 'pinia';

// このexportした関数（useStoreCounter）をコンポーネントでimportして利用。
// storeを識別するためのIDがcounter
export const useStoreCounter = defineStore('counter', {
  state: () => ({
    // stateに共有を行いたいcount変数を定義し初期値を設定
    count: 1,
    count2: 2,
    user: {
      name: "John Doe",
    },
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment(test) {
      this.count++;
    },
  },
});
