import { moonsService } from "../services/MoonsService";
import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";


export class MoonsController extends BaseController{
    constructor(){
        super('api/moons')
        this.router
        .get('', this.getMoons)
        .get('/:moonId', this.getMoonById)
        .post('', this.createMoon)
        .delete('/:moonId', this.deleteMoon)
        .put('/:moonId', this.editMoon)

        .get('/:moonId/species', this.getSpeciesByMoonId)
    }

    async getMoons(req, res, next){
        try {
            let moons = await moonsService.getMoons()
            res.send(moons)
        } catch (error) {
            next(error)
        }
    }

    async getMoonById(req, res, next){
        try {
            let moon = await moonsService.getMoonById(req.params.moonId)
            res.send(moon)
        } catch (error) {
            next(error)
        }
    }

    async createMoon(req, res, next){
        try {
            let moonData = req.body
            let moon = await moonsService.createMoon(moonData)
            res.send(moon)
        } catch (error) {
            next(error)
        }
    }

    async deleteMoon(req, res, next){
        try {
            let moon = await moonsService.deleteMoon(req.params.moonId)
            res.send(moon)
        } catch (error) {
            next(error)
        }
    }

    async editMoon(req, res, next){
        try {
            let moonData = req.body
            let moon = await moonsService.editMoon(req.params.moonId, moonData)
            res.send(moon)
        } catch (error) {
            next(error)
        }
    }

    async getSpeciesByMoonId(req, res, next){
        try {
            let species = await speciesService.getSpeciesByMoonId(req.params.moonId)
            res.send(species)
        } catch (error) {
            next(error)
        }
    }
}