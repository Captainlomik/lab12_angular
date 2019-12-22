import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Person } from './shared/models/person.model';
import { ServService } from './shared/services/serv.service'
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  persons: Person[] = [];
  search = '';
  ServService: any;
  constructor(private serveService: ServService) {
  }

  async ngOnInit() {
    // this.persons.push(new Person('Ivan', 'Ivanov', '898323728', 1));
    //this.persons.push(new Person('Ivan', 'Ivanov', '932346535', 2));
    //this.persons.push(new Person('Ivan', 'Ivanov', '324324235', 3));
    //this.persons.push(new Person('Ivan', 'Ivanov', '342345645', 4));
    // this.persons.push(new Person('Ivan', 'Ivanov', '435523455', 5));
    //this.ServService.getData().subscribe((data:Person[]) => this.persons=data);

    try {
      let persons = this.serveService.getData();
      this.persons = (isNullOrUndefined(await persons)) ? [] : await persons;
    }
    catch (err) {console.log(err);}

  }

  ngOnDestroy(): void {
  }

  async onAddPerson(person: Person) {
    //let newId = this.persons[this.persons.length - 1].id + 1;
    //person.id = newId;
    //this.persons.push(person);
    try {
      await this.serveService.postPerson(person);
      this.ngOnInit();
    } 
    catch (err) {console.error(err);}
  }

  async delete(person: Person, index: number) {
    try {
      await this.serveService.deletePerson(person.id);
      //console.log(index);
      this.persons.splice(index, 1);
      this.ngOnInit();
    }
    catch (err) {console.error(err);}
  }

  async change(peron: Person) {

    try {//let index = this.persons.indexOf(peron);
      //this.persons[index] = peron;
      await this.serveService.putPostId(peron.id, peron);
      this.ngOnInit();
    } 
    catch (err) { console.error(err)}
  }

}
