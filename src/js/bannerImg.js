// $(function(){

// 	var banner = $('.jd-banner');
// 	var bannerWidth = banner.width();
// 	var imgBox = banner.find("ul:first-of-type");
//     var indicators = banner.find("ul:eq(1)").find("li");
//     var first = imgBox.find("li:first-of-type");
//     var last = imgBox.find("li:last-of-type");
//     imgBox.append(first.clone());
//     imgBox.prepend(last.clone());

//     var lis = imgBox.find("li");
//     var count = lis.length;
//     imgBox.css({width:count*100+'%',left:-bannerWidth});
//     console.log(count);
//     var index=1;
//     var imgAnimation = function (){
//             imgBox.animate(
//                    {"left":-index*bannerWidth}, 200,"ease-in-out",
//                     function(){
//                         if(index==count-1){
//                             index=1;
//                             imgBox.css("left",-index*bannerWidth);
//                         }
//                         else if(index==0){
//                             index=count-2;
//                             imgBox.css("left",-index*bannerWidth);
//                         }
//                         indicators.removeClass("active").eq(index-1).addClass("active");
//                     }
//             );

//  	}



//  	var timer = setInterval(function(){
//  		index++;
//  		imgAnimation();
//  	},2000)

//     imgBox.on("swipeLeft",function(){
//             clearInterval(timerId);
//             index++;
//             imgAnimation();
//       });
//         /*右滑动*/
//      imgBox.on("swipeRight",function(){
//             clearInterval(timerId);
//             index--;
//             imgAnimation();
//       });



//  })

// window.onload = function () {
//   var mySwiper = new Swiper ('.swiper-container',{
//     autoplay:true,
//     pagination: {
//     el: '.swiper-pagination',
//   },
//   })

// }
