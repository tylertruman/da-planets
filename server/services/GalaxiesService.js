import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";


class GalaxiesService{

    async getGalaxies(){
        let galaxies = await dbContext.Galaxies.find()
        return galaxies
    }

    async getGalaxyById(galaxyId){
        let galaxy = await dbContext.Galaxies.findById(galaxyId)
        if(!galaxy){
            throw new BadRequest('Invalid Galaxy Id')
        }
        return galaxy
    }

    async createGalaxy(galaxyData){
        let galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }

    async deleteGalaxy(galaxyId){
        let galaxy = await this.getGalaxyById(galaxyId)
        await galaxy.remove()
        return galaxy
    }

    async editGalaxy(galaxyId, galaxyData){
        let galaxy = await this.getGalaxyById(galaxyId)
        galaxy.name = galaxyData.name || galaxy.name
        galaxy.img = galaxyData.img || galaxy.img
        await galaxy.save()
        return galaxy
    }
}

export const galaxiesService = new GalaxiesService()