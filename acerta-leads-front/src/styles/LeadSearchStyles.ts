import styled from "styled-components";

export const SearchContainer = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Form = styled.div`
  margin-bottom: 20px;
  background-color: #FFFFFF;
  color: #4D4F5C;
  padding: 24px;
  border-radius: 12px;
`;

export const FieldsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  width: 100%;
`;

export const FieldContainer = styled.div`
  flex: 1;
  margin-right: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #FFF;
  padding: 8px 16px 8px 16px;
  border: 1px solid #198CFF;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    border: 1px solid #198CFF;
    background-color: #FFF;
    color: #198CFF;
  }
`;

export const ClearButton = styled(Button)`
  background-color: #FFF;
  border: 1px solid #198CFF;
  color: #198CFF;
  border-radius: 4px;

  &:hover {
    background-color: #198CFF;
    color: #FFF;
  }
`;

export const ResultsContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const ResultItem = styled.div`
  background: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
`;
