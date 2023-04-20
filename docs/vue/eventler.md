### Objeye tıklanınca devreye girme

```vue
<script setup>
  import { ref } from "vue";

  let count = ref(0);

  function incrementCount() {
    count.value++;
  }
</script>

<template>
  <p>Counter: {{ count }}</p>
  <button @click="incrementCount">+1</button>
</template>
```