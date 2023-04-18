export interface Corral {
    id?: number;
    name: string;
    coordinates?: string;
    dimentions?: string;
    left?: Corral;
    right?: Corral;
    observation?: string;
    createdAt:Date;
    updatedAt:Date;
}