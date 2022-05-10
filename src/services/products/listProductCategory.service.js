import database from "../../database";

const listProductCategoryService = async ({id}) => {

    try {
        const res =  await database.query(
            "SELECT p.name, p.price, c.name category FROM products p INNER JOIN categories c ON c.id = p.category_id WHERE p.category_id = $1",
        [id]
        );

        if (!res.rows.length) {
            throw new Error("ID invalid");
        }

        return res.rows;

    } catch (err) {
        throw new Error(err);
    }

}

export default listProductCategoryService;