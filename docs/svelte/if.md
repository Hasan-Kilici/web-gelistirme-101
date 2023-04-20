### If
```svelte
<script>
  const renk = "red";
</script>

<div>
  {#if renk === 'red'}
    <h1>I am red</h1>
  {:else if renk === 'green'}
    <h1>I am green</h1>
  {:else}
    <h1>Beni koymamislar abi :(</h1>
  {/if}
</div>
```
