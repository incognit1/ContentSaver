export interface WikipediaResultInterface {
  pageid: number;
  ns: number;
  title: string;
  index: number;
  thumbnail: {
    source: string;
    width: number;
    height: number,
  };
  pageimage: string;
  extract: string;
}

export class WikipediaResultModel {
  constructor(
      public id: string | number,
      public title: string,
      public description: string,
      public isFavorite: boolean = false,
  ) {}

  static initFromRaw(raw: WikipediaResultInterface): WikipediaResultModel {
    return new WikipediaResultModel(
        raw.pageid,
        raw.title,
        raw.extract,
    );
  }
}
