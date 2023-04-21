### Boolean
```go
package main
import ("fmt")

func main() {
  var b1 bool = true 
  var b2 = true 
  var b3 bool 
  b4 := true 

  fmt.Println(b1) // true ya döner
  fmt.Println(b2) // true ya döner
  fmt.Println(b3) // false a döner
  fmt.Println(b4) // true ya döner
}
```
### Float
```go
package main
import(
  "fmt"
)

func main(){
  var x float32 = 123.78
  var y float32 = 3.4e+38
  fmt.Printf("Veri tipi: %T, değeri: %v\n", x, x)
  fmt.Printf("Veri tipi: %T, değeri: %v", y, y)
}
```
### Integer
```go
package main

import ("fmt")

func main() {
var x int = 500
var y int = -4500
  fmt.Printf("Veri tipi: %T, değeri: %v", x, x)
  fmt.Printf("Veri Tipi: %T, değeri: %v", y, y)
}
```
### String
```go
package main
import (
"fmt"
)

func main() {
var yazi1 string = "Merhaba Dünya"
var yazi2 = "Merhaba Dünya"
yazi3 := "Merhaba Dünya"
  
fmt.Printf("Veri tipi: %T, değeri: %v\n", yazi1)
fmt.Printf("Veri tipi: %T, değeri: %v\n", yazi2)
fmt.Printf("Veri tipi: %T, değeri: %v\n", yazi3)
}
```
