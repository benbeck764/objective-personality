'use client';
import { Typography, Box } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  AppGridDataRequest,
  AppGridData,
  AppGridProps,
  AppGrid,
} from '@benbeck764/react-components-grid';
import { OPSTypedPerson } from '@/_models/ops-typed-people.models';
import { createCardViewDefinitions } from './TypedPeopleGrid.card';
import TypedPeopleGridHeader from './components/TypedPeopleGridHeader';

type PoemsGridProps = {
  data: OPSTypedPerson[] | undefined;
  loading: boolean;
  pagination?: boolean;
  sortable?: boolean;
  //sortBy?: TypedPersonSearchSortByType
  filterable?: boolean;
  filterText?: string;
  //onDataRequested: (dataRequest: AppGridDataRequest) => void;
};

const TypedPeopleGrid: FC<PoemsGridProps> = (props: PoemsGridProps) => {
  const {
    data,
    loading,
    sortable,
    //sortBy,
    filterable,
    filterText,
    //onDataRequested,
  } = props;

  const [filterInputContainer, setFilterInputContainer] =
    useState<HTMLElement | null>(null);
  const [sortInputContainer, setSortInputContainer] =
    useState<HTMLElement | null>(null);
  const filterInputContainerRef = useCallback((element: HTMLElement | null) => {
    setFilterInputContainer(element);
  }, []);
  const sortInputContainerRef = useCallback((element: HTMLElement | null) => {
    setSortInputContainer(element);
  }, []);

  //   const sortItems: SelectItem<TypedPersonSearchSortByType>[] = [
  //     {
  //       value: TypedPersonSearchSortByType.TITLE_ASC.toString(),
  //       label: 'Title (A-Z)',
  //       item: TypedPersonSearchSortByType.TITLE_ASC,
  //     },
  //     {
  //       value: TypedPersonSearchSortByType.TITLE_DESC.toString(),
  //       label: 'Title (Z-A)',
  //       item: TypedPersonSearchSortByType.TITLE_DESC,
  //     },
  //   ];

  const gridData: AppGridData<OPSTypedPerson> = {
    pages:
      !data || loading
        ? [
            {
              items: [],
              pageIndex: 0,
              pageSize: 12,
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
    //sortBy: sortBy,
    filterText: filterText,
    placeholderFilterText: 'Search...',
  };

  const gridProps: AppGridProps<OPSTypedPerson> = {
    data: gridData,
    cardView: createCardViewDefinitions(),
    displayMode: 'card',
    cursorStyle: 'pointer',
    componentContainers: {
      ...(sortable && { sortInputContainer: sortInputContainer }),
      ...(filterable && { filterInputContainer: filterInputContainer }),
    },
    //sortItems: sortItems,
    // defaultSortItem: sortItems.find(
    //   (si: SelectItem<number>) =>
    //     si.item === TypedPersonSearchSortByType.TITLE_DESC
    // ),
    filterInputSx: { width: { xs: '100%', lg: 288 } },
    filterInputIcon: <SearchIcon color="primary" sx={{ ml: 1 }} />,
    sortInputSx: { width: { xs: '100%', lg: 288 } },
    //onDataRequested: onDataRequested,
    //onItemClicked: onPoemSelected,
    noItemsMessage: (
      <Typography variant="paragraph">No results found.</Typography>
    ),
  };
  return (
    <Box sx={{ mt: 2 }}>
      <TypedPeopleGridHeader
        filterInputContainerRef={filterInputContainerRef}
        //sortInputContainerRef={sortInputContainerRef}
      />
      <AppGrid {...gridProps} />
    </Box>
  );
};

export default TypedPeopleGrid;
