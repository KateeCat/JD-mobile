// import $ from 'zepto'
import $ from 'zepto'

import Swiper from './swiper.min.js'

require('./selector.js')
require('./fx.js')
require('./fx_methods.js')
require('./index.js')
require('../css/index.scss')
require('../css/base.scss')
require('../css/swiper.min.css')


var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
var htmlDom = document.getElementsByTagName("html")[0];
htmlDom.style.fontSize = htmlWidth/10 + "px";
window.addEventListener('resize',(e)=>{
	var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth/10 + 'px';
})

 var mySwiperBanner = new Swiper ('.jd-banner .swiper-container',{
    autoplay:true,
    loop:true,
    pagination: {
    el: '.swiper-pagination',
 },
 })

 var mySwiper = new Swiper ('.jd-news .swiper-container',{
    autoplay:true,
	direction : 'vertical',
	loop: 'true'
 })
