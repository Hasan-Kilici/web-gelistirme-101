### If
```vue
<script setup>
  import { ref } from "vue";

  const renk = ref("red");
</script>

<template>
    <div>
        <h1 v-if="renk === 'red'">I am red</h1>
        <h1 v-else-if="renk === 'green'">I am green</h1>
        <h1 v-else>Beni koymamislar abi :(</h1>
    </div>
</template>
```
