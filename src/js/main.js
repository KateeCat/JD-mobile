// import $ from 'zepto'
import $ from 'zepto'
require('./selector.js')
// require('./touch.js')
require('./fx.js')
require('./fx_methods.js')
require('../css/base.scss')
require('../css/index.scss')
require('./index.js')
require('./bannerImg.js')

var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
var htmlDom = document.getElementsByTagName("html")[0];
htmlDom.style.fontSize = htmlWidth/10 + "px";
window.addEventListener('resize',(e)=>{
	var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth/10 + 'px';
})

