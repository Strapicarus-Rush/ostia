import { Corral } from './corral'
import { Animal } from './animal'
import { Operation } from './operation'

export interface Animal_location {
    id?: number;
    corral: Corral;
    animal: Animal;
    date: Date;
    operation?: Operation;
    createdAt:Date;
    updatedAt:Date;
}