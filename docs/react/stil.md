Main.jsx
```js
import "./style.css";

export default function CssStyle() {
  return (
    <>
      <h1 className="title">I am red</h1>
      <button style={{ fontSize: "10rem" }}>I am a button</button>
    </>
  );
}

```

style.css
```css
.title {
  color: red;
}

```
