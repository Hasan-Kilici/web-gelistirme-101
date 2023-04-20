### Döngü
```vue
<script setup>
  import { ref } from "vue";

  const colors = ref(["red", "green", "blue"]);
</script>

<template>
  <ul>
    <li v-for="color in colors">{{ color }}</li>
  </ul>
</template>
```
