import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Person } from './shared/models/person.model';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  persons: Person[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.persons.push(new Person('Ivan', 'Ivanov', 1));
    this.persons.push(new Person('Ivan', 'Ivanov', 2));
    this.persons.push(new Person('Ivan', 'Ivanov', 3));
    this.persons.push(new Person('Ivan', 'Ivanov', 4));
    this.persons.push(new Person('Ivan', 'Ivanov', 5));
  }

  ngOnDestroy(): void {
  }

  onAddPerson(person: Person) {
    let newId = this.persons[this.persons.length - 1].id + 1;
    person.id = newId;
    this.persons.push(person);
  }

  delete(index: number) {
    //console.log(index);
    this.persons.splice(index, 1);
  }

  test(even) {
    console.log(event);
  }

  change(peron:Person)
  {
 
   console.log(peron.firstname);

  }
 /* change(newPerson:Person)
  {
    newPerson.id=newPerson.id;
    this.persons.push(newPerson);
  }*/
}
