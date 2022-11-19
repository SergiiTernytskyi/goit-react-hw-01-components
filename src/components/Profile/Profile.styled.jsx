import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 0;
  width: 300px;
  background-color: #fdfdfd;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Description = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarImage = styled.img`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 200px;
  height: auto;
  display: block;

  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Name = styled.p`
  margin: 0;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin: 0;
  margin-bottom: 16px;
  color: #728697;
`;

export const Location = styled.p`
  margin: 0;
  font-weight: 500;
  color: #728697;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
`;

export const StatsItem = styled.span`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 33%;
  height: 80px;
  border: solid #b1c8dd 1px;
  background-color: #d0deeb;
`;

export const Label = styled.span`
  color: #728697;
  font-size: 16px;
`;

export const Quantity = styled.span`
  color: #728697;
  font-size: 18px;
  font-weight: 500;
`;
