import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"


class PlanetsService{

    async getPlanets(){
        let planets = await dbContext.Planets.find()
        return planets
    }

    async getPlanetById(planetId){
        let planet = await dbContext.Planets.findById(planetId)
        if(!planet){
            throw new BadRequest('Invalid Planet Id')
        }
        return planet
    }

    async createPlanet(planetData){
        let planet = await dbContext.Planets.create(planetData)
        return planet
    }

    async deletePlanet(planetId){
        let planet = await this.getPlanetById(planetId)
        await planet.remove()
        return planet
    }

    async editPlanet(planetId, planetData){
        let planet = await this.getPlanetById(planetId)
        planet.name = planetData.name || planet.name
        planet.img = planetData.img || planet.img
        planet.starId = planet.starId
        await planet.save()
        return planet
    }

    async getPlanetsByStarId(starId){
        let planets = await dbContext.Planets.find({starId})
        return planets
    }

}

export const planetsService = new PlanetsService()