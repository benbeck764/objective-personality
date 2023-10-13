import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import {
  AppGrid,
  AppGridData,
  AppGridDataRequest,
  AppGridProps,
} from '@benbeck764/react-components-grid';
import { OPSTypedPerson } from '@/_models/ops-typed-people.models';
import { createCardViewDefinitions } from './TypedPeopleGrid.card';

type TypedPeopleGridProps = {
  data: OPSTypedPerson[] | undefined;
  loading: boolean;
  pagination?: boolean;
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
              items: data,
              pageIndex: 0,
              pageSize: data.length,
              isLoading: false,
            },
          ],
    totalItemCount: data?.length ?? 0,
    totalPageCount: 1,
    pagingMode: 'none',
  };

  const gridProps: AppGridProps<OPSTypedPerson> = {
    data: gridData,
    cardView: createCardViewDefinitions(),
    displayMode: 'card',
    cursorStyle: 'pointer',
    onDataRequested: onDataRequested,
    //onItemClicked: onPersonSelected,
    noItemsMessage: (
      <Typography variant="paragraph">No results found.</Typography>
    ),
  };

  return (
    <Box sx={{ mt: 2, width: '100%' }}>
      <AppGrid {...gridProps} />
    </Box>
  );
};

export default TypedPeopleGrid;
