import { Animal } from "./animal";
import { Corral } from "./corral";
import { Grassland } from "./grassland";

export interface Labor {
    id?: number;
    corral?: Corral;
    grassland?: Grassland;
    animal?: Animal;
    description: string;
    createdAt:Date;
    updatedAt:Date;
}