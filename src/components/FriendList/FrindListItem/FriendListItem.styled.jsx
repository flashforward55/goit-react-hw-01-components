import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px 15px;

  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #ecf1f4;

  :not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const FriendsStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${({ isOnline }) => (isOnline ? '#02ad2d' : '#c90202')};
`;

export const FriendsAvatar = styled.img`
  border-radius: 4px;
  background-color: #ecf1f4;
`;

export const FriendsName = styled.p`
  font-weight: 500;
`;
