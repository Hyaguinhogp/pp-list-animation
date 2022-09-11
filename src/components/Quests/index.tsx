import { useContext } from "react";
import { questContext } from "../../contexts/QuestContext";
import { taskContext } from "../../contexts/TaskContext";
import Quest from "../Quest";
import { getColors } from "../Task/colorsData";
import { QuestsContainer, QuestsContent } from "./styles";

const Quests = () => {

    const { tasks, previousTask, nextTask, actualTaskIndex } = useContext(taskContext);
    const { quests, actualQuest, actualQuestIndex, setActualQuestIndex } = useContext(questContext);

    const handleQuestClick = (index: number) => {
        setActualQuestIndex(index);
    }
    return (
        <>
            <QuestsContainer>
                <QuestsContent height={(quests.length * 60) + 150}>
                    {
                        quests.map((quest, index) => {
                            return <Quest
                                        key={index}
                                        quest={quest}
                                        index={index}
                                        bColor={getColors()[actualTaskIndex].secondaries[index]}
                                        isVisible={index === actualQuestIndex}
                                        onClick={handleQuestClick}
                                    />
                        })
                    }
                </QuestsContent>
            </QuestsContainer>
        </>
    )
}

export default Quests;