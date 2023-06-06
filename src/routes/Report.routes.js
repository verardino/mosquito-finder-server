import { Router} from "express";
import { ReportController } from "../controllers/ReportController.js";

const reportRoutes = Router();

reportRoutes.post('/:id', (request, response) => {
    return ReportController.createReport(request, response)
  
})
reportRoutes.put('/:id', (request, response) => {
    return ReportController.updateReport(request, response)
  
})
reportRoutes.delete('/:id', (request, response) => {
    return ReportController.deleteReport(request, response);
})

reportRoutes.get('/', (request, response) => {
    return ReportController.readReports(request, response)
})

export {reportRoutes};