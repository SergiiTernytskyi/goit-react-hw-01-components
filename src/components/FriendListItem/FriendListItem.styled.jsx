import styled from 'styled-components';
import { setBackgroundColor } from '../../utils';

export const FriendCard = styled.li`
  padding-left: 16px;
  display: flex;
  align-items: center;
  width: 300px;
  height: 80px;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Status = styled.span`
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${setBackgroundColor};
`;

export const FriendImage = styled.img`
  margin-right: 20px;
  width: 60px;
  height: auto;
  border-radius: 12px;
  overflow: hidden;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
