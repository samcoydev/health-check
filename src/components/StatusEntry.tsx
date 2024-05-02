import { useEffect, useState } from "react";
import { AppStatus } from "../types/app-status";
import { Status } from "../types/status";
import LoadingSpinner from "./icons/LoadingSpinner";
import Check from "./icons/Check";
import Cancel from "./icons/Cancel";

interface StatusEntryProps {
    status: AppStatus
}


const StatusEntry = (props: StatusEntryProps) => {
    const [status, setStatus] = useState<Status>("Pending");

    useEffect(() => {
        getStatus();
    }, []);

    const getStatus = async () => {
        fetch(props.status.url)
            .then(response => {
                if (!response.ok) setStatus("Down");
                else setStatus("Good");
            })
            .catch(() => setStatus("Down"));
    };

    const getColor = () => {
        if (status === "Good") return "ring-green-500";
        if (status === "Pending") return "ring-yellow-500";
        return "ring-red-500";
    };

    const Icon = () => {
        if (status === "Pending") return <LoadingSpinner />

        if (status === "Good") return <Check />

        return <Cancel />
    }

    return (
        <div className={`flex flex-row justify-between ring-2 px-3 py-3 rounded-md mb-3 ${getColor()} transition-colors duration-5000 ease-in-out`}>
            <div className="flex">
                <Icon />
                <a href={props.status.link} className={"ms-2 border-b-2 border-dashed hover:border-solid"}>{props.status.appName}</a>
            </div>
            <p><strong>{status}</strong></p>
        </div>
    );
};

export default StatusEntry;
