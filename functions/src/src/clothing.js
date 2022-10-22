import { dbConnect } from "./dbConnect.js";

export async function createClothing(req, res) {
    const db = dbConnect();
    const doc = await db.collection('clothing').add(req.body)
        .catch(err => res.status(500)
        .send({sucess: false, message: err }))
    res.status(201)
        .send({ success: true, message: 'Clothing created: ' + doc.id });
}

export async function getClothing(req, res) {
    const db = dbConnect();
    const collection = await db.collection('clothing')
        .get()
        .
}