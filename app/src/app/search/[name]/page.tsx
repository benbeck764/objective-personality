import { OPSTypedPersonExtended } from '@/_models/ops-typed-people.models';
import Await from '@/app/Await';
import { AppCard } from '@benbeck764/react-components';
import { Suspense } from 'react';
import TypedPersonResult from './components/TypedPersonResult';
import { Metadata } from 'next';
import { ApiResponse } from '@/app/api-interface/common/api-shared.models';
import OpsTypedPeopleService from '@/app/api-interface/services/ops-typed-people.service';

export const generateMetadata = ({ params }: { params: { name: string } }): Metadata => {
  return {
    title: `Objective Personality - ${decodeURIComponent(params.name)}`,
  };
};

const SearchedPerson = async ({ params }: { params: { name: string } }) => {
  const service = OpsTypedPeopleService.getInstance();
  const promise = service.getTypedPerson(decodeURIComponent(params.name));

  return (
    <AppCard paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      <Suspense>
        <Await promise={promise}>
          {(res: ApiResponse<OPSTypedPersonExtended>) => (
            <TypedPersonResult person={res.resultObject} />
          )}
        </Await>
      </Suspense>
    </AppCard>
  );
};

export default SearchedPerson;
