export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin: boolean;
}

export type  Program = {
    id?: number;
    name: string;
    description: string;
    weeks: Weeks[];
}

export type Weeks = {
    name: string;
    details: Array<Days>;
}

export type Days = {    
    name: string;
    details: Array<Workouts>;
}

export type Workouts = {    
    name: string;
    details: Array<string>;
}

export interface HelperText {
    error: boolean | null	;
    text: string | null;
  }