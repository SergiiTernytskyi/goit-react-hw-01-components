import PropTypes from 'prop-types';

import {
  StatisticsSection,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(item => {
          return (
            <StatsItem key={item.id}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
