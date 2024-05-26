package main

import (
	"fmt"
	"strconv"
)

func main() {
	var num1, num2 float64
	var op string

	fmt.Print("Inserisci il primo numero: ")
	fmt.Scanln(&num1)

	fmt.Print("Inserisci il secondo numero: ")
	fmt.Scanln(&num2)

	fmt.Print("Scegli l'operazione (+, -, *, /): ")
	fmt.Scanln(&op)

	result := calculate(num1, num2, op)
	fmt.Println("Il risultato di", num1, op, num2, "è:", result)
}

func calculate(num1, num2 float64, op string) float64 {
	var result float64
	switch op {
	case "+":
		result = num1 + num2
	case "-":
		result = num1 - num2
	case "*":
		result = num1 * num2
	case "/":
		if num2 != 0 {
			result = num1 / num2
		} else {
			fmt.Println("Errore: divisione per zero")
			return 0
		}
	default:
		fmt.Println("Operazione non valida")
		return 0
	}
	return result
}
