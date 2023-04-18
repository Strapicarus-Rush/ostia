import {Grassland} from './grassland'
import { Animal } from './animal';
import { Corral } from './corral';

export interface Grazing {
    id?: number;
    grassland?: Grassland;
    animal: Animal;
    date: Date;
    corral?: Corral;
    createdAt:Date;
    updatedAt:Date;
}