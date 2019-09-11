import { WikipediaResultInterface } from './wikipedia/wikipedia-result.interface';
import { ImdbResponseModel } from './imdb/imdb-response.model';

export type ProviderResultItem = WikipediaResultInterface | ImdbResponseModel;
