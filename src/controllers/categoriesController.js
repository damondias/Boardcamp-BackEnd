import db from '../database.js';

export async function postCategories(req, res) {
    const category = req.body;

    try {
        const result = await db.query(`
            SELECT id 
            FROM categories 
                WHERE name=$1
            `, [category.name]);
        if (result.rowCount > 0) {
            return res.status(409).send("Categoria já criada");
        }

        await db.query(`
            INSERT INTO categories (name)
                VALUES ($1)
        `, [category.name]);
        res.sendStatus(201);
    } 
    catch (error) {
        res.status(500).send(error);
    }
}

export async function getCategories(req, res) {
    try {
        const { rows: categories } = await db.query(`SELECT * FROM categories`);
        res.send(categories);
    } 
    catch (error) {
        res.status(500).send(error);
    }
}