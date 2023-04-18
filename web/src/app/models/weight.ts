import { Animal } from './animal'

export interface Weight {
    id?: number;
    animal: Animal;
    date: Date;
    weight: number;
    createdAt:Date;
    updatedAt:Date;
}