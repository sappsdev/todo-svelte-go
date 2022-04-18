package main

import (
	"fmt"
	"os"
)

func DbHost() string {
	db_host := getEnv("DB_HOST", "localhost")
	return fmt.Sprintf("%s", db_host)
}

func GinMode() string {
	gin_mode := getEnv("GIN_MODE", "debug")
	return fmt.Sprintf("%s", gin_mode)
}

func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if len(value) == 0 {
		return defaultValue
	}
	return value
}
