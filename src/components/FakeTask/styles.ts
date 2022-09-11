import styled from "styled-components";

interface IContentProps {
    bColor: string;
    anim: string;
}

export const Content = styled.div`
    display: flex;
    width: 20px;
    height: 80%;
    border-radius: 5px;
    background-color: ${({bColor}: IContentProps) => bColor || '#fff'};
    animation: ${({anim}: IContentProps) => anim};
    animation-duration: 500ms;

    @keyframes toLeft {
        0% {
            left: 50%;
            width: 80%;
            height: 100%;
        }
        100% {
            left: 0;
            width: 20px;
            height: 80%;
        }
    }

    @keyframes toRight {
        0% {
            right: 50%;
            width: 80%;
            height: 100%;
        }
        100% {
            right: 0;
            width: 20px;
            height: 80%;
        }
    }
`;