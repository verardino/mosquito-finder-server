import {app} from "./app.js"
import 'dotenv/config'

import "./database/index.js"
app.listen(process.env.PORT || 3000, () => console.log(`Server is running in ${process.env.PORT || 3000}`));
