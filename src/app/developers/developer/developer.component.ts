import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../shared/developer.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor(private developerService : DeveloperService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(developerForm: NgForm){
    if (developerForm.value.$key == null) {
      this.developerService.insertDeveloper(developerForm.value);
      this.tostr.success('Developer added succefully', 'New Entry');      
    } else {
      this.developerService.updateDeveloper(developerForm.value);
      this.tostr.success('Developer updated succefully', 'Update');
    }
    this.resetForm(developerForm);
  }

  resetForm(developerForm?: NgForm) {
    if (developerForm != null)
      developerForm.reset();
    
    this.developerService.selectedDeveloper = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

}
