<template>
  <div>
    <label :for="name">{{ title }}</label>
    <input :type="type" ref="ref" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    inputRef: { type: Function, required: true },
  },
  setup(props) {
    return {
      ref: props.inputRef(),
    }
  },
});
</script>
