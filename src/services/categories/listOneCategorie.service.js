import database from "../../database";

const listOneCategorieService = async ({id}) => {

    try {
        const res = await database.query(
            "SELECT * FROM categories WHERE id = $1",
            [id]
        )

        if(!res.rows.length) {
            throw new Error("This ID it's not valid");
        }

        return res.rows[0];
    } catch (err) {
        throw new Error(err);
    }

}

export default listOneCategorieService;