import styled from 'styled-components';

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${props => props.theme.space[6]}px;
  list-style: none;
  width: 300px;
`;

export const FriendsBoard = styled.li`
 :not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;`;
