import { Component, OnInit } from '@angular/core';

import { DeveloperService } from './shared/developer.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css'],
  providers :[DeveloperService]
})
export class DevelopersComponent implements OnInit {

  constructor(private developerService : DeveloperService) { }

  ngOnInit() {
  }

}
