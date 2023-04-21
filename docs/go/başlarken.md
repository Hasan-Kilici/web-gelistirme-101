# Golange başlarken
Türkçe Go Lang örnekleri
İçeriklere geçmeden önce Go projesi nasıl oluşturulur ondan bahsedeyim
ilk olarak golangi indirmeniz gerekiyor <a href="https://go.dev/doc/install">bu linkten indirebilirsiniz</a>
indirdikten sonra terminali açıp gonun yüklenip yüklenmediğini test etmek için versiyon komutunu kullanın
<pre>
$ go version
</pre>
Şimdi bir go projesi oluşuralım
bir klasör açın ve o klasörün içine main.go dosyanızı açın
sonra terminale
<pre>
$ go mod init
</pre>
yazın, ve sonra Kodlamaya başlayın!
 <a href="https://pkg.go.dev/cmd/go">bütün komutları görmek için tıklayın</a>
<br><br><br>
<h4>Bu Repository Dışında Bakabileceğiniz Kaynaklar</h4>
<li><a href="https://app.patika.dev/paths/baslangic-seviye-go-web-development-patikasi">Patika Dev (Başlangıç seviye go patikası)</a></li>
<li><a href="https://app.patika.dev/paths/orta-seviye-go-web-development-patikasi">Patika Dev (Orta seviye go patikası)</a></li>
<li><a href="https://www.w3schools.com/go/index.php">W3Schools GO Tutorial</a></li>
<li><a href="https://go.dev/doc/">Gonun kendi dökümasyonu</a></li>
<li><a href="https://devdocs.io/go/">Devdocs Go Dükmasyonu (Düşünebileceğiniz her şey var)</a></li>

<h4>Go içinde kullanabileceğiniz Web Frameworkler</h4>
<li><a href="https://docs.gofiber.io/">Go fiber</a>
<li><a href="https://gin-gonic.com/">Gin gonic</a></li>
<h4>Go içinde kullanabileceğiniz PDF Paketleri</h4>
<li><a href="https://github.com/unidoc/unipdf">UniPDF</a></li>
<br>
<h4>Go içinde kullanabileceğiniz microchip paketleri</h4>
<li><a href="https://tinygo.org/docs/">TinyGO</a></li>
<li><a href="https://pkg.go.dev/github.com/AdvancedClimateSystems/io/i2c/microchip#section-readme">Microchip</a></li>
<br>
<h4>Go içinde kullanabileceğiniz Makine öğrenimi paketleri</h4>
<li><a href="https://github.com/tensorflow/tensorflow/tree/master/tensorflow/go">Tensorflow</a></li>
</br>
Burada öğrenebilecekleriniz:

- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/variables">Değişkenler</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/data%20types">Veri Tipleri</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/if-else">Koşullar</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/loops">Döngüler</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/functions">Fonksiyonlar</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/array%20(diziler)">Diziler</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/timer">Zamanlayıcılar</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/http">HTTP Server</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/http/gin">Gin</a>
     - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/http/gin/body-parser">body parser</a>
     - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/http/gin/file-upload">file uploader</a> 
     - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/http/gin/go-cache">go cache</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/http/go-fiber">Go-Fiber</a>
     - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/http/go-fiber/body-parser">body parser</a>
     - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/http/go-fiber/file-upload">file uploader</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/web-socket">Websocket</a>
   - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/web-socket/simple/chat-app">Chat uygulaması</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/simple/console">Console Uyguluması örnekleri</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/simple/console/mininggame.go">Maden oyunu</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/simple/console/rock-paper-%20scissors.go">Taş kağıt makas</a>
  - ...
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/simple/http">HTTP Server Örnekleri</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/simple/http/gin-portfolio">Gin Portfolio</a>
  - <a href="https://github.com/Hasan-Kilici/go-portfolio-template">Go Portfolio</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/simple/http/go-cookie-clicker">Go Cookie Clicker</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/simple/http/gin-mongodb-todo-list">Go Gin Mongodb Todo List</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/simple/http/gin-mongodb-blogs-news-website">Go Gin MongoDB blog - haber sitesi</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/simple/http/3adimda-is-clone/v1">Go Gin Go-cache mongodb 3 adımda iş clone (versiyon versiyon)</a>
  - ...
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/simple/desktop">Desktop Örnekleri</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/simple/desktop/electron/calculator">Hesap makinesi</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/db/mongo-db">NoSQL DB( MongoDB )</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/mongo-db/connection.go">Connection</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/mongo-db/insert.go">insert</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/mongo-db/delete.go">delete</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/mongo-db/update.go">update</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/db/sql">SQL</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/sql/connection.go">connection</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/sql/insert.go">insert</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/sql/delete.go">delete</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/sql/update.go">update</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/db/mysql">MySQL</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/mysql/connection.go">connection</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/mysql/insert.go">insert</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/mysql/delete.go">delete</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/mysql/update.go">update</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/db/redis">Redis</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/redis/connection.go">connection</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/redis/insert.go">insert</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/redis/delete.go">delete</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/blob/main/db/redis/update.go">update</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/template/react">Templateler</a>
  - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/template/react">Go + Gin + React</a>
-  <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/desktop">Go ile Windowsa, Linuxa, MacOS'a uygulama geliştirmek</a>
    - Electron kullanımı
    - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/desktop">Electron örnek projeler</a>
- <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/pdf">PDF</a>
    - <a href="https://github.com/golang-dersleri/go-tutorials/tree/main/pdf/generate-barcode-design">Barcode design generator</a>
