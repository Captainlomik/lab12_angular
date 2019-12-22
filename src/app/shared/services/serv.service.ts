import { Injectable } from '@angular/core';
import { Http } from './http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService extends Http{

  options: HttpHeaders;
  constructor(public http: HttpClient){ 
    super(http);
    this.options=new HttpHeaders();
    this.options=this.options.set('Content-Type', 'application/json');

  }
  async getData(){
    return this.get('person', this.options).toPromise();
}
async postPerson(data) {
  return this.post('person', data, this.options).toPromise();
}

async putPostId(id, data) {
  return this.put('person/' + id, data, this.options).toPromise();
}

async deletePerson(id) {
  return this.delete('person/' + id, this.options).toPromise();
}
  
}