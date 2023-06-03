import { Report } from "../models/report.js";
import { User } from "../models/usuario.js"; 

class ReportController{
    constructor(){}

    async createReport(request, response) {
        const {id} = request.params;
        const {name, latitude, longitude} = request.body;
        const user = await User.findOne({
                 _id: id,
           });
        const report = new Report()
        report.user = user;
        report.name = name
        report.latitude  = latitude
        report.longitude = longitude
        await report.save()
        return response.send(200)
    }

}

export{ReportController}