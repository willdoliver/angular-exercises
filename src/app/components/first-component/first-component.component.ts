import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-first-component',
	templateUrl: './first-component.component.html',
	styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  	name: string = 'William';
	age: number = 26;
	hobbies = ['Running', 'Watch', 'Soccer']

	constructor() { }

	ngOnInit(): void {
  	}

}
