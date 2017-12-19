import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../enumerations/menuitem';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setSelectedMenuItem(MenuItem.Services);
    this.handleJQuery();
  }
  handleJQuery = () => {
    jQuery('.service-reasons').parallax("50%", 0.1);
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
