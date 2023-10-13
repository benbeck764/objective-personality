import { AppRoutes, RouteName } from './routes';
import { getQueryParamsString } from './routing-helpers';

export const getSearchUrl = (queryStringParams: {
  filter?: string;
}): string => {
  const params = [];
  if (queryStringParams.filter)
    params.push(['filter', queryStringParams.filter]);
  return `${AppRoutes[RouteName.Search].path}${getQueryParamsString(params)}`;
};
