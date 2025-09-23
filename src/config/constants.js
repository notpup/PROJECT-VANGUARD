import dotenv from "dotenv"
import { __dirname } from "./path.js";

dotenv.config({ path: __dirname+"/env/.env.test" })

const ENVIRONMENT = process.env

const PORT = ENVIRONMENT.PORT
const MONGO_URI = ENVIRONMENT.MONGO_URI
const JWT_SECRET = ENVIRONMENT.JWT_SECRET
const NODE_ENV = ENVIRONMENT.NODE_ENV
const LOCALHOST_SECRET = ENVIRONMENT.LOCALHOST_SECRET

export { PORT, MONGO_URI, JWT_SECRET, NODE_ENV, LOCALHOST_SECRET }