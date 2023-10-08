import { FC, Ref } from 'react';
import { Box, Stack } from '@mui/material';

export type PoemsGridHeaderProps = {
  filterInputContainerRef?: Ref<HTMLElement | null>;
  sortInputContainerRef?: Ref<HTMLElement | null>;
};

const TypedPeopleGridHeader: FC<PoemsGridHeaderProps> = (
  props: PoemsGridHeaderProps
) => {
  const { filterInputContainerRef, sortInputContainerRef } = props;

  return (
    <Box width="100%" mb={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        width="100%"
      >
        <Stack
          gap={1}
          width="100%"
          sx={{
            alignItems: { lg: 'flex-end' },
            flexDirection: { xs: 'column', lg: 'row-reverse' },
          }}
        >
          <Box ref={filterInputContainerRef} />
          <Box ref={sortInputContainerRef} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default TypedPeopleGridHeader;
