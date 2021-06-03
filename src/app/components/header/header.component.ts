import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  @ViewChild('navbar', { static: false }) navbar: ElementRef;

  @HostListener('window:scroll', []) onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.navbar.nativeElement.classList.add('navbar-shrink');
    } else {
      this.navbar.nativeElement.classList.remove('navbar-shrink');
    }
  }

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }

}
