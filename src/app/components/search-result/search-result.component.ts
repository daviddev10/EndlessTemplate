import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { videosData } from '../../shared/data/search-result/search-result';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageGalleryComponent } from '../search-result/image-gallery/image-gallery.component';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule,NgbModule,ImageGalleryComponent],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultComponent implements OnInit {

  public active = 1;
  public videosData = videosData;

  constructor(public sanitizer: DomSanitizer) { }

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() { }

}
