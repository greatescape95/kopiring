import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../enumerations/menuitem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setSelectedMenuItem(MenuItem.Home);
    this.handleJQuery();
  }

  handleJQuery = () => {
    jQuery("body").imagesLoaded(function () {
      jQuery(".animate_afc, .animate_afl, .animate_afr, .animate_aft, .animate_afb, .animate_wfc, .animate_hfc, .animate_rfc, .animate_rfl, .animate_rfr").waypoint(function () {
          if (!jQuery(this).hasClass("animate_start")) {
              var e = jQuery(this);
              setTimeout(function () {
                  e.addClass("animate_start")
              }, 20)
          }
      }, {
          offset: "85%",
          triggerOnce: !0
      })
  });
  }
}
