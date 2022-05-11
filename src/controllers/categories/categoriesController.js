import createCategorieService from "../../services/categories/createCategorie.service";
import deleteCategorieService from "../../services/categories/deleteCategorie.service";
import listCategoriesService from "../../services/categories/listCategories.service";
import listOneCategorieService from "../../services/categories/listOneCategorie.service";
import updateCategorieService from "../../services/categories/updateCategorie.service";

export default class CategoriesController {
     async store(request, response) {
        const {name} = request.body;
        try {
            const categorie = await createCategorieService({name});
            
            return response.status(201).json(categorie);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message
            });
        }
    }

    async index(request, response) {
        try {
            const listCategories = await listCategoriesService();
            
            return response.status(200).json(listCategories);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message
            });
        }
        
    }

    async show(request, response) {
        const {id} = request.params;

        try {
            const listOneCategorie = await listOneCategorieService({id});

            return response.status(200).json(listOneCategorie);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message
            });
        }
    }

    async update(request, response) {

        const {id} = request.params;
        const {name} = request.body;

        try {
            const updateCategorie = await updateCategorieService({id, name});

            return response.json(updateCategorie);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message
            });
        }

    }

    async delete(request, response) {

        const {id} = request.params;

        try {
            const deleteCategorie = await deleteCategorieService({id});

            return response.status(200).json(deleteCategorie);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message
            });
        }

    }
}