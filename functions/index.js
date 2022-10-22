import functions from 'firebase-functions'
import express from 'express'
import { createClothing, getClothing } from './src/clothing.js'

const app = express()
app.use(express.json())

app.get('/clothing', getClothing)
app.post('/clothing', createClothing)

export const api = functions.https.onRequest(app)