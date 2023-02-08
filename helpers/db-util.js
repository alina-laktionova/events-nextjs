import { MongoClient } from "mongodb";

export async function connectDatabase() {
  return await MongoClient.connect(process.env.MONGODB_CONNECT);
}

export async function insertDocument(client, collection, document) {
  return await client.db().collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  return await client
    .db()
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
}
