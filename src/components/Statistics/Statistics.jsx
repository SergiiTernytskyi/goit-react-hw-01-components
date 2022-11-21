import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils';

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
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem
              key={id}
              style={{
                backgroundColor: getRandomColor(),
              }}
            >
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
