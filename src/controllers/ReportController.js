import { Report } from "../models/report.js";
import { User } from "../models/usuario.js"; 

class ReportController{
    constructor(){}

    static async createReport(request, response) {
        const {id} = request.params;
        const {name, latitude, longitude, description, image} = request.body;
        const user = await User.findOne({
                 _id: id,
           });
        const report = new Report()
        report.postedBy = user;
        report.name = name
        report.latitude  = latitude
        report.longitude = longitude
        report.description = description
        report.imgage64 = image;
        await report.save()
       
        return response.json(report).status(200)
    }
    static async updateReport(request, response) {
        const {id} = request.params;
        const {name, latitude, longitude, description, image, userId} = request.body;
        const user = await User.findOne({
                 _id: userId,
           });
        
        const report = await Report.findOne({
            _id: id
        })
        report.postedBy = user;
        report.name = name
        report.latitude  = latitude
        report.longitude = longitude
        report.description = description
        report.imgage64 = image;
        await report.save()
       
        return response.json(report).status(200)
    }
    static async deleteReport(request, response){
        const {id} = request.params
        await Report.deleteOne({
            _id: id
        })
        return response.json({
            "message": "Deletado com sucesso"
        }).status(200)
    }

    static async readReports(request, response){
        const reports = await Report.find()
        return response.json(reports).status(200)
    }

}

export{ReportController}