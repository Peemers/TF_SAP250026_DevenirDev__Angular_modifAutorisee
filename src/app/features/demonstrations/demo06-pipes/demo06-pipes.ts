import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-demo06-pipes',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
  ],
  templateUrl: './demo06-pipes.html',
  styleUrl: './demo06-pipes.css',
})
export class Demo06Pipes {

  now: Date = new Date();

  personne: User = {
    email: "quentin.geerts@bstorm.be",
    lastname: "Geerts",
    firstname: "Quentin"
  };

}
