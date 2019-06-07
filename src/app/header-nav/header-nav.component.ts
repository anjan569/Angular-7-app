import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.servcies';
import { NavLinks } from '../shared/navlinks';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  navLinks: NavLinks[];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.navLinks = this.sharedService.getNavlinks();
    console.log(this.navLinks);
  }

}
