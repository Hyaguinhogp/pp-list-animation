import { createContext, ReactNode, useEffect, useState } from "react";
import { data, ITask } from '../../database/database'

interface ITaskProviderData {
    tasks: ITask[];
    actualTask: ITask;
    actualTaskIndex: number;
    lastTaskIndex: number;
    previousTask: () => void;
    nextTask: () => void;
}

interface ITaskProviderProps {
    children: ReactNode;
}

export const taskContext = createContext<ITaskProviderData>({} as ITaskProviderData);

export const TaskProvider = ({children}: ITaskProviderProps) => {

    const [tasks, setTasks] = useState(data);
    const [actualTaskIndex, setActualTaskIndex] = useState(0);
    const [lastTaskIndex, setLastTaskIndex] = useState(0);
    const [actualTask, setActualTask] = useState(tasks[actualTaskIndex]);

    const previousTask = () => {
        if(actualTaskIndex > 0) {
            setLastTaskIndex(actualTaskIndex);
            setActualTaskIndex(actualTaskIndex - 1);
        } 
    }

    const nextTask = () => {
        if(actualTaskIndex < tasks.length - 1) {
            setLastTaskIndex(actualTaskIndex);
            setActualTaskIndex(actualTaskIndex + 1);
        }
    }

    useEffect(() => {
        setActualTask(tasks[actualTaskIndex]); 
    }, [actualTaskIndex]);

    return(
        <taskContext.Provider value={{tasks, actualTask, actualTaskIndex, lastTaskIndex, previousTask, nextTask}}>
            {children}
        </taskContext.Provider>
    )
}