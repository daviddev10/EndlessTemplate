import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
	imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public contactForm: FormGroup;
  public errorMessage: any;
  public url: any;
  public item: any;
  public avatar: any;
  public sidebaron: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private toastr :ToastrService) {}

  createForm() {
    this.contactForm = this.fb.group({
      name: [this.item.name, Validators.required],
      surname: [this.item.surname, Validators.required],
      mobile: [this.item.mobile, Validators.required],
      age: [this.item.age, Validators.required]
    });
  }

  save(value: { avatar: any; age: number; }) {
    value.avatar = this.avatar;
    value.age = Number(value.age);
  }

  showEdit(){
    this.toastr.success('User Updated!');
  }

  //FileUpload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.avatar = reader.result;
    }
  }

  cancel() {
    this.router.navigate(['/contact/contacts']);
  }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.avatar = data.payload.data().avatar;
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }

}
