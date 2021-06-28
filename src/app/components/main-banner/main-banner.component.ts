import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $(".explore-link").hover(
        function () {
          $(this).parent().addClass("img-zoom");
        }, function () {
          $(this).parent().removeClass("img-zoom");
        });
    })
  }

}
