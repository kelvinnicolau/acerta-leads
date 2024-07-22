import styled from 'styled-components';

export const SectionContact = styled.div`
    width: 100%;
`;

export const SectionNumber = styled.div`
    display: flex;
    place-content: center;
    align-items: center;
    gap: 20px;

    div {
        width: 220px;
        height: 1px;
        background-color: #DCE1E5;
        margin-bottom: 25px;
    }

    span {
        width: 100px;
        display: grid;
        justify-items: center;
        gap: 4px;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.6px;
        text-align: center;
        color: #4D4F5C;

        img {
            width: 40px;
            height: auto;
        }
    }
    
`;

export const SectionTitle = styled.div`
    display: flex;
    gap: 10px;

    img {
        width: 24px;
    }

    h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        text-align: left;
        color: #252433;
    }
    
`;