import * as fs from "fs";
// http://localhost:3000/api/getBlog?slug=1

export default function handler(req, res) {

    fs.readFile(`blogData/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) {

            res.status(500).json({
                err: err?.message
            })
        }
        res.status(200).json(JSON.parse(data))
    })

}