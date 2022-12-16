<template>
  <form @submit="handleSubmit">
    <!-- inputRefがtrueのときtitleRefを有効にする -->
    <BaseInput title="Title" name="title" :inputRef="titleRef" type="text" />
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseInput from "./BaseInput.vue";

export default defineComponent({
  components: {
    BaseInput,
  },
  setup() {
    const titleRef = ref<HTMLInputElement>();

    const handleSubmit = (event: Event) => {
      event.preventDefault();
      if (titleRef.value) {
        console.log(titleRef.value.value);
      }
    };
    return {
        //ref<HTMLInputElement>();
        titleRef: () => titleRef,
        //送信した後の処理
        handleSubmit,
      };
  },
});
</script>
