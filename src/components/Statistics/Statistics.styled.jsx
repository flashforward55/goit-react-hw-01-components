import styled from '@emotion/styled';

export const UploadStatsSection = styled.section`
  padding-top: 15px;
`;

export const SectionTitle = styled.h2`
  padding: 15px 0;

  border-radius: 4px 4px 0 0;
  background-color: #ffffff;

  text-align: center;
  font-size: 20px;
`;

export const UploadStatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 320px;

  border-top: 1px solid #c9c8c8;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const UploadStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  width: calc(100% / 5);

  background-color: ${({ randomBackgroundColor }) =>
    randomBackgroundColor}; /* Добавляем свойство randomBackgroundColor  */

  :first-of-type {
    border-radius: 0 0 0 4px;
  }

  :last-of-type {
    border-radius: 0 0 4px 0;
  }
`;

export const StatsLabel = styled.span`
  font-size: 14px;
`;

export const StatsPercentage = styled.span`
  margin-top: 8px;

  font-size: 14px;
  font-weight: 700;
`;
