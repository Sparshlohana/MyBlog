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
    },
    userName: {
        type: String,
        required: true
    },
    userImageUrl: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    }
})


const BlogContent = mongoose.models.BlogContent || mongoose.model('BlogContent', blogContentSchema);

BlogContent.prototype.find = (filter) => {
    return mongoose.model.prototype.find(filter);
}

export default BlogContent