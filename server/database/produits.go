package database

import (
	"github.com/gofiber/fiber/v2"
)
type Produits struct{
	ID 		string `json:"id"`
	Name 		string `json:"name"`
	Description 	string `json:"description"`
	Url 		string `json:"url"`
	Price 		string `json:"price"`
}

func ProduitApi(app *fiber.App){
	produits := []Produits{}

	app.Get("/api/produit/get", func(c *fiber.Ctx) error {
		return c.JSON(produits);
	})

	app.Post("/api/produit/add", func(c *fiber.Ctx) error {
		produit := &Produits{};
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		produits = append(produits, *produit)
		return c.JSON(produits);
	})

	app.Patch("/api/produit/delete", func(c *fiber.Ctx) error {
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
	app.Patch("/api/produit/modify", func(c *fiber.Ctx) error {
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
}
