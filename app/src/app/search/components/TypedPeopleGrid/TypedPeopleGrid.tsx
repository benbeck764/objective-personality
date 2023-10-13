'use client';
import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import {
  AppGrid,
  AppGridData,
  AppGridDataRequest,
  AppGridProps,
} from '@benbeck764/react-components-grid';
import {
  OPSTypedPerson,
  OpsTypedPersonSearchResponseDto,
} from '@/_models/ops-typed-people.models';
import { createCardViewDefinitions } from './TypedPeopleGrid.card';

type TypedPeopleGridProps = {
  data: OpsTypedPersonSearchResponseDto | undefined;
  loading: boolean;
  onDataRequested: (dataRequest: AppGridDataRequest) => void;
};

const TypedPeopleGrid: FC<TypedPeopleGridProps> = (
  props: TypedPeopleGridProps
) => {
  const { data, loading, onDataRequested } = props;

  const gridData: AppGridData<OPSTypedPerson> = {
    pages:
      !data || loading
        ? [
            {
              items: [],
              pageIndex: 0,
              pageSize: 18,
              isLoading: true,
            },
          ]
        : [
            {
              items: data.items,
              pageIndex: data.currentPageNumber,
              pageSize: data.pageSize,
              isLoading: false,
            },
          ],
    totalItemCount: data?.totalItems ?? 0,
    totalPageCount: data?.numberOfPages ?? 0,
    pagingMode: 'pagination',
  };

  const gridProps: AppGridProps<OPSTypedPerson> = {
    data: gridData,
    cardView: createCardViewDefinitions(),
    displayMode: 'card',
    cursorStyle: 'pointer',
    onDataRequested: onDataRequested,
    //onItemClicked: onPersonSelected,
    noItemsMessage: (
      <Box py={4}>
        <Typography variant="paragraph">No results found.</Typography>
      </Box>
    ),
  };

  return (
    <Box sx={{ mt: 2, width: '100%' }}>
      <AppGrid {...gridProps} />
    </Box>
  );
};

export default TypedPeopleGrid;
