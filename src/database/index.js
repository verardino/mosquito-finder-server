import {mongoose} from "mongoose";
import 'dotenv/config'

console.log(process.env.MONGO_URL)
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`${process.env.MONGO_URL}/mosquito-finder-db`);
    const db = mongoose.connection;
}

export {mongoose}