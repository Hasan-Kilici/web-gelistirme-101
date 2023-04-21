### Golang de Dosya okuma
```go
package main

import (
	"fmt"
	"os"
)

func main() {
	read, err := os.ReadFile("test.txt")
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(string(read))
	}
}
```
### Dosya düzenleme
```go
package main

import (
	"fmt"
	"os"
)

func main() {
	f, err := os.Create("test.txt")
	if err != nil {
		fmt.Println(err)
	}

	f.Write([]byte("Merhaba Dünya\n"))
	f.Close()
}
```

### Dosya silme
```go
package main
   
import (
    "log"
    "os"
)
   
func main() {
     f := os.Remove("test.txt")
    if f != nil {
        log.Fatal(f)
    }
}
```
