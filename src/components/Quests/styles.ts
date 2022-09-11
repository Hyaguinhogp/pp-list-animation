import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

interface IQuestsContentProps {
    height: number;
}

export const QuestsContainer = styled(DefaultContainer)`
    margin: 15px 0;
`;

export const QuestsContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: ${({height}: IQuestsContentProps) => height}px;
`;

