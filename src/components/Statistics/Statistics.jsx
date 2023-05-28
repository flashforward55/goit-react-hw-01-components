import PropTypes from 'prop-types';
import {
  SectionTitle,
  StatsLabel,
  StatsPercentage,
  UploadStatsItem,
  UploadStatsList,
  UploadStatsSection,
} from './Statistics.styled';
import { randomColor } from './RandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <UploadStatsSection>
      {title ? <SectionTitle>{title}</SectionTitle> : null}

      <UploadStatsList>
        {stats.map(({ id, label, percentage }) => (
          <UploadStatsItem key={id} randomBC={randomColor()}>
            <StatsLabel>{label}</StatsLabel>
            <StatsPercentage>{percentage}%</StatsPercentage>
          </UploadStatsItem>
        ))}
      </UploadStatsList>
    </UploadStatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
