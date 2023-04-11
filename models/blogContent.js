import { Schema, mongoose } from "mongoose";
import crypto from "crypto"

const blogContentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        default: function () {
            return crypto.randomBytes(4).toString('hex');
        }
    }
})


const BlogContent = mongoose.models.BlogContent || mongoose.model('BlogContent', blogContentSchema);

export default BlogContent