import { ReactNode } from "react";
import { QuestProvider } from "../QuestContext";
import { TaskProvider } from "../TaskContext";

interface IProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <TaskProvider>
            <QuestProvider>
                {children}
            </QuestProvider>
        </TaskProvider>
    )
}

export default Providers;