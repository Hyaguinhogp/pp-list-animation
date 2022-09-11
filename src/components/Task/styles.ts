import styled from "styled-components";
import { getColors } from "./colorsData";

interface IPrincipalTaskProps {
    isVisible: boolean;
    actualTaskIndex: number;
    lastTaskIndex: number;
    index: number;
}

export const PrincipalTask = styled.div`
    position: relative;
    display: ${({ isVisible }: IPrincipalTaskProps) => isVisible ? 'flex' : 'none'};
    flex-direction: column;
    width: 80%;
    height: 100%;
    padding: 20px;
    border-radius: 5px;
    background-color: ${({ index }: IPrincipalTaskProps) => getColors()[index].principal};
    animation: ${({ actualTaskIndex, lastTaskIndex }: IPrincipalTaskProps) => actualTaskIndex > lastTaskIndex ? 'rightToLeft' : 'leftToRight'};
    animation-duration: 800ms;
    li {
        margin: 10px 0;
        background-color: ${({ index }: IPrincipalTaskProps) => getColors()[index].light};
    }
    div {
        animation: show;
        animation-duration: 800ms;

        @keyframes show {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }

    @keyframes rightToLeft {
        0% {
            left: 30px;
            width: 20px;
            height: 80%;
        }
        100% {
            left: 0;
            width: 80%;
            height: 100%;
        }
    }

    @keyframes leftToRight {
        0% {
            right: 30px;
            width: 20px;
            height: 80%;
        }
        100% {
            right: 0;
            width: 80%;
            height: 100%;
        }
    }
`;