import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #333;
  font-size: 40px;
  font-weight: bolder;
`;

export const Row = styled.div`
  flex: 1;
  border: 5px solid green;
  font-size: 50px;
  display: flex;
  flex-direction: row;
`;

export const SideBar = styled.div`
  width: 150px;
  border: 5px solid yellow;
  font-size: 20px;
`;

export const Column = styled.div`
  border: 5px solid pink;
  font-size: 50px;
  flex: 1;

  &:last-child {
    flex: 2;
  }
`;

export const Title = styled.div``;
