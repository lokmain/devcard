import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Developer } from './developer.model';

@Injectable()
export class DeveloperService {

  developerList: AngularFireList<any>;
  selectedDeveloper: Developer = new Developer();

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.developerList = this.firebase.list('developers');
    return this.developerList;
  }

  insertDeveloper(developer : Developer)
  {
    this.developerList.push({
      name: developer.name,
      position: developer.position,
      office: developer.office,
      salary: developer.salary
    });
  }

  updateDeveloper(developer : Developer){
    this.developerList.update(developer.$key,
      {
        name: developer.name,
        position: developer.position,
        office: developer.office,
        salary: developer.salary
      });
  }
 
  deleteDeveloper($key : string){
    this.developerList.remove($key);
  }
}
