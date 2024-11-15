import mongoose, { Document, Schema } from "mongoose";

interface IBook extends Document {
    title: string;
    author: string;
    genre: string;
}

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
});

const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;