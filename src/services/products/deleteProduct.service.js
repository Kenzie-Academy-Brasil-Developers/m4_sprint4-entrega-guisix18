import database from "../../database";

const deleteProductService = async ({id}) => {

    try {
        const res = await database.query(
            "DELETE FROM products WHERE id = $1 RETURNING *",
            [id]
        );

        if (!res.rows.length) {
            throw new Error("ID invalid");
        }

        return {message: "Product deleted", product: res.rows[0]};
        
    } catch (err) {
        throw new Error(err);
    }

}

export default deleteProductService;