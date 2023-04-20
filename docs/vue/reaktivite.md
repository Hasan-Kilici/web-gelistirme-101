### Declare state
```vue
<script setup>
  import { ref } from "vue";

  let name = ref("John");
</script>

<template>
    <h1>Hello {{ name }}</h1>
</template>
```
### Update state
```vue
<script setup>
  import { ref } from "vue";

  let name = ref("John");
  name.value = "Jane";
</script>

<template>
    <h1>Hello {{ name }}</h1>
</template>
```
### Computed state
```vue
<script setup>
  import { computed } from "vue";

  let count = ref(10);
  let doubleCount = computed(() => count.value * 2);
</script>

<template>
    <div>Hello {{ name }}</div>
</template>
```
