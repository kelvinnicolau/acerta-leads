import styled from 'styled-components';

export const HomeContainer = styled.div`
  align-items: center;
  justify-content: center;
  padding: 0 60px;
  margin-bottom: 60px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  color: #252433;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  background-color: #FFF;
  padding: 24px;
  border-radius: 12px;
`;

export const StyledListItem = styled.li`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  text-align: left;
  color: #B9C2CB;
  list-style: none;
  padding: 24px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  
  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
    width: 5% !important;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    color: #007BFF;
  }
`;

export const TitlesTable = styled.div`
   background-color: #F4F5F7;
   padding: 8px 24px;
   border-radius: 4px 4px 0px 0px;

    div {
      display: flex;
      justify-content: space-around;
      width: 80%;
    }
    
    p {
      padding: 0;
      margin: 0;
    }
`;

