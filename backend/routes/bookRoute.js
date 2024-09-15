import express from "express";
import { Book } from "../models/bookSchema.js";
import { bookValidationSchema } from "../utils/bookValidationSchema.js";
import { checkSchema, matchedData, validationResult } from "express-validator";


const router = express.Router();

//CREATE BOOKS without VALIDATION using express-validator
router.post('/', async (request, response) => {
    try{
        // Extract book information from the request body
        const { title, author, publishYear } = request.body;
        // Validate that all required fields are present
        if (!title || !author || !publishYear) {
            return response.status(400).json({
                status: "failed",
                message: "All fields are required!"
            });
        }

        const newBook = await Book.create(request.body);
            response.status(201).json({
            status: "Success",
            data: newBook
        });
    }catch(error){
        console.log(error)
        return response.status(500)
    }
}); 

// router.post('/',checkSchema(bookValidationSchema), async (request, response) => {

//     const validateBook = validationResult(request);
//     if(!validateBook.isEmpty()) return response.status(400).send(validateBook.array());
//     const validatedBook = matchedData(request);
//     const newBook = new Book(validatedBook);

//     try{
//         console.log("New Book Added")
//         const savedNewBook = await newBook.save();
//         // return response.status(201).json({status: "Success!", addedBook: savedNewBook });
//         return response.status(201).send(savedNewBook);
//     }catch(error){
//         console.log(error)
//         // return response.status(400).json({ status: "Failed!", error: error});
//         return response.status(400).json({ status: "Failed!", error: error});
//     }
// });



//GET BOOKS
router.get('/', async (request, response) => {
    const allBooks = await Book.find();
    try{
        response.status(201).json({
        status: "Success",
        count: allBooks.length,
        foundedBooks: allBooks
        
    });
    }catch(error){
        console.log(error)
        return response.status(500)
    }
});

// GET BOOK BY ID
router.get('/:id', async (request, response) => {
    const getBook = await Book.findById(request.params.id);
    if(!getBook){
        return response.status(404).json({
            status: "Failed",
            msg: "Cannot found"
        });
    }
    response.status(200).json({
            status: "success",
            selectedBook: getBook
        })

});

// UPDATE BOOK BY ID
router.patch('/:id', async (request, response) => {
    try{
        // // Extract book information from the request body
        // const { title, author, publishYear } = request.body;
        // // Validate that all required fields are present
        // if (!title || !author || !publishYear) {
        //     return response.status(400).json({
        //         status: "failed",
        //         message: "All fields are required!"
        //     });
        // }
        
        const {id} = request.params;

        const updateBook = await Book.findByIdAndUpdate(id, request.body, { new: true });

        if(!updateBook){
            return response.status(400).json({message: "Book not found"})
        }
            response.status(200).json({
            status: "Success",
            data:  updateBook
        });
    }catch(error){
        console.log(error)
        response.status(500)
    }
});

router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const toDeleteBook = await Book.findByIdAndDelete(id);

        if(!toDeleteBook){
            return response.status(400).json({message: "Book not found"})
        }
            response.status(200).json({
            status: "Success",
            message: "Deleted Success"
        });
    }catch(error){
        console.log(error)
        response.status(500)
    }
})

export default router;