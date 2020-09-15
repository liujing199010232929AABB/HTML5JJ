window.onload = function(){
    function Ball(){
        this.x = 100;
        this.y = 100;
        this.vx = 5;
        this.vy = 2;
        this.radius = 25;
        this.color = 'black';
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        //还可以添加摩擦力参数
        // this.init();
    }
    Ball.prototype.init = function(){
        //1.画小球
        this.drawBall();
        var _this = this;
        //2.监听canvas的点击事件  默认是冒泡的
        this.canvas.addEventListener('click',function(){
            window.requestAnimationFrame(function(){
                _this.draw();
            })
        })
    }

    Ball.prototype.draw = function(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.drawBall();
        this.x += this.vx;
        this.y += this.vy;
        //处理边界
        if(this.y+this.vy > this.canvas.height || this.y+this.vy < 0){
            this.vy = -this.vy;

        }
        if(this.x+this.vx > this.canvas.width || this.x+this.vx < 0){
            this.vx = -this.vx;
            
        }

        var _this = this;
        window.requestAnimationFrame(function(){
            _this.draw();
        })
    }

    Ball.prototype.drawBall = function(){
        //(1)开始路径
        this.ctx.beginPath();
        //(2)画图
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        //(3)关闭路径
        this.ctx.closePath();
        //(4)设置填充的颜色
        this.ctx.fillStyle = this.color;
        //(5)填充
        this.ctx.fill();
    }

    var ball = new Ball();
    ball.init();
}