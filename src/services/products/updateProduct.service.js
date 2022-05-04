import database from "../../database";

const updateProductService = async ({name, price, id}) => {

    try {
        const res = await database.query(
            "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *",
            [name, price, id]
        );

        if (!res.rows.length) {
            throw new Error("Not found any products with this ID");
        }

        return {message: "Product updated", product: [ res.rows[0] ]};

    } catch (err) {
        throw new Error(err);
    }

}

export default updateProductService;