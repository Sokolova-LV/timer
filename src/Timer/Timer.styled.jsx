import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 500px 16px;
    background-color: ${({ isTimerFinished }) => (isTimerFinished ? '#E9E8D6' : '#E4E8EB')};

    @media screen and (min-width: 480px) {
        padding: 500px 50px;
    }
    
    @media screen and (min-width: 768px) {
        padding: 500px 200px;
    }
`;

export const Title = styled.h1`
    color: #081E58;
    text-align: center;
`;

export const Wrap = styled.div`
    text-align: center;
`;

export const Input = styled.input`
    width: 50px;
    height: 50px;
    font-size: 40px;
    color: #081E58;
    border: none;
    background-color: ${({isTimerFinished}) => (isTimerFinished ? '#E9E8D6' : '#E4E8EB')};
    appearance: textfield;
    text-align: center;

    &:hover {
        cursor: pointer;
        background-color: #C9DBF5;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
    -webkit-appearance: none; 
    margin: 0; 
}
`;

export const Span = styled.span`
    font-size: 50px;
`;

export const Block = styled.div`
    margin-top: 40px;
    text-align: center;
    display: block;
`;

export const Btn = styled.button`
    margin-right: 10px;
    font-size: 18px;
    padding: 8px;
    background-color: #E9E8D6;
    color: #081E58;
    border: 1px dotted #081E58;
    border-radius: 10px;

    @media screen and (min-width: 480px) {
        margin-right: 20px;
        font-size: 20px;
    }

    &:hover {
        cursor: pointer;
        background-color: #081E58;
        color: #C9DBF5;
    }

    &:first-child {
        background-color: #C9DBF5;

        &:hover {
            background-color: #081E58;
        }
    }

    &:last-child {
        margin-right: 0;
        background-color: #E4E8EB;

        &:hover {
            background-color: #081E58;
        }
    }
`;



