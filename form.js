class Form {

constructor() {
this.button = createButton('Play');
this.greeting = createElement('h2');
this.title = createElement('h2');
}
hide(){
this.greeting.hide();
this.button.hide();
this.title.hide();
}




display(){
background("white");
this.object = createSprite(displayWidth/2,(displayHeight-199)/1.8)
this.object.addImage("welcome",welcomeimg);
this.object.scale = 3;
this.button.position(displayWidth/2 + 280, displayHeight/2+50);
this.button.mousePressed(()=>{
this.button.hide();
this.object.destroy();
gameState="play";
});



}
}

