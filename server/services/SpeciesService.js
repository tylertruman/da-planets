import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"


class SpeciesService{

    async getSpecies(){
        let species = await dbContext.Species.find()
        return species
    }

    async getSpeciesById(speciesId){
        let species = await dbContext.Species.findById(speciesId)
        if(!species){
            throw new BadRequest('Invalid Species Id')
        }
        return species
    }

    async createSpecies(speciesData){
        let species = await dbContext.Species.create(speciesData)
        return species
    }

    async deleteSpecies(speciesId){
        let species = await this.getSpeciesById(speciesId)
        await species.remove()
        return species
    }

    async editSpecies(speciesId, speciesData){
        let species = await this.getSpeciesById(speciesId)
        species.name = speciesData.name || species.name
        species.img = speciesData.img || species.img
        species.moonId = species.moonId
    }

    async getSpeciesByMoonId(moonId){
        let species = await dbContext.Species.find({moonId})
        return species
    }
}

export const speciesService = new SpeciesService()