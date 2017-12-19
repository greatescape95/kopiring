import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.handleJQuery();
  }

  handleJQuery = () => {
    $('.fullwidthbanner').show().revolution(
      {
          dottedOverlay:"none",
          delay: 9000,
          startwidth: 1170,
          startheight: 470,
          hideThumbs:200,

          thumbWidth:100,
          thumbHeight:50,
          thumbAmount:5,

          navigationType:"none",
          navigationArrows:"solo",
          navigationStyle:"square",

          touchenabled:"on",
          onHoverStop:"on",

          swipe_velocity: 0.7,
          swipe_min_touches: 1,
          swipe_max_touches: 1,
          drag_block_vertical: false,

          parallax:"mouse",
          parallaxBgFreeze:"on",
          parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

          keyboardNavigation:"off",

          navigationHAlign:"center",
          navigationVAlign:"bottom",
          navigationHOffset:0,
          navigationVOffset:20,

          soloArrowLeftHalign:"left",
          soloArrowLeftValign:"center",
          soloArrowLeftHOffset:0,
          soloArrowLeftVOffset:0,

          soloArrowRightHalign:"right",
          soloArrowRightValign:"center",
          soloArrowRightHOffset:0,
          soloArrowRightVOffset:0,

          shadow:0,
          fullWidth:"on",
          fullScreen:"off",

          spinner:"spinner4",

          stopLoop:"off",
          stopAfterLoops:-1,
          stopAtSlide:-1,

          shuffle:"off",

          autoHeight:"off",
          forceFullWidth:"off",



          hideThumbsOnMobile:"off",
          hideNavDelayOnMobile:1500,
          hideBulletsOnMobile:"off",
          hideArrowsOnMobile:"off",
          hideThumbsUnderResolution:0,

          hideSliderAtLimit:0,
          hideCaptionAtLimit:0,
          hideAllCaptionAtLilmit:0,
          startWithSlide:0,
          videoJsPath:"js/revolution-slider/videojs/",
          fullScreenOffsetContainer: ""
      });
  }
}
