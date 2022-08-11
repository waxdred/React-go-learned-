package main

import (
	"errors"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/golang-jwt/jwt/v4"
)

// create the JWT key used to create the signature
var jwtKey = []byte("my_secret_key")

type Produits struct{
	ID 		string `json:"id"`
	Name 		string `json:"name"`
	Description 	string `json:"description"`
	Url 		string `json:"url"`
	Price 		string `json:"price"`
}

type Log struct{
	User 		string `json:"User"`
	Pass 		string `json:"Pass"`
}

// Create a struct to read the username and password from the request body
type Credentials struct{
	User 		string `json:"User"`
	jwt.StandardClaims
}

// Create a struct that will be encoded to a JWT.
// We add jwt.StandardClaims as an embedded type, to provide fields like expiry time
type Claims struct {
	User 		string `json:"User"`
	jwt.StandardClaims
}

func main() {
	app := fiber.New()	
	produits := []Produits{}
	loggin := Log{User: "jo", Pass: "jo"}

	//for the react can connect to the server
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",	
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Post("/auth", func(c *fiber.Ctx) error {
		auth := &Log{};
		if err  := c.BodyParser(auth); err != nil{
			return err
		}
		if loggin.User == auth.User && loggin.Pass == auth.Pass{
			// expire time to 5min
			expytime := time.Now().Add(5 * time.Minute)
			// create JWT claims inclure expire time at 5min
			claims := &Claims{
				User: auth.User,
				StandardClaims: jwt.StandardClaims{
					ExpiresAt: expytime.Unix(),
				},
			}
			token := jwt.NewWithClaims(jwt.SigningMethodHS256.Hash, claims)
			c.Cookie(&fiber.Cookie{
				Name: "token",
				Value: 

			})
			return c.JSON("succes");
		}else{
			return errors.New("Acces denied")
		} 
	})

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
