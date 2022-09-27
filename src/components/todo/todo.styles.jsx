import styled from "styled-components";

const todoHeight = 55;
const borderWidth = 1;

export const TodoStyled = styled.li`
    width: 100%;
    height: ${todoHeight}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    font-size: 18px;
    border: ${borderWidth}px solid rgba(155,155,155, 0.3);
    user-select: none;
    transition: all 0.3s ease-in-out;

    &:nth-child(odd) {
        background-color: #f9f9f9;
    };

    &:hover {
        cursor: pointer;
        background-color: #ddd;
    }
    `;

export const RemoveTodo = styled.div`
    width: ${todoHeight - borderWidth*2}px;
    height: 100%;
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