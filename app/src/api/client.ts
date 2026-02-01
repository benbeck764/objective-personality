import { getTypedPerson, searchTypedPeople } from '@/api/services/typed-person.service';

export const api = {
  typedPeople: {
    get: getTypedPerson,
    search: searchTypedPeople,
  },
};
