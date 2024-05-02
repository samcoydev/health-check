import { AppServiceStatus } from "./app-service-status";

export type AppStatus = {
    link: string;
    url: string;
    appName: string;
    services?: AppServiceStatus[];
}
