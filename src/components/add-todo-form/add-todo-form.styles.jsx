import styled from "styled-components";

export const Form = styled.form`
    padding-top: 45px;
    padding-bottom: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: red;
`;

export const TextInput = styled.input`
    width: calc(150px + 40%);
    max-width: 90%;
    padding: 7px;
    font-size: 16px;
    margin-bottom: 20px;
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