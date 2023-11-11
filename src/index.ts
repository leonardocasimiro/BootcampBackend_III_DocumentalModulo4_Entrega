import "#core/load-env.js";
import express from "express";
import path from "path";
import url from "url";
import { createRestApiServer, connectToDBServer, db} from "#core/servers/index.js";
import { envConstants } from "#core/constants/index.js";
import { booksApi } from "./pods/book/books.api.js";
import { housesApi } from "#pods/house/index.js";
import { logRequestMiddleware, logErrorRequestMiddleware} from "#common/middlewares/index.js";

const restApiServer = createRestApiServer();

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use("/", express.static(staticFilesPath));

restApiServer.use(logRequestMiddleware);

restApiServer.use("/api/books", booksApi);

restApiServer.use("/api/houses", housesApi);

restApiServer.use(logErrorRequestMiddleware);

restApiServer.listen(envConstants.PORT, async () => {
  if (!envConstants.isApiMock) {
    await connectToDBServer(envConstants.MONGODB_URI);
    console.log('Connected to DB');
  } else {
    console.log('Running API mock');
  }
  console.log(`Server ready at port ${envConstants.PORT}`);
});

/*
// Prueba modo MongoDB
restApiServer.listen(envConstants.PORT, async () => {
  if (!envConstants.isApiMock) {
    await connectToDBServer(envConstants.MONGODB_URI);
    //await db.collection('listingsAndReviews').insertOne({ name: 'Book 1' });
    const houses = await db.collection('listingsAndReviews').find().toArray();
    console.log({houses})
  } else {
    console.log('Running API mock');
  }
  console.log(`Server ready at port ${envConstants.PORT}`);
});
*/