### Golang ile HTTP server
başlamadan önce gin paketini indirmeniz gerekiyor 
```
$ go get -u github.com/gin-gonic/gin
```

bundan sonra **Main.go** dosyamız
```go
package main

import (
  "net/http"
  "github.com/gin-gonic/gin"
)

func main() {
  r := gin.Default()
  r.LoadHTMLFiles("index.html");
  r.GET("/", func(c *gin.Context) {
   c.HTML(http.StatusOK, "index.html",gin.H{
			"content": "İçerik",
		});
  })
  r.Run()
}
```

### HTML dosyamız
```html
<h3>Merhaba Gin</h3>
{{ .content }}
```
