import { AppStatus } from "./types/app-status";

const apps: AppStatus[] = [
    {
        link: "http://blessmysoul.samcodesthings.com",
        url: "https://coycafe.ddns.net:2083/test",
        appName: "Bless My Soul",
    },
    {
        link: "http://pesticide.samcodesthings.com",
        url: "https://coycafe.ddns.net:2083/test",
        appName: "Pesticide",
    },
    {
        link: "https://samcodesthings.com/index.php/2023/04/02/shelf-life-my-process-behind-designing-the-user-experience/",
        url: "https://coycafe.ddns.net:2083/test",
        appName: "Shelf Life",
        inProgress: true,
        services: [
            {
                serviceName: "Households",
                reason: "Not Implemented",
                statusCode: "404"
            },
            {
                serviceName: "Shopping List",
                reason: "Non Functional",
                statusCode: "500",
            }
        ]
    }
];

export default apps;
