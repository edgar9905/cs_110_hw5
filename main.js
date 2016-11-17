let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
const NUM_POINTS = 1500; // play with this after you finished implementing draw, it's fun :-)
// create points
const points = [];
for(let i = 0; i < NUM_POINTS; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 10,
        height: Math.random() * 10,
        xDelta: 1, // the change that you will add to x, you can flip it when you get to the edge
        yDelta: 1, // the change that you will add to y, you can flip it when you get to the edge
        color: 'aqua'
    });
}
const draw = function() {
 context.clearRect(0, 0, canvas.width, canvas.height);
        points.forEach(function(point){
            context.fillStyle = point.color; // Drawing for each point
            context.fillRect(point.x, point.y, point.width, point.height); // Drawing for each point
            if(point.x > canvas.width-point.width || point.x < 0){ // if the point has gone beyond left or right part of the canvas, flip xDelta
                point.xDelta *= -1
            }
            if(point.y > canvas.height-point.height || point.y < 0){ // if point has gone beyond top or bottom, flip yDelta
                point.yDelta *= -1
            }
            point.x += point.xDelta;
            point.y += point.yDelta;
        });
};
let animate = function() {
    draw();//drawing our function to our html page 
    setTimeout(animate, 10);//time out of animation
};
animate();