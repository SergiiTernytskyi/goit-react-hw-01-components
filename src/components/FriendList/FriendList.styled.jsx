import styled from 'styled-components';

export const FriendsBoard = styled.ul`
  list-style: none;
  width: 300px;
  margin: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[0]}px;
`;
