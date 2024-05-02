import "./App.css";
import StatusEntry from "./components/StatusEntry";
import { AppStatus } from "./types/app-status";

function App() {
    const apps: AppStatus[] = [
        {
            link: "http://blessmysoul.samcodesthings.com",
            url: "https://coycafe.ddns.net:2083/test",
            appName: "Bless My Soul",
        },
    ];

    return (
        <div className="mx-auto max-w-lg px-4 flex flex-col content-start">
            <div className="mb-5">
                <h1 className="text-4xl">samcodesthings.</h1>
                <h3 className="text-lg">health check app</h3>
            </div>
            <div>
                {apps.map((status, index) => (
                    <StatusEntry status={status} key={index} />
                ))}
            </div>
        </div>
    );
}

export default App;
