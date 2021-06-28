import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-gates-hub',
  templateUrl: './gates-hub.component.html',
  styleUrls: ['./gates-hub.component.scss']
})
export class GatesHubComponent implements OnInit {
  public scrollTo: HTMLElement;
  public hieghtThreshold: string;
  public hieghtThreshold_end: string;

  constructor() { }

  ngOnInit(): void {
    var scrollTo = $('#scrollTo');
    var hieghtThreshold = $(".hp-third-section").offset().top;
    var hieghtThreshold_end = $(".stop-sricky").offset().top + $(".stop-sricky").height();
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= hieghtThreshold && scroll <= hieghtThreshold_end) {
        scrollTo.addClass('sticky');
      } else {
        scrollTo.removeClass('sticky');
      }
    });
    let movingTitle: any = document.querySelector('.moving-title');
    window.onscroll = () => {
      let pos = window.scrollY - 500;
      movingTitle.style.left = `${pos}px`;
    }

    $(function () {
      var gateImg = $('#gateImg1');
      var hieghtThresholdd = $("#gateImg1").offset().top - 80;
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= hieghtThresholdd && scroll) {
          gateImg.addClass('animate-this');
        }
      });
    })

    $(function () {
      var gateImg2 = $('#gateImg2');
      var hieghtThresholdd = $("#gateImg2").offset().top - 80;
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= hieghtThresholdd && scroll) {
          gateImg2.addClass('animate-this');
        }
      });
    })

    $(function () {
      var gateImg3 = $('#gateImg3');
      var hieghtThresholdd = $("#gateImg3").offset().top - 80;
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= hieghtThresholdd && scroll) {
          gateImg3.addClass('animate-this');
        }
      });
    })

  }





}
