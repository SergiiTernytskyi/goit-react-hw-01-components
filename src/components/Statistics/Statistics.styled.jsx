import styled from 'styled-components';

import { getStatisticsItems } from '../../utils';

export const StatisticsSection = styled.section`
  width: 300px;
  box-shadow: ${props => props.theme.shadows.first};
`;

export const Title = styled.h2`
  margin: ${props => props.theme.space[0]};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.xl}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.white};
`;

export const StatsList = styled.ul`
  margin: ${props => props.theme.space[0]};
  padding: ${props => props.theme.space[0]};
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
  flex-basis: calc(100% / ${getStatisticsItems});
  height: 68px;

  color: ${props => props.theme.colors.white};
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
`;

export const Percentage = styled.span`
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
`;
