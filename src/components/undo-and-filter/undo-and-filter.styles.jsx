import styled from "styled-components";

export const UndoAndFilterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    border-bottom: 2px solid lightgrey;
    background-color: lightgrey;
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
    margin-left: 50px;
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

export const SelectorGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 30px;
`;