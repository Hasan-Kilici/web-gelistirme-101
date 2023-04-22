### For döngüsü
```go
package main
import ("fmt")

func main() {
  //Örnek 1
  for i:=0; i < 30; i++ {
    fmt.Println(i)
  }
  //Örnek 2
   for i:=0; i <= 100; i+=10 {
    fmt.Println(i)
  }
  //Örnek 3 (Döngü içerisinde Koşul belirleme)
 for i:=0; i < 5; i++ {
    if i == 3 {
      continue // 3'den Sonra devam eder
    }
   fmt.Println(i)
  }

for i:=0; i < 5; i++ {
    if i == 3 {
      break //3'den sonra devam etmeyi keser
    }
   fmt.Println(i)
  }
} 
```
