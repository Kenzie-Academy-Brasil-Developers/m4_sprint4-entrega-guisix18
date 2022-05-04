import database from "../../database";

const updateCategorieService = async ({id, name}) => {
 
    try {

        const updatedCategorie = await database.query(
            "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
            [name, id]
        );

        if (!updatedCategorie.rows.length) {
            throw new Error("Not found any categories with this ID");
        }

        return {message: "Category updated", category: [ updatedCategorie.rows[0] ]};

    } catch (err) {
        throw new Error(err);
    }

}

export default updateCategorieService;