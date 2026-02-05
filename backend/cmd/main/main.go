package main

import(
  "net/http"
  "github.com/go-chi/chi/v5"
  "github.com/go-chi/chi/v5/middleware" 
  "encoding/json"
)

type User struct {
  Name string
  Age int
}

func main(){
  Person := User{"Dimss",20}
  byt, err:= json.Marshal(Person);

  if err != nil{
    panic(err)
  }

  r := chi.NewRouter();
  r.Use(middleware.Logger);

  r.Get("/", func( w http.ResponseWriter, r *http.Request){
    w.Write(byt)
  })

  r.Get("/{name}",func(w http.ResponseWriter, r *http.Request){
    x := chi.URLParam(r,"nam")
    w.Write([]byte("Hello " + x))
  })

  http.ListenAndServe(":3000",r)
}
