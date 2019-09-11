export interface ImdbResponseInterface {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export class ImdbResponseModel {
  constructor(
    public id: string,
    public year: string, // y
    public type: string, // s
    public title: string, // l,
    public index: number,
  ) {
  }
  static initModelFromResponse(raw: ImdbResponseInterface, index: number) {
    return new ImdbResponseModel(raw.imdbID, raw.Year, raw.Type, raw.Title, index);
  }

  static mapImdbResponse(raw: ImdbResponseInterface[]): ImdbResponseModel[] {
    return raw ? raw.map(ImdbResponseModel.initModelFromResponse) : [];
  }
}
