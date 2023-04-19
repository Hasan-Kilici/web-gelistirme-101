### Declare state
```svelte
<script>
  let name = "John";
</script>

<h1>Hello {name}</h1>
```
### Update state
```svelte
<script>
  let name = "John";
  name = "Jane";
</script>

<h1>Hello {name}</h1>
```
### Computed state
```svelte
<script>
  let count = 10;
  $: doubleCount = count * 2;
</script>

<div>{doubleCount}</div>
```
