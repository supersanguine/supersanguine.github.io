function Pipe() {
  this.top = random(height/2);
  this.x = width;
  this.w = 100;
  this.h = 200;
  this.speed = 3;
  
  this.highlight = false;
  
  this.hits = function(bird) {
    var inWidth = bird.x > this.x && bird.x < this.x + this.w;
    var inHeight = bird.y < this.top || bird.y > this.top + this.h;
    
    if (inWidth && inHeight) {
      this.highlight = true;
      return true;    
    } 
    
    this.highlight = false;
    return false;
  }
 
  this.show = function() {
     fill(0);
     if (this.highlight) {
       fill(255, 0, 0); 
     }
     rect(this.x, 0, this.w, this.top);
     rect(this.x, this.top + this.h, this.w, height);
  }
  
  this.update = function() {
   this.x -= this.speed; 
  }
  
  this.offscreen = function() {
    return this.x < -this.w;
  }
}
