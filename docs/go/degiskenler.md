# Değişkenleri Oluşturma
Go'da bir değişken bildirmenin iki yolu vardır:
1. var anahtar sözcüğü ile
var anahtar sözcüğünü, ardından değişken adını ve türünü kullanabilirsiniz
<h3>Örnek</h3>
var isim = "Hasan"
Ya da
var isim string = "Hasan"<br>
2.:= işaretiyle<br>
:= işaretini ve ardından değişken değerini kullanabilirsiniz
<h3>Örnek</h3>
isim := "Hasan"

```go
package main

import (
	"fmt"
)

func main() {
var a = "String (metin)"
    fmt.Println(a)

    var b, c int = 1, 2
    fmt.Println(b, c)

    var d = true
    fmt.Println(d)

    var e int
    fmt.Println(e)

    f := "elma"
    fmt.Println(f)
}
```
