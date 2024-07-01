import { Routes } from '@angular/router';
import { NgxToastrComponent } from './ngx-toastr/ngx-toastr.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { StickyComponent } from './sticky/sticky.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { NgxDropzoneComponent } from './ngx-dropzone/ngx-dropzone.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';


export const advance: Routes = [
    {
        path: '',
        children: [
            {
                path: 'toastr',
                component: NgxToastrComponent,
                data: {
                    title: "Toastr",
                    breadcrumb: "Toastr"
                }
            },
            {
                path: 'sweetalert',
                component: SweetAlertComponent,
                data: {
                    title: "Sweetalert",
                    breadcrumb: "Sweetalert"
                }
            },
            {
                path: 'range-slider',
                component: RangeSliderComponent,
                data: {
                    title: "Range-Slider",
                    breadcrumb: "Range-Slider"
                }
            },
            {
                path: 'crop',
                component: ImageCropperComponent,
                data: {
                    title: "Cropper",
                    breadcrumb: "Cropper"
                }
            },
            {
                path: 'sticky',
                component: StickyComponent,
                data: {
                    title: "Sticky",
                    breadcrumb: "Sticky"
                }
            },
            {
                path: 'owl-carousel',
                component: OwlCarouselComponent,
                data: {
                    title: "Owl-Carousel",
                    breadcrumb: "Owl-Carousel"
                }
            },
            {
                path: 'dropzone',
                component: NgxDropzoneComponent,
                data: {
                    title: "Dropzone",
                    breadcrumb: "Dropzone"
                }
            },

        ]
    }
]