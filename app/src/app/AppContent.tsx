import { FC, PropsWithChildren } from 'react';
import {
  StyledStickyHeaderContainer,
  StyledPageContainer,
  StyledPageContent,
} from './App.styles';
import { Header } from './site/Header/Header';
import Stack from '@mui/material/Stack';

const AppContent: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <Stack>
      <StyledStickyHeaderContainer>
        <Header />
      </StyledStickyHeaderContainer>

      <StyledPageContainer
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        wrap="nowrap"
      >
        <StyledPageContent>{children}</StyledPageContent>
      </StyledPageContainer>
    </Stack>
  );
};

export default AppContent;
