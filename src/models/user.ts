export interface IUser {
    id: string;
    name: string;
    created: Date;
    lastLogin: Date;
    groups: string[];
}
