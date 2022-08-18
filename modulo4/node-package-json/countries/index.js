import { countries } from "./countries.js"

const value = process.argv[2]

const result = countries.filter((pais) => {
    return pais.name.toLowerCase().includes(value)
})

console.table(result)