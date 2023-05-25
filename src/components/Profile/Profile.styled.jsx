import styled from '@emotion/styled';

export const Card = styled.div`
  margin: 0 auto;
  width: 320px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #ffffff;
`;

export const DescriptionWrap = styled.div`
  padding: 15px 15px 0 15px;
`;

export const UserAvatar = styled.img`
  margin: 0 auto;
  width: 150px;

  border-radius: 50%;
  background-color: #e7e7e7;
`;

export const UserName = styled.p`
  margin-top: 15px;

  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  margin-top: 8px;

  text-align: center;
  color: #5f5f5f;
`;

export const UserLocation = UserTag.withComponent('p');

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  border-top: 1px solid #c9c8c8;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  width: calc(100% / 3);

  background-color: #e7e7e7;

  :first-of-type {
    border-radius: 0 0 0 4px;
  }

  :last-of-type {
    border-radius: 0 0 4px 0;
  }

  :not(:last-of-type) {
    border-right: 1px solid #c9c8c8;
  }
`;

export const StatsLabel = styled.span`
  font-size: 14px;
`;

export const StatsQuantity = styled.span`
  margin-top: 8px;

  font-size: 14px;
  font-weight: 700;
`;
