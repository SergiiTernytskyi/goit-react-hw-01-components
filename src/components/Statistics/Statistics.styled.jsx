import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 300px;
`;

export const Title = styled.h2`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: #728697;
  background-color: #fff;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 5);

  color: #fff;
`;

export const Label = styled.span`
  font-size: 18px;
`;

export const Percentage = styled.span`
  font-size: 22px;
`;
