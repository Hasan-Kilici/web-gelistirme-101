### Declare state
```js
import { useState } from "react";

export default function Name() {
  const [name] = useState("John");

  return <h1>Hello {name}</h1>;
}
```
### Update state
```js
import { useState } from "react";

export default function Name() {
  const [name, setName] = useState("John");
  setName("Jane");

  return <h1>Hello {name}</h1>;
}
```
### Computed state
```js
import { useState } from "react";

export default function DoubleCount() {
  const [count] = useState(10);
  const doubleCount = count * 2;

  return <div>{doubleCount}</div>;
}

```

