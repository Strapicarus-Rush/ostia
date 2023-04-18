export interface Operation {
    id?:number;
    name: string;
    description?: string;
    period_length?: number;
    repeat: boolean;
    period_start?: Date;
    period_end?: Date;
    createdAt:Date;
    updatedAt:Date;
}