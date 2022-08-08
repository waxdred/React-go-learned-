package main

import (
	"fmt"
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
	produits := []Produits{}

	//for the react can connect to the server
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",	
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	// send full struct produit
	app.Get("/get/produits", func(c *fiber.Ctx) error {
		return c.JSON(produits);
	})

	// receive Produits add struct
	app.Post("/add/produit", func(c *fiber.Ctx) error {
		fmt.Println("request entry")
		produit := &Produits{};
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		produits = append(produits, *produit)
		return c.JSON(produits);
	})

	// remove element in struct
	app.Patch("/deleted/produit", func(c *fiber.Ctx) error {
		produit := &Produits{};
		tmp := &Produits{};
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		i := 0
		for i < len(produits){
			if produits[i].ID != produit.ID	{
				tmp = append(tmp, *produit)
			}
		}
		
		return c.JSON(produits);
	})
	// connect port
	log.Fatal(app.Listen(":3001"))
}
