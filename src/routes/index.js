import { Router } from "express";
import { reportRoutes} from "./Report.routes.js";


const router = Router()

router.use("/report,", reportRoutes);

export{router}

