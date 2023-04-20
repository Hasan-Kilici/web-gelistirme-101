### Objeye tıklanınca devreye girme

```svelte
<script>
  let count = 0;

  function incrementCount() {
    count += 1;
  }
</script>

<p>Counter: {count}</p>
<button onClick={incrementCount}>+1</button>
```