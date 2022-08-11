import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy';
import { MoonSchema } from '../models/Moon';
import { PlanetSchema } from '../models/Planet';
import { SpeciesSchema } from '../models/Species';
import { StarSchema } from '../models/Star';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxies = mongoose.model('Galaxies', GalaxySchema);
  Stars = mongoose.model('Stars', StarSchema);
  Planets = mongoose.model('Planets', PlanetSchema);
  Moons = mongoose.model('Moons', MoonSchema);
  Species = mongoose.model('Species', SpeciesSchema);
}

export const dbContext = new DbContext()
