import styled from 'styled-components';
import { setBackgroundColor } from '../../utils';

export const FriendCard = styled.div`
  padding-left: ${props => props.theme.space[4]}px;
  display: flex;
  align-items: center;
  height: 90px;
  background-color: ${setBackgroundColor}20;
  box-shadow: ${props => props.theme.shadows.first};
  border-radius: ${props => props.theme.radii.normal};
  }
`;

export const Status = styled.span`
  margin-right: ${props => props.theme.space[4]}px;
  width: 24px;
  height: 24px;
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
