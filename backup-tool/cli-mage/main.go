//go:build mage

package main

import (
    "github.com/magefile/mage/sh"
    "fmt"
)

// Runs go mod download and then installs the binary.
func Build() error {
    if err := sh.Run("go", "mod", "download"); err != nil {
        return err
    }
    fmt.Println("Hello World!")
    return sh.Run("go", "install", "./...")
}