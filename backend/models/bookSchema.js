
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: mongoose.Schema.Types.String,
            required:true,
            unique: true
        },
        author: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        publishYear: {
            type: mongoose.Schema.Types.Number,
            required: true
        },
        // createdAt:{
        //     type: Date,
        //     default: Date.now(),
        // },
    },
    {
        timestamps: true
    }
);

export const Book = mongoose.model('Book', bookSchema);