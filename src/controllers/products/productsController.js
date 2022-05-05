import createProductService from "../../services/products/createProduct.service";
import deleteProductService from "../../services/products/deleteProduct.service";
import listOneProductService from "../../services/products/listOneProduct.service";
import listProductCategoryService from "../../services/products/listProductCategory.service";
import listProductsService from "../../services/products/listProducts.service";
import updateProductService from "../../services/products/updateProduct.service";


export default class ProductsController {
    async store(request, response) {
        const {name, price, category_id} = request.body;

        try {
            const product = await createProductService({name, price, category_id});

            return response.status(201).json(product);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message
            });
        }
    }

    async index(request, response) {
        try {
            const products = await listProductsService();

            return response.json(products);
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
            const oneProduct = await listOneProductService({id});

            return response.status(200).json(oneProduct);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message
            });
        }
    }

    async update(request, response) {
        const {id} = request.params;
        const {name, price} = request.body;

        try {
            const updateProduct = await updateProductService({name, price, id});

            return response.status(202).json(updateProduct);
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
            const deleteProduct = await deleteProductService({id});

            return response.status(204).json(deleteProduct);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message
            });
        }

    }

    async showWithCategory(request, response) {
        const {id} = request.params;

        try {
            const showProductAndCategory = await listProductCategoryService({id});

            return response.status(200).json(showProductAndCategory);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message
            })
        }
    }
}