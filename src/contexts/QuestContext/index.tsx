import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { data, IQuest } from '../../database/database'
import { taskContext } from "../TaskContext";

interface IQuestProviderData {
    quests: IQuest[];
    actualQuest: IQuest;
    actualQuestIndex: number;
    setActualQuestIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface IQuestProviderProps {
    children: ReactNode;
}

export const questContext = createContext<IQuestProviderData>({} as IQuestProviderData);

export const QuestProvider = ({children}: IQuestProviderProps) => {

    const {actualTaskIndex} = useContext(taskContext);
    const [quests, setQuests] = useState(data[actualTaskIndex].quests);
    const [actualQuestIndex, setActualQuestIndex] = useState(0);
    const [actualQuest, setActualQuest] = useState(quests[actualQuestIndex]);

    useEffect(() => {
        setQuests(data[actualTaskIndex].quests);
        setActualQuestIndex(0);
    }, [actualTaskIndex])

    useEffect(() => {
        setActualQuest(quests[actualQuestIndex]);
    }, [actualQuestIndex]);

    return(
        <questContext.Provider value={{quests, actualQuest, actualQuestIndex, setActualQuestIndex}}>
            {children}
        </questContext.Provider>
    )
}