import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Never Fight A loosing battle','If you know you are going to loose the fight retreat.',new Date(2020,7,14)),
    new Quote(2, 'A Bird At Hand Is Worth Two In The Bush','Never loose what you have for what you admire.',new Date(2010,3,24)),
    new Quote(3,'If You Cannot Fight Them Join Them.','Never fight against many cause you will not defeat them.',new Date(2022,8,7)),
    new Quote(4,'Silence At Times Speaks Louder Than Words','Avoid repetition if the person cannot react to what you are saying keep quite.',new Date(2020,12,18)),
    new Quote(5,'If You Want To Go Far Walk Alone','Too many cooks spoils the soup,work alone!',new Date(1998,6,30)),
    new Quote(6,'Getting No Message Is Also A Message','If someone is silent there is a reason behind that',new Date(2000,11,4)),
  ]
  
 toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?')

      if (toDelete)
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
