import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../shared/developer.service';
import { Developer } from '../shared/developer.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  developerList: Developer[];

  constructor(private developerService : DeveloperService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.developerService.getData();
    x.snapshotChanges().subscribe(item => {
      this.developerList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.developerList.push(y as Developer);
      });
    });
  }

  onEdit(developer: Developer) {
    this.developerService.selectedDeveloper = Object.assign({}, developer);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.developerService.deleteDeveloper(key);
      this.tostr.warning("Deleted Successfully", "Delete");
    }
  }
}
