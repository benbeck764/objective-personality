import { AppRoutes, RouteName } from './routes';
import { getQueryParamsString } from './routing-helpers';

export const getSearchUrl = (queryStringParams: { tag?: string }): string => {
  const params = [];
  if (queryStringParams.tag) params.push(['tag', queryStringParams.tag]);
  return `${AppRoutes[RouteName.Search].path}${getQueryParamsString(params)}`;
};
