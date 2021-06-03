import { Component, OnInit, ViewChild } from '@angular/core';
import { GalleryService, Image, PlainGalleryStrategy } from '@ks89/angular-modal-gallery';
import { ModalGalleryComponent } from '@ks89/angular-modal-gallery/lib/components/modal-gallery/modal-gallery.component';
import { PlainGalleryConfig } from '@ks89/angular-modal-gallery/lib/model/plain-gallery-config.interface';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // images = [
  //   { thumb: 'https://www.traverse-blog.com/wp-content/uploads/2020/01/Finnish-Sauna-Photos-8.jpg', img: 'https://www.traverse-blog.com/wp-content/uploads/2020/01/Finnish-Sauna-Photos-8.jpg', description: 'Image 1' },
  //   { thumb: 'https://www.hotelvisegrad.hu/wp-content/uploads/therapeutic-massage-672x365-1.jpg', img: 'https://www.hotelvisegrad.hu/wp-content/uploads/therapeutic-massage-672x365-1.jpg', description: 'Image 2' }
  //   // { thumb: './app/assets/images/gallery/thumbs/img3.jpg', img: './app/assets/images/gallery/img3.jpg', description: 'Image 3' },
  //   // { thumb: './app/assets/images/gallery/thumbs/img4.jpg', img: './app/assets/images/gallery/img4.jpg', description: 'Image 4' },
  //   // { thumb: './app/assets/images/gallery/thumbs/img5.jpg', img: './app/assets/images/gallery/img5.jpg', description: 'Image 5' }
  // ];

  plainConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: {

    }
  }

  public myOptions: NgxMasonryOptions = {
    // gutter: 10
    columnWidth: 200
  };

  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
  ];

  @ViewChild('mGallery')
  mGallery: ModalGalleryComponent;

  images: Image[] = [
    new Image(0, {
      img: 'https://www.traverse-blog.com/wp-content/uploads/2020/01/Finnish-Sauna-Photos-8.jpg',
      // extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: 'https://www.hotelvisegrad.hu/wp-content/uploads/therapeutic-massage-672x365-1.jpg',
      description: 'Description 2'
    }),
    new Image(2, {
      img: 'https://lp-cms-production.imgix.net/features/2017/11/GettyImages-691286516-53936efbf7ce.jpg',
      description: 'Description 2'
    }),
    new Image(3, {
      img: 'https://chadathaibudapest.hu/application/files/9715/7537/7289/header-img-2.png',
      description: 'Description 2'
    }),
    new Image(4, {
      img: 'https://static8.depositphotos.com/1261297/899/i/600/depositphotos_8991013-stock-photo-spa-massage-setting-with-candlelight.jpg',
      description: 'Description 2'
    }),
    new Image(5, {
      img: 'https://www.royaltubs.co.uk/wp-content/uploads/2015/03/Sauna-Pod-inside-1.jpg',
      description: 'Description 2'
    }),
    new Image(6, {
      img: 'https://i1.wp.com/roblichtcustomsaunas.com/wp-content/uploads/2020/06/electric-mobile-sauna.177.052320-copy.jpg?fit=720%2C1024&ssl=1',
      description: 'Description 2'
    }),
    new Image(7, {
      img: 'https://varfurdo.hu/en/adat/kepgaleria/hu133_aquapalota-szauna-22.jpg',
      description: 'Description 2'
    }),
    new Image(8, {
      img: 'https://images-na.ssl-images-amazon.com/images/I/71GXCCyrGXL._AC_SL1000_.jpg',
      description: 'Description 2'
    }),
    new Image(9, {
      img: 'https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1365232&recipeId=728',
      description: 'Description 2'
    }),
    // new Image(
    //   2,
    //   {
    //     img: '../assets/images/gallery/img3.jpg',
    //     description: 'Description 3',
    //     extUrl: 'http://www.google.com'
    //   },
    //   {
    //     img: '../assets/images/gallery/thumbs/img3.png',
    //     title: 'custom title 2',
    //     alt: 'custom alt 2',
    //     ariaLabel: 'arial label 2'
    //   }
    // ),
    // new Image(3, {
    //   img: '../assets/images/gallery/img4.jpg',
    //   description: 'Description 4',
    //   extUrl: 'http://www.google.com'
    // }),
    // new Image(4, { img: '../assets/images/gallery/img5.jpg' }, { img: '../assets/images/gallery/thumbs/img5.jpg' })
  ];


  constructor(private readonly galleryService: GalleryService) {}

  ngOnInit(): void {
    // this.idService.ids.set(1, this.images);
  }

  open(index) {
    // this.idService.ids.set()
    // this.galleryService.open({
    //   id: 1,
    //   images: this.images,
    //   currentImage: this.images[index]
    //   // libConfig: {
    //   //
    //   // }
    // });
    // this.galleryService.openGallery(0, index);
    this.galleryService.openGallery(1, index);
    // this.galleryService.
  }

}
