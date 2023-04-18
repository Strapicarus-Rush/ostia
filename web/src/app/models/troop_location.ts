import { Animal } from "./animal";
import { Corral } from "./corral";
import { Grassland } from "./grassland";
import { Troop } from "./troop";

export interface Weight {
    id?: number;
    name?: string;
    troop: Troop;
    animal: Animal;
    corral?: Corral;
    grassland?: Grassland;
    createdAt:Date;
    updatedAt:Date;
}