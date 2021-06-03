import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'masszazs';

  // constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  // }
  constructor(private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
    // this.pageScrollService.scroll({
    //   document: this.document,
    //   scrollTarget: '.theEnd',
    // });
  }
}
