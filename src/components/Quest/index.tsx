import { MotionConfig } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { questContext } from "../../contexts/QuestContext";
import { taskContext } from "../../contexts/TaskContext";
import { IQuest } from "../../database/database";
import { QuestContent, QuestDescriptionContainer, TitleContainer } from "./styles";

export interface IQuestProps {
    quest: IQuest;
    index: number;
    bColor: string;
    isVisible: boolean;
    onClick: (index: number) => void;
}

const Quest = ({ quest, index, bColor, isVisible, onClick }: IQuestProps) => {

    const { actualTaskIndex } = useContext(taskContext);
    const { quests } = useContext(questContext);
    const [animation, setAnimation] = useState('IndividualQuestAnimation');

    function doAnimation() {
        setAnimation('IndividualQuestAnimation');
        setTimeout(() => {
            setAnimation('none');
        }, 500 + ((quests.length - 1) * 200));
    }

    useEffect(() => {
        doAnimation();
    }, [actualTaskIndex])

    return (
        <QuestContent bColor={bColor} index={index} animation={animation} onClick={() => onClick(index)}>
            <TitleContainer>
                <h2>{quest.title}</h2>
            </TitleContainer>
            <QuestDescriptionContainer isVisible={isVisible}>
                <h3>{quest.description}</h3>
            </QuestDescriptionContainer>
        </QuestContent>
    );
}

export default Quest;