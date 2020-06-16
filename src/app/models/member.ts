import { Status } from "./status";

export interface Member {
    id: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    team: string;
    status: Status;
}
