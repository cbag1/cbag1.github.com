import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ismodal = false;
  images = [
    '../../../assets/img/image-product-1.jpg',
    '../../../assets/img/image-product-2.jpg',
    '../../../assets/img/image-product-3.jpg',
    '../../../assets/img/image-product-4.jpg'
  ];

  thumbs = [
    '../../../assets/img/image-product-1-thumbnail.jpg',
    '../../../assets/img/image-product-2-thumbnail.jpg',
    '../../../assets/img/image-product-3-thumbnail.jpg',
    '../../../assets/img/image-product-4-thumbnail.jpg'
  ];

  indeximg = 0;
  imageshow: string = this.images[this.indeximg];


  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    // document.getElementById("lightbox").style.display= "none";
    this.ismodal = false;
  }

  showModal() {
    this.ismodal = true;
  }

  changeImage(index: number) {
    this.indeximg = index;
    console.log(this.indeximg);
    this.imageshow = this.images[index];
  }

  changeIndex(type: number) {
    if (type == 0) {
      this.indeximg += 1;
    } else {
      this.indeximg -= 1;
    }

    if (this.indeximg > 3) {
      this.indeximg = 0;
    } else
      if (this.indeximg < 0) {
        this.indeximg = 3;
      }

    this.imageshow = this.images[this.indeximg];

  }
}
