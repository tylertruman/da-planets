import { galaxiesService } from "../services/GalaxiesService";
import { planetsService } from "../services/PlanetsService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";


export class GalaxiesController extends BaseController{
    constructor(){
        super('api/galaxies')
        this.router
        .get('', this.getGalaxies)
        .get('/:galaxyId', this.getGalaxyById)
        .post('', this.createGalaxy)
        .delete('/:galaxyId', this.deleteGalaxy)
        .put('/:galaxyId', this.editGalaxy)

        .get('/:galaxyId/stars', this.getStarsByGalaxyId)
    }

    async getGalaxies(req, res, next){
        try {
            let galaxies = await galaxiesService.getGalaxies()
            res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxyById(req, res, next){
        try {
            let galaxy = await galaxiesService.getGalaxyById(req.params.galaxyId)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next){
        try {
            let galaxyData = req.body
            let galaxy = await galaxiesService.createGalaxy(galaxyData)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async deleteGalaxy(req, res, next){
        try {
            let galaxy = await galaxiesService.deleteGalaxy(req.params.galaxyId)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async editGalaxy(req, res, next){
        try {
            let galaxyData = req.body
            let galaxy = await galaxiesService.editGalaxy(req.params.galaxyId, galaxyData)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getStarsByGalaxyId(req, res, next){
        try {
            let stars = await starsService.getStarsByGalaxyId(req.params.galaxyId)
            res.send(stars)
        } catch (error) {
            next(error)
        }
    }
}