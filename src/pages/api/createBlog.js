import BlogContent from "../../../models/blogContent";

export default async function handler(req, res) {
    const data = req.body;
    try {
        if (data) {
            const postBlogContent = await BlogContent.create({
                title: data.title,
                content: data.content
            })

            // const postBlogContent = new BlogContent({
            //     title: data.title,
            //     content: data.content
            // })

            await postBlogContent.save();
            res.status(200).json({ message: "success" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
}