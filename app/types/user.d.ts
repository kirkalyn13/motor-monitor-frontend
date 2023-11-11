export type User = {
    email: string;
    firstName: string;
    lastName: string;
    company?: string;
    motors: Motor[];
    alarms: Alarm[];
}

export type UserData = {
    id: string;
    user: User;
}

export type Alarm = {
    alarm: string,
    status: string
}