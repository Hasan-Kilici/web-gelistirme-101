### Bağlantı kurma ( net/http ile birlikte )
```go
package main

import (
  "context"
	"fmt"
	"net/http"
	"html/template"
	"time"
	"path"
  "log"
  
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

func handle(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseGlob("templates/*")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	name := ""
	if r.URL.Path == "/" {
		name = "index.html"
	} else {
		name = path.Base(r.URL.Path)
	}

	data := struct{
		Time time.Time
	}{
		Time: time.Now(),
	}

	if err := tmpl.ExecuteTemplate(w, name, data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		fmt.Println("error", err)
	}
}

func main() {
   client, err := mongo.NewClient(options.Client().ApplyURI("<MONGODB URL>"))
    if err != nil {
        log.Fatal(err)
    }
    ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
    err = client.Connect(ctx)
    if err != nil {
        log.Fatal(err)
    }
    defer client.Disconnect(ctx)
 
    databases, err := client.ListDatabaseNames(ctx, bson.M{})
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(databases)
  
	fmt.Println("http server up!")
	http.Handle(
		"/static/",
		 http.StripPrefix(
			"/static/",
			http.FileServer(http.Dir("static")),
		),
	)
	http.HandleFunc("/", handle)
	http.ListenAndServe(":0", nil)
}
```
### Satır ekleme
```go
package main

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://user:password@host:port"))
	if err != nil {
		log.Fatal(err)
	}
	err = client.Connect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(context.TODO())

	collection := client.Database("testdb").Collection("ogrenci")

	student := struct {
		Isim    string
		Soyisim string
		Sinif   string
		No      int
	}{
		Isim:    "Hasan",
		Soyisim: "KILICI",
		Sinif:   "12/D",
		No:      1200,
	}
	insertResult, err := collection.InsertOne(context.TODO(), student)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Eklenen veri: ", insertResult.InsertedID)
}
```
### Satır silme
```go
package main

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(context.TODO())

	err = client.Connect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}

	collection := client.Database("testdb").Collection("ogrenciler")

	deleteResult, err := collection.DeleteOne(context.TODO(),  bson.M{"no": 1200})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%d kayıt silindi\n", deleteResult.DeletedCount)
}
```
### Satır düzenleme
```go
package main

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		fmt.Println(err)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		fmt.Println(err)
		return
	}

	ogrenciCollection := client.Database("testdb").Collection("ogrenci")

	updateResult, err := ogrenciCollection.UpdateOne(
		context.TODO(),
		bson.M{"no": 1200},
		bson.D{
			{"$set", bson.D{
				{"isim", "Hasan"},
				{"soyisim", "KILICI"},
				{"sinif", "12/D"},
			}},
		},
	)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Printf("%d satır düzenlendi\n", updateResult.ModifiedCount)
}
```
