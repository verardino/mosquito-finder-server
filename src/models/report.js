import { mongoose } from "../database/index.js";

const ReportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
        select: false,
    },
    latitude:{
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    },
    pathImage: {
        type: String
    },
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    upVote: {
        type: Number,
        default: 0
    },
    downVote:{
        type: Number,
        default: 0
    },
    solve: {
        type: Boolean,
        default: false
    },
    complaint: {
        type: Number,
        default: 0
    }
});


const Report = mongoose.model("Report", ReportSchema);

export {Report}