import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../shared/models/person.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  
  @Output() addperson = new EventEmitter<Person>();
  myForm : FormGroup;
  input1: string = '';
  input2: string = '';
  search:string='';
public mask = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  constructor() { 
    this.myForm= new FormGroup({
      "firstname": new FormControl("", Validators.required),
      "lastname": new FormControl("", Validators.required ),
      "phone": new FormControl("", Validators.pattern(/^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) 
    });
  }

  ngOnInit() {
  }

  onAddPerson() {
    //let person = new Person(firstname, lastname, phone);
    //this.addperson.emit(person);
    console.log(this.myForm.value);
    this.addperson.emit(this.myForm.value)
  }


  /*disable(input1: string, input2: string) {
    if (this.input1 === '' || this.input2 === '')
      return true;
  }*/
  

}
