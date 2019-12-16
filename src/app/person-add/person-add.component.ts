import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../shared/models/person.model';


@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  
  @Output() addperson = new EventEmitter<Person>();

  input1: string = '';
  input2: string = '';
  search:string='';

  constructor() { }

  ngOnInit() {
  }

  onAddPerson(firstname: string, lastname: string) {
    let person = new Person(firstname, lastname);
    this.addperson.emit(person);
  }


  disable(input1: string, input2: string) {
    if (this.input1 === '' || this.input2 === '')
      return true;
  }

}
