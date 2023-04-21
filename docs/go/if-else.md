### Golang de if else
```go
package main

import (
"fmt"
)

func main() {
var a int = 90
var b int = 80
  if a < b {
    fmt.Print(b,a,"'dan büyük")
  } else {
    fmt.Print(b,a,"'den düşük")
  }
}
```

### Geçti kaldı örneği
```go
package main

import (
"fmt"
)

func main() {
var not int = 51
  if not < 50 {
    fmt.Print("Kaldı")
  } else {
    fmt.Print("Geçti")
  }
}
```
