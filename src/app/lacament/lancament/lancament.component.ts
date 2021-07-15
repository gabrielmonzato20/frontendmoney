import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancament',
  templateUrl: './lancament.component.html',
  styleUrls: ['./lancament.component.css']
})
export class LancamentComponent
{
 	tips = [
    	{ label: 'Receita', value: 'RECEITA' },
    	{ label: 'Despesa', value: 'DESPESA' },
  			];

	persons = [
		{label:"Jose",value:1	},
		{label:"Maria",value:2},
		{label:"Jão",value:3},
		{label:"tkgod",value:4}
		]

		categories = [
			{label:"Food",value:1},
			{label:"Transport",value:2}
			]
}
