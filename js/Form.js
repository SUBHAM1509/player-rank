class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset')
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }



  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
    database.ref('players').remove();
    
    });

  }

  DisplayRanks() {
   background(ranking) 
   this.title.html("Car Racing Game")
   this.title.position(displayWidth/2-50,100)
   var message = createElement('h2')
   message.html("Congratulations "+player.name+" for participating our car racing game and reciving a great rank");
   message.position(250,displayHeight/2-80);
   var message2 = createElement('h2')
   message2.html("You attained Rank "+player.rank)
   message2.position(displayWidth/2-40,displayHeight/2-20);
  } 

}

