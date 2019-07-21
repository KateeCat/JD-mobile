window.onload = function () {
	search();
	time();
}
function search() {
	var banner = document.querySelector(".swiper-container");
	var bannerheight = banner.offsetHeight;
	var search = document.querySelector(".jd-search")
	window.onscroll = function () {
        var offsetTop = document.body.scrollTop || document.documentElement.scrollTop;
       	var opacity = 0;
       	if(offsetTop > bannerheight/2){
       		search.style.backgroundColor = "rgba(233,35,34)";
       	}else {
       		search.style.backgroundColor = "transparent";
       	}
	}
}

function time() {
	var jd_time = document.querySelector(".sk-time");
	var spanArr = jd_time.querySelectorAll("span");
	var totalTime = 3800;
	timer = setInterval(function () {
		totalTime--;
		if(totalTime<0){
			clearInterval(timer);
			return;
		}

		var hour = Math.floor(totalTime/3600);
		var minute = Math.floor(totalTime%3600/60);
		var second = Math.floor(totalTime%60);
		if(minute<10){
			minute = '0'+Math.floor(minute).toString();
		}
		 if (second<10){
			second = '0'+Math.floor(second).toString();
		}
		if (hour<10) {
			hour = '0' + Math.floor(hour).toString()
		}

		spanArr[0].innerHTML = hour;
		spanArr[2].innerHTML = minute;
		spanArr[4].innerHTML = second;

	},1000);
}


