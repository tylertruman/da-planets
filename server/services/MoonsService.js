import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"


class MoonsService{

    async getMoons(){
        let moons = await dbContext.Moons.find()
        return moons
    }

    async getMoonById(moonId){
        let moon = await dbContext.Moons.findById(moonId)
        if(!moon){
            throw new BadRequest('Invalid Moon Id')
        }
        return moon
    }

    async createMoon(moonData){
        let moon = await dbContext.Moons.create(moonData)
        return moon
    }

    async deleteMoon(moonId){
        let moon = await this.getMoonById(moonId)
        await moon.remove()
        return moon
    }

    async editMoon(moonId, moonData){
        let moon = await this.getMoonById(moonId)
        moon.name = moonData.name || moon.name
        moon.img = moonData.img || moon.img
        moon.planetId = moon.planetId
        await moon.save()
        return moon
    }

    async getMoonsByPlanetId(planetId){
        let moons = await dbContext.Moons.find({planetId})
        return moons
    }
}

export const moonsService = new MoonsService()