// lib/mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = { 
  useNewUrlParser: true,
}

let client
let mongodbconnect

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') { 
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  mongodbconnect = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  mongodbconnect = client.connect()
}

export default mongodbconnect