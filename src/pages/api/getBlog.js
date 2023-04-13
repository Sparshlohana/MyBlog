import BlogContent from "../../../models/blogContent";
// http://localhost:3000/api/getBlog?slug=1

export default async function handler(req, res) {
    try {
        const slug = req.query.slug;
        console.log(slug);
        const getSingleBlogData = await BlogContent.findOne({ slug: slug });
        res.status(200).json(getSingleBlogData)
    } catch (error) {
        res.status(500).json({ error })

    }
}