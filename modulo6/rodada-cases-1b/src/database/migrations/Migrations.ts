import { BaseDatabase } from "../BaseDatabase"
import { ProductDatabase } from "../ProductDatabase"
import { products, products_tags, tags } from "./data"


class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            this.getConnection().destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await this.getConnection().raw(`
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCTS_TAGS};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_TAGS};
        
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS}(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_TAGS}(
            id VARCHAR(255) PRIMARY KEY,
            tag VARCHAR(255) NOT NULL,
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS_TAGS}(
            produto_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (produto_id) REFERENCES ${ProductDatabase.TABLE_PRODUCTS}(id),
            tag_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (tag_id) REFERENCES ${ProductDatabase.TABLE_TAGS}(id)
        );
        `)
    }

    insertData = async () => {
        await this.getConnection().(ProductDatabase.TABLE_PRODUCTS)
            .insert(products)

        await this.getConnection().(ProductDatabase.TABLE_TAGS)
            .insert(tags)

        await this.getConnection().(ProductDatabase.TABLE_PRODUCTS_TAGS)
            .insert(products_tags)
    }
}

// const migrations = new Migrations()
// migrations.execute()