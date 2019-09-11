import { ProviderEnum } from '../../shared/enums/provider-enum';

export enum SortDirectionEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export interface State {
  provider: ProviderEnum;
  searchTerm: string;
  sort: SortInterface;
}

export const initialState = {
  provider: ProviderEnum.Wikipedia,
  searchTerm: '',
  sort: {
    sortBy: 'title',
    direction: SortDirectionEnum.ASC,
  },
};

export interface SortInterface {
    sortBy: string;
    direction: SortDirectionEnum;
}
