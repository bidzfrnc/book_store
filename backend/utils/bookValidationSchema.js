export const bookValidationSchema = {
    title:{
        isLength: {
            options:{
                min: 3,
                max: 32,
            },
            errorMessage: "Title must have at least 3 characters with max of 40 characters."
        },
        notEmpty: {
            errorMessage: "Title is required."
        },
        isString: {
            errorMessage: "Title must be a characters only."
        },
    },
    author:{
        notEmpty: {
            errorMessage: "Author is required."
        },
        notEmpty: {
            errorMessage: "Author is required."
        },
        isString: {
            errorMessage: "Author must be a characters only."
        },
    },
    publishYear: {
        notEmpty: {
            errorMessage: "Publish Year is required."
        }
    }
}