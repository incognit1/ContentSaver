export interface TableStructureInterface {
  key: string;
  name: string;
  title: string;
}

export class TableStructureModel {
  constructor(public key: string, public name: string, public title: string) {}
}
