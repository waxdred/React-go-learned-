package routes

import (
	"github/com/waxdred/learnedReact/auth"
	"github/com/waxdred/learnedReact/database"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App){
	app.Post("/api/log", auth.Auth)
	app.Get("/api/user", auth.User)
	app.Post("/api/loggout", auth.Loggout)
	database.ProduitApi(app)
}
