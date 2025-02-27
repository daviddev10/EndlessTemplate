import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JobDB } from '../../../shared/data/job-search/job-search';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-apply',
  standalone: true,
  imports: [CommonModule,JobFilterComponent,RouterModule,NgbModule,FormsModule,ReactiveFormsModule],
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {

  public jobs: any
  public arr: any
  public jobForm: FormGroup;
  public dropdownList: any;
  public selectedItems: any;
  public dropdownSettings: any;
  model1: Date;
  model2: Date;
  model3: Date;
  model4: Date;
  model5: Date;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      personaldetails: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      rpassword: ['', Validators.required],
      collegename: ['', Validators.required],
      specialization: ['', Validators.required],
      location: ['', Validators.required],
      company_name: ['', Validators.required],
    })
    
    this.jobs = JobDB.Job_Category;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.jobs.filter((items: { Id: number; }) => {
        if (items.Id === id) {
          this.arr = items;
        }
      })
    })
  }

  ngOnInit() {
    
    this.dropdownList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Germany" },
      { "id": 7, "itemName": "France" },
      { "id": 8, "itemName": "Russia" },
      { "id": 9, "itemName": "Italy" },
      { "id": 10, "itemName": "Sweden" }
    ];
    this.selectedItems = [
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
}
