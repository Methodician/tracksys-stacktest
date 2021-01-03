export interface ClientI {
    id?: string;
    isActive: boolean;
    name: string;
    formalName: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zipCode: string;
}