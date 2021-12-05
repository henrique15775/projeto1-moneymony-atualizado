import { DecimalPipe } from "@angular/common";

export class Cotacao{
  id!:number;
  url_moeda!: string;

  ask!: number;
bid!: number;
code!: string;
codein!: string;
create_date!: string;
high!: number;
low!: number;
name!: string;
pctChange!: number;
timestamp!: number;
varBid!: number;
}
