import styled from "styled-components";

const imageWidthAndHeight = 30;

export const Form = styled.form`
    padding-top: 45px;
    padding-bottom: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: red;
`;

export const TextInputAndUndoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const TextInput = styled.input`
    width: calc(150px + 40%);
    max-width: 90%;
    padding: 7px;
    font-size: 16px;
`;

export const Tooltip = styled.span`
    visibility: hidden;
    opacity: 0;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -60px;
    transition: all 0.3s ease-in-out;

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }
`;

export const Undo = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    width: 33px;
    height: 33px;
    margin-left: 10px;
    border-width: 2px;

    &:hover {
        cursor: pointer;
    }

    &:hover ${Tooltip} {
        visibility: visible;
        opacity: 1;
    }
`;

export const UndoImage = styled.img`
    width: 22px;
    height: 22px;
`;

export const SubmitInput = styled.input`
    display: block;
    width: max-content;
    padding: 13px 26px;
    color: white;
    background-color: #007bff;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 5px;

    &:hover {
        background-color: #0069dd;
        cursor: pointer;
    };
`;