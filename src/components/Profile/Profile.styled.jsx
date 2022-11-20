import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: ${props => props.theme.space[0]}px;
  width: 300px;
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.first};
`;

export const Description = styled.div`
  margin-bottom: ${props => props.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarImage = styled.img`
  margin-top: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  width: 200px;
  height: auto;
  display: block;

  border-radius: ${props => props.theme.radii.round};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.second};
`;

export const Name = styled.p`
  margin: ${props => props.theme.space[0]};
  margin-bottom: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.xl}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
`;

export const Tag = styled.p`
  margin: ${props => props.theme.space[0]};
  margin-bottom: ${props => props.theme.space[4]}px;
  color: ${props => props.theme.colors.primaryText};
`;

export const Location = styled.p`
  margin: ${props => props.theme.space[0]};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primaryText};
`;

export const StatsList = styled.ul`
  margin: ${props => props.theme.space[0]};
  padding: ${props => props.theme.space[0]};
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const StatsItem = styled.span`
  margin: ${props => props.theme.space[0]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc(100% / 3);
  height: 80px;
  gap: ${props => props.theme.space[2]}px;
  border: solid ${props => props.theme.colors.primary} 1px;
  background-color: ${props => props.theme.colors.secondary};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
`;

export const Quantity = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: ${props => props.theme.lineHeights.body};
`;
