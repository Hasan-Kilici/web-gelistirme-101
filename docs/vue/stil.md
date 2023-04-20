### Stil
```vue
<script setup>
  import { ref } from "vue";
  
  const buttonFontSize = ref("10rem");
</script>

<template>
    <h1 class="title">I am red</h1>
    <button style="font-size: 10rem;">I am a button</button>
    <!-- sonradan style bindlemek isterseniz -->
    <button :style="{ fontSize: buttonFontSize }">I am a button</button>
</template>

<style>
  .title {
    color: red;
  }
</style>

```
