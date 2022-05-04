import database from "../../database";

const deleteCategorieService = async ({id}) => {

    try {

        const res = await database.query(
            "DELETE FROM categories WHERE id = $1 RETURNING *",
            [id]
        );

        if (!res.rows.length) {
            throw new Error("ID invalid");
        }

        return {message: "Category deleted", category: [ updatedCategorie.rows[0] ]};

    } catch (err) {
        throw new Error(err);
    }

}

export default deleteCategorieService;