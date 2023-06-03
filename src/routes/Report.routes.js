import { Router} from "express";
import { ReportController } from "../controllers/ReportController.js";

const reportRoutes = Router();

reportRoutes.post('/::id', (request, response) => {
    return ReportController.createReport(request, response)
  
})

export {reportRoutes};