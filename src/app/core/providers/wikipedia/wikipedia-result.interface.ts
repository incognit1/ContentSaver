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
