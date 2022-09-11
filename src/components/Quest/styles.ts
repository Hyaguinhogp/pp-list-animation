import styled from "styled-components";

interface IQuestContentProps {
    bColor: string;
    index: number;
    animation: string;
}

interface IQuestDescriptionContainerProps {
    isVisible: boolean;
}

export const QuestContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
    border-radius: 5px;
    background-color: ${({bColor}: IQuestContentProps) => bColor};
    animation: ${({animation}: IQuestContentProps) => animation} 500ms;
    animation-fill-mode: both;
    animation-delay: ${({index}: IQuestContentProps) => index * 0.2}s;

    h2 {
        font-weight: 500;
    }

    @keyframes IndividualQuestAnimation {
        0% {
            opacity: 0;
            bottom: 50px;
        }
        100% {
            opacity: 1;
            bottom: 0;
        }
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
`;

export const QuestDescriptionContainer = styled.div`
    display: ${({isVisible}: IQuestDescriptionContainerProps) => isVisible ? 'flex' : 'none'};
    height: 150px;
    padding: 0 15px;
    font-size: 15px;
    animation: descriptionAnimation 500ms;

    @keyframes descriptionAnimation {
        0% {
            height: 0;
        }
        100% {
            height: 150px;
        }
    }
`;