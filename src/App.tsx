import './App.css'
import StatusEntry from './components/StatusEntry'

interface StatusApp {
    link: string;
    url: string;
    appName: string;
}

function App() {
    const apps: StatusApp[] = [
        {link: "http://blessmysoul.samcodesthings.com", url: "https://coycafe.ddns.net:2083/test", appName: "Bless My Soul"},
    ]


  return (
    <div className="mx-auto max-w-lg px-4 flex flex-col content-start">
        <div className="mb-5">
            <h1 className="text-4xl">samcodesthings.</h1>
            <h3 className="text-lg">health check app</h3>
        </div>
        <div>
            {apps.map((a) => (
                <StatusEntry link={a.link} url={a.url} appName={a.appName} />
            ))}
        </div>
    </div>
  ) 
}

export default App
