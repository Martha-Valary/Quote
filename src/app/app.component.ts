import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 quotes:Quote[] = [
  new Quote(1,'Never Fight A loosing battle','If you know you are going to loose the fight retreat.',new Date(2020,7,14)),
  new Quote(2,'A Bird At Hand Is Worth Two In The Bush','Never loose what you have for what you admire.',new Date(2010,3,24)),
  new Quote(3,'If You Cannot Fight Them Join Them.','Never fight against many cause you will not defeat them.',new Date(2022,8,7)),
  new Quote(4,'Silence At Times Speaks Louder Than Words','Avoid repetition if the person cannot react to what you are saying keep quite.',new Date(2020,12,18)),
  new Quote(5,'If You Want To Go Far Walk Alone','Too many cooks spoils the soup,work alone!',new Date(1998,6,30)),
  new Quote(6,'Getting No Message Is Also A Message','If someone is silent there is a reason behind that',new Date(2000,11,4)),
 ]                                  
}

