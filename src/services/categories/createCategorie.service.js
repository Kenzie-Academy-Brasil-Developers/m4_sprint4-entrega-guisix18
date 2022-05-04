import database from "../../database";

const createCategorieService = async ({name}) => {
    try {
        const res = await database.query(
            "INSERT INTO categories(name) VALUES($1) RETURNING *",
            [name]
        );
        
        return res.rows[0];
   } catch (err) {
       throw new Error("This categories is already exists");
   }
}

export default createCategorieService;