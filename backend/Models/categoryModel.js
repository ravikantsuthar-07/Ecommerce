import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            default: null,
        },
        level: {
            type: Number,
            default: 0,
            required: true,
        },
        status: {
            type: Number,
            default: 1,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
