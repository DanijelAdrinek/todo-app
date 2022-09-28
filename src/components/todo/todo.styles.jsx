import styled from "styled-components";

const todoHeight = 55;
const borderWidth = 1;

export const TodoStyled = styled.li`
    width: 100%;
    min-height: ${todoHeight}px;
    max-height: max-content;
    display: flex;
    justify-content: space-between;

    font-size: 18px;
    border: ${borderWidth}px solid rgba(155,155,155, 0.3);
    user-select: none;
    transition: all 0.3s ease-in-out;
    max-width: 100%;
    word-wrap: break-word;

    &:nth-child(odd) {
        background-color: #f9f9f9;
    };

    &:hover {
        cursor: pointer;
        background-color: #ddd;
    }
`;

export const TodoText = styled.p`
    width: 100%;
    display: flex;
    align-items: center;
    word-wrap: break-word;
    word-break: break-all;
    margin: 0;
    padding-left: 25px;
`;

export const TodoStatus = styled.span`
    display: flex;
    align-items: center;
    margin-left: 6px;
    font-size: 12px;
    font-style: italic;
    min-width: max-content;

    &::before {
        content: '-';
    }
`;

export const RemoveTodo = styled.div`
    width: ${todoHeight - borderWidth*2}px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    &:hover {
        background-color: red;
        cursor: pointer;
        color: white;
    };
`;