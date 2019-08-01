import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  status1 = false;
  
  randomcolor = this.getRandomColor();

    //function to get random colors
    public getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    //function to set a new random color
    setColor() {
        this.randomcolor = this.getRandomColor();
    }


  technlogies = [{
   name:"HTML",
   desc:"Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
   status:true
  },{
   name:"CSS",
   desc:"Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
   status:false
  },
  {
   name:"JS",
   desc:"Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
   status:true
  }

  ]

  fun(){
    this.status1=true;
  }
}
