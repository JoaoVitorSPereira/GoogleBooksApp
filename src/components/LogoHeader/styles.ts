import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.responsive.value(20)}px
    ${({ theme }) => theme.responsive.value(15)}px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
