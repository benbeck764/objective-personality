import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';

export const useSearchFilter = () => {
  return useQueryState('filter', parseAsString.withDefault('').withOptions({ shallow: false }));
};

export const useSearchPage = () => {
  return useQueryState('page', parseAsInteger.withDefault(0).withOptions({ shallow: false }));
};

export const useSearchPageSize = () => {
  return useQueryState('size', parseAsInteger.withDefault(25).withOptions({ shallow: false }));
};
