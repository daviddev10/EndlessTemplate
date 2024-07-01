import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageGalleryComponent } from '../social-app/image-gallery/image-gallery.component';

@Component({
  selector: 'app-social-app',
  standalone: true,
  imports: [CommonModule,NgbModule,ImageGalleryComponent],
  templateUrl: './social-app.component.html',
  styleUrls: ['./social-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SocialAppComponent implements OnInit {

  public active = 1;
  public url: any;

  constructor() { }

  Fileupload:any
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
      this.url = reader.result;
    }
  }

  ngOnInit() { }

}
