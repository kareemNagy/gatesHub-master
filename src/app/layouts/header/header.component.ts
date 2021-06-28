import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public visbility: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.visbility = !this.visbility;
    document.querySelector('body').classList.toggle('overflow-hidden-cst');

  }

}
