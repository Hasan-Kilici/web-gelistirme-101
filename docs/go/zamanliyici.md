### Golang de Time Sleep
```go
package main
import(
  "fmt"
  "time"
)
func main(){
    newInts := intSeq()
    fmt.Println(newInts())
    timer1 := time.NewTimer(2 * time.Second)

    <-timer1.C
    fmt.Println("Zamanlayıcı 1 başlatıldı")

    timer2 := time.NewTimer(time.Second)
    go func() {
        <-timer2.C
        fmt.Println("Zamanlayıcı 2 başlatıldı")
    }()
    stop2 := timer2.Stop()
    if stop2 {
        fmt.Println("Zamanlayıcı 2 durduruldu")
    }

    time.Sleep(2 * time.Second)
}
```
