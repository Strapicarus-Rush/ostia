import { Animal } from "./animal";
import { Operation } from "./operation";

export interface Breteado {
    id?: number;
    animal: Animal;
    operation: Operation;
    date: Date;
    period?: string;
    createdAt:Date;
    updatedAt:Date;
}