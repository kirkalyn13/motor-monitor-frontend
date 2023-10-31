export type User = {
    email: string;
    firstName: string;
    lastName: string;
    company?: string;
    motors: Motor[];
    alarms: string[];
}