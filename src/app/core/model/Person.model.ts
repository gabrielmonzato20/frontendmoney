import { Adress } from "./adress.model";

export class Person{
  id:number ;
  name:string;
  adress:Adress = new Adress();
  active: boolean;
}
