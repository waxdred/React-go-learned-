package auth

import (
	"strconv"
	"time"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
)

type Log struct{
	User 		string `json:"user"`
	Pass 		string `json:"pass"`
}

// create the JWT key used to create the signature
var jwtKey = []byte("my_secret_key")

func Auth(c *fiber.Ctx) error {
	auth := &Log{};
	loggin := Log{User: "jo", Pass: "jo"}
	if err  := c.BodyParser(auth); err != nil{
		return err
	}
	if loggin.User != auth.User || loggin.Pass != auth.Pass{
		fmt.Printf("Acces denied\n")
		return c.JSON(fiber.Map{
			"message": "acces denied",
		})
	} 
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer: strconv.Itoa(0),
		ExpiresAt: time.Now().Add(time.Minute * 5).Unix(),
	})
	token, err := claims.SignedString(jwtKey)
	if err != nil{
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "could not login",
		})
	}
	cookie := fiber.Cookie{
		Name: "jwt",
		Value: token,
		Expires: time.Now().Add(time.Minute * 5),
		HTTPOnly: true,
	}
	c.Cookie(&cookie)
		fmt.Printf("Acces ok\n")
	return c.JSON(fiber.Map{
		"message": "succes",
	});
}

func User(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	 token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error){
		 return jwtKey, nil
	 })
	 if err != nil{
		 // c.Status(fiber.StatusUnauthorized)
		 return c.JSON(fiber.Map{
			 "message": "unauthenticated",
		 })
	 }
	 claims := token.Claims.(*jwt.StandardClaims)
	 return c.JSON(fiber.Map{
		 "message": "authenticated",
		 "claims": claims,
	 })

}

func Loggout(c *fiber.Ctx) error {
	cookie := fiber.Cookie{
		Name: "jwt",
		Value: "",
		Expires: time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}
	c.Cookie(&cookie)
	return c.JSON(fiber.Map{
		"message": "succes",
	})
}
