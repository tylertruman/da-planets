import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";


export class SpeciesController extends BaseController{
    constructor(){
        super('api/species')
        this.router
        .get('', this.getSpecies)
        .get('/:speciesId', this.getSpeciesById)
        .post('', this.createSpecies)
        .delete('/:speciesId', this.deleteSpecies)
        .put('/:speciesId', this.editSpecies)
    }

    async getSpecies(req, res, next){
        try {
            let species = await speciesService.getSpecies()
            res.send(species)
        } catch (error) {
            next(error)
        }
    }

    async getSpeciesById(req, res, next){
        try {
            let species = await speciesService.getSpeciesById(req.params.speciesId)
            res.send(species)
        } catch (error) {
            next(error)
        }
    }

    async createSpecies(req, res, next){
        try {
            let speciesData = req.body
            let species = await speciesService.createSpecies(speciesData)
            res.send(species)
        } catch (error) {
            next(error)
        }
    }

    async deleteSpecies(req, res, next){
        try {
            let species = await speciesService.deleteSpecies(req.params.speciesId)
            res.send(species)
        } catch (error) {
            next(error)
        }
    }

    async editSpecies(req, res, next){
        try {
            let speciesData = req.body
            let species = await speciesService.editSpecies(req.params.speciesId, speciesData)
            res.send(species)
        } catch (error) {
            next(error)
        }
    }
}