'use client';
import { FC } from 'react';
import {
  OPSTypedPersonExtended,
  OpsTypedPersonSearchResponseDto,
} from '@/_models/ops-typed-people.models';
import { AppGridDataRequest } from '@benbeck764/react-components-grid';
import { useRouter } from 'next/navigation';
import TypedPeopleGrid from './TypedPeopleGrid/TypedPeopleGrid';
import { getSearchUrl } from '@/routing/common/url';
import { AppRoutes, RouteName } from '@/routing';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TypographySkeleton } from '@benbeck764/react-components/common';
import Grid from '@mui/material/Grid';

type TypedPeopleSearchResultsProps = {
  data: OpsTypedPersonSearchResponseDto | undefined;
  loading: boolean;
  filterText?: string;
};

const TypedPeopleSearchResults: FC<TypedPeopleSearchResultsProps> = (
  props: TypedPeopleSearchResultsProps
) => {
  const { data, loading, filterText } = props;
  const router = useRouter();

  const handleDataRequest = (request: AppGridDataRequest): void => {
    const url = getSearchUrl({
      filter: filterText,
      pageNumber: request.pageNumber,
      pageSize: request.pageSize,
    });
    router.push(url);
  };

  const handlePersonSelected = (person: OPSTypedPersonExtended): void => {
    router.push(`${AppRoutes[RouteName.Search].path}/${encodeURIComponent(person.Name)}`);
  };

  if (loading) {
    return (
      <Stack gap={1} my={1}>
        <TypographySkeleton variant="paragraph" charCount={15} />
        <Stack mt={4}>
          <Grid container px={2}>
            <Grid item xs={4}>
              <Stack direction="row" alignItems="center" justifyContent="flex-start">
                <TypographySkeleton variant="paragraph" charCount={16} />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <TypographySkeleton variant="paragraph" charCount={28} />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" alignItems="center" justifyContent="flex-end">
                <TypographySkeleton variant="paragraph" charCount={20} />
              </Stack>
            </Grid>
          </Grid>
          <TypedPeopleGrid data={undefined} loading={true} />
          <Grid container px={2}>
            <Grid item xs={4}>
              <Stack direction="row" alignItems="center" justifyContent="flex-start">
                <TypographySkeleton variant="paragraph" charCount={16} />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <TypographySkeleton variant="paragraph" charCount={28} />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" alignItems="center" justifyContent="flex-end">
                <TypographySkeleton variant="paragraph" charCount={20} />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    );
  } else {
    return (
      <Stack gap={1} my={1}>
        {!loading && (
          <Typography variant="paragraph">
            Found {data?.totalItems} {data?.totalItems === 1 ? 'result' : 'results'}.
          </Typography>
        )}
        <TypedPeopleGrid
          data={data}
          loading={loading}
          onDataRequested={handleDataRequest}
          onPersonSelected={handlePersonSelected}
        />
      </Stack>
    );
  }
};

export default TypedPeopleSearchResults;
