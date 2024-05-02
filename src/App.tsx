import "./App.css";
import StatusEntry from "./components/StatusEntry";
import apps from "./apps-list";

function App() {
    const activeApps = apps.filter(a => !a.inProgress);
    const inProgressApps = apps.filter(a => a.inProgress);

    return (
        <div className="mx-auto max-w-lg px-4 flex flex-col content-start">
            <div className="mb-5">
                <h1 className="text-4xl">samcodesthings.</h1>
                <h3 className="text-lg">health check app</h3>
            </div>
            <div>
                {activeApps.map((status, index) => (
                    <StatusEntry status={status} key={index} />
                ))}
            </div>
            <div className="my-5">
                <h5 className="ml-1 text-start">Inactive Apps</h5>
                <div className="py-3 my-1 border-t-2 border-solid">
                    {inProgressApps.map((status, index) => (
                        <StatusEntry status={status} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
