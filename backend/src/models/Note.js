import mongoose from "mongoose";

// Create a schema for the note
const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // This correctly adds createdAt and updatedAt fields
);

// Create a model for the note
const Note = mongoose.model("Note", schema);

export default Note;
