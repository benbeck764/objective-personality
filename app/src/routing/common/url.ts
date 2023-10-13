import { AppRoutes, RouteName } from './routes';
import { getQueryParamsString } from './routing-helpers';

export const getSearchUrl = (queryStringParams: {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
}): string => {
  const params = [];
  if (queryStringParams.filter)
    params.push(['filter', queryStringParams.filter]);
  if (typeof queryStringParams.pageNumber !== 'undefined')
    params.push(['page', queryStringParams.pageNumber.toString()]);
  if (queryStringParams.pageSize)
    params.push(['size', queryStringParams.pageSize.toString()]);
  return `${AppRoutes[RouteName.Search].path}${getQueryParamsString(params)}`;
};
