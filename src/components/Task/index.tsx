import { useContext, useEffect, useState } from "react";
import { taskContext } from "../../contexts/TaskContext";
import { ITask } from "../../database/database";
import { PrincipalTask } from "./styles";

interface ITaskProps {
    task: ITask;
    index: number;
}

const Task = ({ task, index }: ITaskProps) => {

    const { actualTaskIndex, lastTaskIndex } = useContext(taskContext);
    const [isVisible, setIsVisible] = useState(index === actualTaskIndex);

    useEffect(() => {
        setIsVisible(index === actualTaskIndex);
    }, [actualTaskIndex]);

    return (
        <PrincipalTask index={index} isVisible={isVisible} actualTaskIndex={actualTaskIndex} lastTaskIndex={lastTaskIndex}>
            <div>
                <h2>{task.title}</h2>
                <ul>
                    {
                        task.quests.map((quest, index) => {
                            return <li key={index}>- {quest.title}</li>;
                        })
                    }
                </ul>
            </div>
        </PrincipalTask>
    )
}

export default Task;