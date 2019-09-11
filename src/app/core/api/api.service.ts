import { Injectable } from '@angular/core';
import { WikipediaApiService } from '../providers/wikipedia/wikipedia-api.service';
import { ImdbApiService } from '../providers/imdb/imdb-api.service';
import { FavoriteItemModel } from '../../shared/models/favorite-item.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    public wikipediaApi: WikipediaApiService,
    public imdbApi: ImdbApiService,
    private remoteStore: AngularFirestore
  ) {
  }

  getFavoritesItems(): Observable<FavoriteItemModel[]> {
    return this.remoteStore.collection('favorites').get().pipe(
      map(snapshot => snapshot.docs.map(doc => doc.data() as FavoriteItemModel)),
    );
  }

  addFavoriteItem(favorite: FavoriteItemModel) {
    console.log('ADD', favorite);
    return this.remoteStore.collection('favorites').add({...favorite });
  }
  
  deleteFavoriteItem(itemId: any) {
    console.log('itemId', itemId);
    return this.remoteStore.doc('favorites/' + itemId).delete();
  }
  
  updateFavoriteItem(favorite: FavoriteItemModel) {
    const id = favorite.itemId;
    
    delete favorite.itemId;
    return this.remoteStore.doc('favorites/' + id).update(favorite);
  }
}
