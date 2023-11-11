import "#core/load-env.js";
import express from "express";
import path from "path";
import url from "url";
import { createRestApiServer } from "#core/servers/index.js";
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

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port ${envConstants.PORT}`);
});
