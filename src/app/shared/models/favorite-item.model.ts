import { ImdbResponseModel } from '../../core/providers/imdb/imdb-response.model';
import { ProviderEnum } from '../enums/provider-enum';
import { WikipediaResultModel } from '../../core/providers/wikipedia/wikipedia-result.interface';
import { ProviderResultItem } from '../../core/providers/providers-result.type';
import { throwError } from 'rxjs';

export class FavoriteItemModel {
    constructor(
        public title: string,
        public providerId: string | number,
        public itemId: string | number,
        public comment: string,
        public additionalInfo: string,
    ) {
    }

    static init(item: ProviderResultItem, provider: ProviderEnum): FavoriteItemModel {
        switch (provider) {
            case ProviderEnum.Wikipedia:
                return this.initFromWikipediaItem(item as WikipediaResultModel);
            case ProviderEnum.IMDB:
                return this.initFromImdbItem(item as ImdbResponseModel);
            default:
                throwError('Provider is not defined');
        }
    }

    static initFromImdbItem(item: ImdbResponseModel): FavoriteItemModel {
        return new FavoriteItemModel(
            item.title,
            ProviderEnum.IMDB,
            item.id,
            '',
            `Type: ${item.type}, year: ${item.year}`,
        );
    }

    static initFromWikipediaItem(item: WikipediaResultModel): FavoriteItemModel {
        return new FavoriteItemModel(
            item.title,
            ProviderEnum.Wikipedia,
            item.id,
            '',
            item.description ? `Short description: ${item.description}` : '',
        );
    }
}
