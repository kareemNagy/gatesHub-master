import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-meet-team',
  templateUrl: './meet-team.component.html',
  styleUrls: ['./meet-team.component.scss']
})
export class MeetTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      // The slider being synced must be initialized first
      $('#slider').flexslider({
          animation: "slide",
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          sync: "#carousel"
      });
  
      $('#carousel').flexslider({
          mousewheel: true,
          animation: "slide",
          controlNav: false,
          animationLoop: true,
          directionNav: true,
          slideshow: false,
          itemWidth: 350,
          itemMargin: 0,
          asNavFor: '#slider'
      });
  });
  }

}
