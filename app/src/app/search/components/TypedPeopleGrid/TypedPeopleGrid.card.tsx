import { OPSTypedPersonExtended } from '@/_models/ops-typed-people.models';
import { AppGridCardViewDefinitions } from '@benbeck764/react-components-grid';
import { TypedPersonCard } from './components/TypedPersonCard';

export const createCardViewDefinitions =
  (): AppGridCardViewDefinitions<OPSTypedPersonExtended> => ({
    xs: {
      virtualizedProps: {
        enabled: true,
        useWindowScroll: true,
      },
      getContent: function Card(item: OPSTypedPersonExtended) {
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
      getContent: function Card(item: OPSTypedPersonExtended) {
        return <TypedPersonCard person={item} />;
      },
      loadingPlaceholder: <TypedPersonCard loadingPlaceholder />,
      columnCount: 2,
    },
    xl: {
      virtualizedProps: {
        enabled: true,
        useWindowScroll: true,
        //loadingPlaceholderOnScroll: true,
      },
      getContent: function Card(item: OPSTypedPersonExtended) {
        return <TypedPersonCard person={item} />;
      },
      loadingPlaceholder: <TypedPersonCard loadingPlaceholder />,
      columnCount: 6,
    },
  });
