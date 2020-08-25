import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 quotes:Quote[] = [
  new Quote(1,'Never Fight A loosing battle','If you know you are going to loose the fight retreat.'),
  new Quote(2,'A Bird At Hand Is Worth Two In The Bush','Never loose what you have for what you admire.'),
  new Quote(3,'If You Cannot Fight Them Join Them.','Never fight against many cause you will not defeat them.'),
  new Quote(4,'Silence At Times Speaks Louder Than Words','Avoid repetition if the person cannot react to what you are saying keep quite.'),
  new Quote(5,'If You Want To Go Far Walk Alone','Too many cooks spoils the soup,work alone!'),
  new Quote(6,'Getting No Message Is Also A Message','If someone is silent there is a reason behind that'),

 ]                                  
}

