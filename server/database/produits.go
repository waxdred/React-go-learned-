package database

import (
	"github.com/gofiber/fiber/v2"
	"github/com/waxdred/learnedReact/produits"
)

func ProduitApi(app *fiber.App){
	items := &produits.Item{}

	app.Get("/api/produit/get", func(c *fiber.Ctx) error {
		return c.JSON(items);
	})

	app.Post("/api/produit/add", func(c *fiber.Ctx) error {
		produit := &produits.Produits{};
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		items.AddItem(produit)
		return c.JSON(items);
	})

	app.Patch("/api/produit/delete", func(c *fiber.Ctx) error {
		produit := &produits.Produits{};
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		items = items.DeleteItem(produit)
		return c.JSON(items);
	})

	app.Patch("/api/produit/modify", func(c *fiber.Ctx) error {
		produit := &produits.Produits{};
		if err  := c.BodyParser(produit); err != nil{
			return err
		}
		items.ModifyItem((*produits.Produits)(produit))
		return c.JSON(items);
	})
}
