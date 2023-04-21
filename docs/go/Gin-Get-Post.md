### Golang de Form
```go
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.LoadHTMLFiles("index.html")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "anasayfa",
		})
	})

	r.POST("/giris", func(c *gin.Context) {
		isim := c.PostForm("isim")
		soyisim := c.PostForm("soyisim")
		c.String(http.StatusOK, "%s %s", isim, soyisim)
	})
	r.Run()
}
```
**index.html dosyası**
```html
<form method="POST" action="/giris">
  <input type="text" id="isim" name="isim">
  <input type="text" id="soyisim" name="soyisim">
  <input type="submit">
</form>
```
