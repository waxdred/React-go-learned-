package main

import (
	"github/com/waxdred/learnedReact/routes"
	"log"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)


type Produits struct{
	ID 		string `json:"id"`
	Name 		string `json:"name"`
	Description 	string `json:"description"`
	Url 		string `json:"url"`
	Price 		string `json:"price"`
}


func main() {
	app := fiber.New()	
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
		// AllowOrigins: "http://localhost:3000",	
		AllowHeaders: "Origin, Content-Type, Accept",
	}))
	routes.Setup(app)
	//for the react can connect to the server
	log.Fatal(app.Listen(":3001"))
}
