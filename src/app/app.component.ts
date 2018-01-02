import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AppService } from './app.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  greetings = 'test';
  title = 'Tour of Heroes';

  constructor(private _appService: AppService) {
    if (document.getElementById('myScript')) {
      document.getElementById('myScript').remove();
    }
    const myScript = document.createElement('script');
    myScript.setAttribute('id', 'myScript');
    myScript.setAttribute('src', 'scripts.bundle.js');
    document.body.appendChild(myScript);
  }

  ngOnInit(): void {

    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 100) {
        jQuery('.scrollup').fadeIn();
      } else {
        jQuery('.scrollup').fadeOut();
      }
    });

    jQuery('.scrollup').click(function () {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    /*----------------------------------------------------*/
    /*	Parallax section
    /*----------------------------------------------------*/
    jQuery('.recentworks').parallax("50%", 0.1);
    jQuery('.product-lead').parallax("50%", 0.1);
    jQuery('.our-clients').parallax("50%", 0.1);
    jQuery('.service-reasons').parallax("50%", 0.1);

    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({ overlay_gallery: false });

    /*Mobile device topnav opener*/

    jQuery(".down-button").click(function () {
      jQuery(".down-button .icon-current").toggleClass("fa fa-angle-up fa fa-angle-down");
    });


  }
}
