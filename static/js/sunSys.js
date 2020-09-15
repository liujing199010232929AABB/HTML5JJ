window.onload = function(){
    function SunSys(){
        this.sun = new Image();
        this.moon = new Image();
        this.earth = new Image();
        this.ctx = document.querySelector('canvas').getContext('2d');
        this.ctx.globalCompositeOperation = 'destination-over';//把圆覆盖到图片上面
        this.init();
    }
    SunSys.prototype.init = function(){//初始化
        this.sun.src = './static/pic/sun.png';
        this.moon.src = './static/pic/moon.png';
        this.earth.src = './static/pic/earth.png';
        var _this = this;

        window.requestAnimationFrame(function(){
            console.log(this);//类似于自执行函数,IIFE函数  指向window
            _this.draw();//this指向SunSys
        })
    }
    SunSys.prototype.draw = function(){
        //1.清空canvas
        this.ctx.clearRect(0,0,500,500);
        //2.设置轨迹的背景填充色和边框色
        this.ctx.fillStyle = "rgba(0,0,0,0.4)";
        this.ctx.strokeStyle = "rgba(0,153,255,0.4)";
        //3.保存当前的状态
        this.ctx.save();

        //画地球
        //4.改变地球的位置
        this.ctx.translate(150,150);

        var time = new Date();
        //5.让地球旋转起来
        this.ctx.rotate(((2*Math.PI)/60*time.getSeconds()) + ((2*Math.PI)/60000)*time.getMilliseconds());
        this.ctx.translate(105,0);
        this.ctx.drawImage(this.earth,-12,-12);


        //画月球
        this.ctx.save();
        this.ctx.rotate(((2*Math.PI)/6*time.getSeconds()) + ((2*Math.PI)/6000)*time.getMilliseconds());
        this.ctx.translate(0,30);
        this.ctx.drawImage(this.moon,0,0);
        this.ctx.restore();


        //恢复原始状态
        this.ctx.restore();

        // 画地球轨迹圆环
        // 开始路径
        this.ctx.beginPath();
        //画圆   arc(x,y,半径,开始的角度，结束的角度，true表示逆时针)
        this.ctx.arc(150,150,105,0,Math.PI*2,false);
        //描边
        this.ctx.stroke();




        //把太阳绘制到canvas中
        this.ctx.drawImage(this.sun,0,0,300,300);
        //实时执行动画
        var _this = this;
        window.requestAnimationFrame(function(){
            _this.draw();
        })

    }
    new SunSys();
}