export enum MaritalStatus { soltero, casado, divorciado, viudo }

export interface Itestimonial {
    url: string,
    name: string,
    description?: string,
    active?: null | boolean | string,
    maritalStatus?: MaritalStatus,
}
