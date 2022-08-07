package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type Produits struct{
	ID string `json:"id"`
	Name string `json:"name"`
	Description string `json:"description"`
	Url string `json:"url"`
	Price string `json:"price"`

}

func main() {
	app := fiber.New()	
	produits := []Produits{}

	// send full struct
	app.Get("/Produits", func(c *fiber.Ctx) error {
		return c.JSON(produits);
	})

	// receive Produits add struct
	app.Post("/Produits/add", func(c *fiber.Ctx) error {
		produit := &Produits{};
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		produits = append(produits, *produit)
		return c.JSON(produits);
	})

	// connect port
	log.Fatal(app.Listen(":3001"))
}
