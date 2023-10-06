import { OPSTypedPerson } from '@/_models/ops-typed-people.models';
import { AppGridCardViewDefinitions } from '@benbeck764/react-components-grid';
import { TypedPersonCard } from './components/TypedPersonCard';

export const createCardViewDefinitions =
  (): AppGridCardViewDefinitions<OPSTypedPerson> => ({
    xs: {
      virtualizedProps: {
        enabled: true,
        useWindowScroll: true,
      },
      getContent: function Card(item: OPSTypedPerson) {
        return <TypedPersonCard person={item} />;
      },
      loadingPlaceholder: <TypedPersonCard loadingPlaceholder />,
      columnCount: 1,
    },
    lg: {
      virtualizedProps: {
        enabled: true,
        useWindowScroll: true,
      },
      getContent: function Card(item: OPSTypedPerson) {
        return <TypedPersonCard person={item} />;
      },
      loadingPlaceholder: <TypedPersonCard loadingPlaceholder />,
      columnCount: 2,
    },
    xl: {
      virtualizedProps: {
        enabled: true,
        useWindowScroll: true,
      },
      getContent: function Card(item: OPSTypedPerson) {
        return <TypedPersonCard person={item} />;
      },
      loadingPlaceholder: <TypedPersonCard loadingPlaceholder />,
      columnCount: 6,
    },
  });
