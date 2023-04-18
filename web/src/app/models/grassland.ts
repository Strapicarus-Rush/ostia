import { Animal } from "./animal";
import { Breed } from "./breed";

export interface Grassland {
    id?: number;
    name: string;
    description?: string;
    prefered_animal?: Breed;
    grass_type:string;
    createdAt:Date;
    updatedAt:Date;
}