window.onload = function(){
	// 1.获取标签
	var PlayEy = document.querySelector('.PlayEy');
	var Play = document.querySelector('.Play');
	var audio = document.querySelector('audio');
	var i = 0;//默认的角度
	// 2.监听事件
	Play.onclick = function(){
		
		var timer = setInterval(function(){
			i++;
			if(i == 360){
				i = 0;
			}
			PlayEy.style.transform = `rotate(${i}deg)`
			if(audio.paused){
				clearInterval(timer);
			}
		},30);
		
		
		if(audio.paused){
			audios.play();
			Play.style.backgroundImage = `url('pic/play.png')`;
		}else{
			audios.pause();
			Play.style.backgroundImage = `url('pic/pause.png')`;
		}
	}
	
}