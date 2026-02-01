import { getTypedPerson, searchTypedPeople } from '@/api/services/typed-person';

export const api = {
  typedPeople: {
    get: getTypedPerson,
    search: searchTypedPeople,
  },
};
