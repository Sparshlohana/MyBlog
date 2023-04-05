import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const data = await fs.promises.readdir('blogUsers')
            fs.promises.writeFile(`blogUsers/${data.length + 1}.json`, JSON.stringify(req.body));
            res.status(200).json({ message: "Success" })
        } catch (error) {
            res.status(500).json({
                message: "failed"
            })
        }
    }
    else {
        res.status(200).send({
            message: "All blogs"
        })
    }
}