import { planetsService } from "../services/PlanetsService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";


export class StarsController extends BaseController{
    constructor(){
        super('api/stars')
        this.router
        .get('', this.getStars)
        .get('/:starId', this.getStarById)
        .post('', this.createStar)
        .delete('/:starId', this.deleteStar)
        .put('/:starId', this.editStar)

        .get('/:starId/planets', this.getPlanetsByStarId)
    }

    async getStars(req, res, next){
        try {
            let stars = await starsService.getStars()
            res.send(stars)
        } catch (error) {
            next(error)
        }
    }

    async getStarById(req, res, next){
        try {
            let star = await starsService.getStarById(req.params.starId)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }

    async createStar(req, res, next){
        try {
            let starData = req.body
            let star = await starsService.createStar(starData)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }

    async deleteStar(req, res, next){
        try {
            let star = await starsService.deleteStar(req.params.starId)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }

    async editStar(req, res, next){
        try {
            let starData = req.body
            let star = await starsService.editStar(req.params.starId, starData)
            res.send(star)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetsByStarId(req, res, next){
        try {
            let planets = await planetsService.getPlanetsByStarId(req.params.starId)
            res.send(planets)
        } catch (error) {
            next(error)
        }
    }
}