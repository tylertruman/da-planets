import { moonsService } from "../services/MoonsService";
import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";


export class PlanetsController extends BaseController{
    constructor(){
        super('api/planets')
        this.router
        .get('', this.getPlanets)
        .get('/:planetId', this.getPlanetById)
        .post('', this.createPlanet)
        .delete('/:planetId', this.deletePlanet)
        .put('/:planetId', this.editPlanet)

        .get('/:planetId/moons', this.getMoonsByPlanetId)
    }

    async getPlanets(req, res, next){
        try {
            let planets = await planetsService.getPlanets()
            res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetById(req, res, next){
        try {
            let planet = await planetsService.getPlanetById(req.params.planetId)
            res.send(planet)
        } catch (error) {
            next(error)
        }
    }

    async createPlanet(req, res, next){
        try {
            let planetData = req.body
            let planet = await planetsService.createPlanet(planetData)
            res.send(planet)
        } catch (error) {
            next(error)
        }
    }

    async deletePlanet(req, res, next){
        try {
            let planet = await planetsService.deletePlanet(req.params.planetId)
            res.send(planet)
        } catch (error) {
            next(error)
        }
    }

    async editPlanet(req, res, next){
        try {
            let planetData = req.body
            let planet = await planetsService.editPlanet(req.params.planetId, planetData)
            res.send(planet)
        } catch (error) {
            next(error)
        }
    }

    async getMoonsByPlanetId(req, res, next){
        try {
            let moons = await moonsService.getMoonsByPlanetId(req.params.planetId)
            res.send(moons)
        } catch (error) {
            next(error)
        }
    }
}