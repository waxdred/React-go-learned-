package main

import (
	"errors"
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

// type Log struct{
// 	User 		string `json:"name"`
// 	Passwd 		string `json:"price"`
// }

func main() {
	app := fiber.New()	
	produits := []Produits{}
	// loggin := Log{User: "jo", Passwd: "jo"}

	//for the react can connect to the server
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",	
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	// app.Patch("/log", func(c *fiber.Ctx) error {
	// 	loggin := &Log{};
	// 	if err  := c.BodyParser(log); err != nil{
	// 		return err
	// 	}
	// 	if loggin.User == log.User && loggin.Passwd == log.Passwd{
	// 		return errors.New("Succes")
	// 	}else{
	// 		return errors.New("Acces denied")
	// 	} 
	// 	return c.JSON(produits);
	// })

	// send full struct produit
	app.Get("/get/produits", func(c *fiber.Ctx) error {
		return c.JSON(produits);
	})

	// receive Produits add struct
	app.Post("/add/produit", func(c *fiber.Ctx) error {
		produit := &Produits{};
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		produits = append(produits, *produit)
		return c.JSON(produits);
	})

	// remove element in struct
	app.Patch("/delete/produit", func(c *fiber.Ctx) error {
		produit := &Produits{};
		ret := []Produits{}
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		i := 0
		for  i < len(produits){
			if produits[i].ID != produit.ID{
				ret = append(ret, produits[i]);
			}
			i++;
		}
		produits = ret
		return c.JSON(produits);
	})

	// modity proproduits
	app.Patch("/modify/produit", func(c *fiber.Ctx) error {
		produit := &Produits{};
		ret := []Produits{}
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		i := 0
		for  i < len(produits){
			if produits[i].ID != produit.ID{
				ret = append(ret, produits[i]);
			}else{
				ret = append(ret, *produit);
			}
			i++;
		}
		produits = ret
		return c.JSON(produits);
	})
	// connect port
	log.Fatal(app.Listen(":3001"))
}
