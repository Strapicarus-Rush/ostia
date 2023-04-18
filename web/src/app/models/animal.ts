import { Animal_location } from './animal_location'
import { Sex } from './sex'
import { Breed } from './breed'
import { Category } from './category'
import { Weight } from './weight'
import { Supplier } from './supplier'

export interface Animal {
    id?: string;
    sex: Sex;
    ident: string;
    birth?: Date;
    breed: Breed;
    category: Category;
    locations?: Animal_location[];
    weights?: Weight[];
    supplier: Supplier;
    offspring?: Animal[];
    createdAt:Date;
    updatedAt:Date;
}







