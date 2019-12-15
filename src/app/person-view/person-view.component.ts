import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  @Input() inPerson: Person;
  @Output() del = new EventEmitter<null>();
  @Output() ch = new EventEmitter<{id:number, name:string, surname:string}>();

  constructor() { }

  ngOnInit() {
    // console.log(this.inPerson)
  }

  delete() {
    this.del.emit();
  }
  change(id:number, name:string, surname:string) { 
    let i='firstname'+id;
   let newP=document.getElementById(i);
   newP.innerHTML=`<input [(ngModule)]="name">`;


  
  }



}
