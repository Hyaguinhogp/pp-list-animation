import { useContext, useEffect, useState } from "react";
import { taskContext } from "../../contexts/TaskContext";
import { Content } from "./styles";

interface IFakeTaskProps {
    bColor: string;
    anim: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const FakeTask = ({bColor, anim, onClick}: IFakeTaskProps) => {

    const [animation, setAnimation] = useState(anim);
    const {actualTaskIndex, lastTaskIndex} = useContext(taskContext)

    const doAnimation = () => {
        setAnimation(anim);
        setTimeout(() => {
            setAnimation('none');
        }, 500)
    }

    useEffect(() => {
        if(anim === 'toLeft' && actualTaskIndex > lastTaskIndex) {
            doAnimation();
        }
        if(anim === 'toRight' && actualTaskIndex < lastTaskIndex) {
            doAnimation();
        }
        
    }, [actualTaskIndex])

    return (
        <Content onClick={onClick} bColor={bColor} anim={animation} />
    );
}

export default FakeTask;