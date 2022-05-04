import database from "../../database";

const createProductService = async ({name, price}) => {

    try {
        const res = await database.query(
            "INSERT INTO products(name, price) VALUES($1, $2) RETURNING *",
            [name, price]
        )
        return res.rows[0];
    } catch (err) {
        throw new Error("Something is wrong");
    }

}

export default createProductService;