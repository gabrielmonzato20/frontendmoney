import { Category } from './category.model';
import { Person } from './Person.model';
import { typeLancament } from './TypeLacament.enum';
export class Lacament{
  codigo:number;
  descricao:string;
  dataVencimento:Date;
  dataPagamento:Date;
  valor:number;
  observacao:string;
  pessoa:Person = new Person();
  categoria:Category= new Category();
  tipo:typeLancament = 0;

}
