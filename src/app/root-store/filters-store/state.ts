import { ProviderEnum } from '../../shared/enums/provider-enum';

export interface State {
  provider: ProviderEnum;
  searchTerm: string;
}

export const initialState = {
  provider: ProviderEnum.Wikipedia,
  searchTerm: '',
};


