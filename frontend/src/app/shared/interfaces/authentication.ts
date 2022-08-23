export interface User {
    username: string;
    uuid: string;
    isAuthenticated?: boolean;
    isVerified: boolean;

    [key: string]: any;
}
