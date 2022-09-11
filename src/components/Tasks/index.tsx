import { useContext } from "react";
import { taskContext } from "../../contexts/TaskContext";
import FakeTask from "../FakeTask";
import Task from "../Task";
import { getColors } from "../Task/colorsData";
import { TasksContainer, TasksContent } from "./styles";

const Tasks = () => {
    const { tasks, previousTask, nextTask, actualTaskIndex } = useContext(taskContext)
    return (
        <>
            <TasksContainer>
                <TasksContent>
                    <FakeTask
                        anim='toLeft'
                        bColor={actualTaskIndex > 0 ? getColors()[actualTaskIndex - 1].principal : ''}
                        onClick={() => previousTask()}
                    />
                    {
                        tasks.map((task, index) => {
                            return <Task task={task} index={index} key={index} />
                        })
                    }
                    <FakeTask
                        anim='toRight'
                        bColor={actualTaskIndex < tasks.length - 1 ? getColors()[actualTaskIndex + 1].principal : ''}
                        onClick={() => nextTask()}
                    />
                </TasksContent>
            </TasksContainer>
        </>
    )
}

export default Tasks;