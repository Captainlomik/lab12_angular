import { Pipe, PipeTransform, Input } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(persons: Person[], value: string) {

    return persons.filter(person => {
      // if ( person.firstname.indexOf(value)== -1)
      //   return false;
      // else true;
      return person.firstname.toLocaleLowerCase().indexOf(value.toLocaleLowerCase())!= -1 || person.lastname.toLocaleLowerCase().indexOf(value.toLocaleLowerCase())!=-1;
       })
  }
}
