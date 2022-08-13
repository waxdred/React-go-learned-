package produits

import "fmt"

// Produits struct
type Produits struct{
	ID 		string `json:"id"`
	Name 		string `json:"name"`
	Description 	string `json:"description"`
	Url 		string `json:"url"`
	Price 		string `json:"price"`
}

type Item []Produits

func (t *Item)AddItem(produit *Produits){
	itemToAdd := Produits{
		ID: produit.ID,
		Name: produit.Name,
		Description: produit.Description,
		Url: produit.Url,
		Price: produit.Price,
	}
	*t = append(*t, itemToAdd)
}


func (t *Item)DeleteItem(produit *Produits) *Item{
	ls := *t
	ret := &Item{}
	for i := 0; i < len(ls); i++{
		if ls[i].ID != produit.ID{
			init := Produits(ls[i])
			ret.AddItem(&init)
		}
	}
	*t = *ret
        fmt.Printf("%+v\n", t)
	return ret
}

func (t *Item)ModifyItem(produit *Produits) *Item{
	ls := *t
	ret := &Item{}

	for i := 0; i < len(ls); i++{
		if ls[i].ID != produit.ID{
			init := Produits(ls[i])
			ret.AddItem(&init)
		}else{
			ret.AddItem(produit)
		}
	}
	*t = *ret
	return ret
}
