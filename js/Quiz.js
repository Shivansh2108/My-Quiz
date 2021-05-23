class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(30);
    text("Result of the Quiz",340,50);
    text("____________________",320,65);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if(allContestants!==undefined){
      var dp=230;
      fill ("blue");
      textSize(20);
      text("Note: Contestants who answered correct are highlighted in green colour",130,230);
      for(var i in allContestants){
        var correctAnswer= "2";
        if(correctAnswer===allContestants[i].answer){
          fill ("green");
        }
        else{
          fill ("red");
        }
        dp+=30;
        text(allContestants[i].name+"  :  "+allContestants[i].answer,250,dp);
        
      }
    }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
