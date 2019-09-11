import { Injectable } from '@angular/core';
import { WikipediaApiService } from '../providers/wikipedia/wikipedia-api.service';
import { ImdbApiService } from '../providers/imdb/imdb-api.service';
import { FavoriteItemModel } from '../../shared/models/favorite-item.model';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { dbKeyId } from '../../shared/constants/symbols';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(
        public wikipediaApi: WikipediaApiService,
        public imdbApi: ImdbApiService,
        private remoteStore: AngularFirestore,
    ) {
    }

    getFavoritesItems(): Observable<FavoriteItemModel[]> {
        return this.remoteStore.collection('favorites').get().pipe(
            map(snapshot => snapshot.docs.map(doc => {
                const data: any = doc.data();

                data[ dbKeyId ] = doc.id;
                return data as FavoriteItemModel;
            })),
        );
    }

    addFavoriteItem(favorite: FavoriteItemModel): Observable<DocumentReference> {
        return fromPromise(this.remoteStore.collection('favorites').add({ ...favorite }));
    }

    deleteFavoriteItem(itemId: string | number): Observable<void> {
        return fromPromise(this.remoteStore.doc('favorites/' + itemId).delete());
    }

    updateFavoriteItem(favorite: FavoriteItemModel): Observable<void> {
        return fromPromise(this.remoteStore.doc(`favorites/${favorite[ dbKeyId ]}`).update({ ...favorite }));
    }
}
