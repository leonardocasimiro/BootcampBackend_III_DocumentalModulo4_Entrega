import { MongoClient, Db } from 'mongodb';

export let db: Db;

export const connectToDBServer = async (connectionURI: string) => {
  const client = new MongoClient(connectionURI);
  await client.connect();

  db = client.db(); // en lugar de hacer un return, hace un export más arriba de db
};