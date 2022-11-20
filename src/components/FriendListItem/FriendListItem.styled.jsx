import styled from 'styled-components';
import { setBackgroundColor } from '../../utils';

export const FriendCard = styled.li`
  padding-left: ${props => props.theme.space[5]}px;
  display: flex;
  align-items: center;
  width: 300px;
  height: 80px;

  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.first};

  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`;

export const Status = styled.span`
  margin-right: ${props => props.theme.space[5]}px;
  width: 20px;
  height: 20px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${setBackgroundColor};
`;

export const FriendImage = styled.img`
  margin-right: ${props => props.theme.space[5]}px;
  width: 60px;
  height: auto;
  border-radius: ${props => props.theme.radii.round};
  overflow: hidden;
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;
