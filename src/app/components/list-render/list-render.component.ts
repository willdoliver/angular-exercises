import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service'; 

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];
  
  constructor(private listService: ListService) {
    this.getAnimals();
  }
  
  ngOnInit(): void {
  }
  
  animalDetails: string = '';
  
  showAge(animal: Animal): void {
    this.animalDetails = `The animal ${animal.name} has ${animal.age} years old`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((x) => (this.animals = x));
  }


}
