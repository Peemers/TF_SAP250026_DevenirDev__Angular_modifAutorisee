import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-demo09-structural-directives',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './demo09-structural-directives.html',
  styleUrl: './demo09-structural-directives.css',
})
export class Demo09StructuralDirectives {

  isShowed: boolean = true;
  users: User[] = [
    { email: 'quentin.geerts@bstorm.be', firstname: 'Quentin', lastname: 'Geerts' },
    { email: 'thierry.morre@cognitic.be', firstname: 'Thierry', lastname: 'Morre' },
    { email: 'michael.person@cognitic.be', firstname: 'Michael', lastname: 'Person' },
    { email: 'mauritcio.fivez@bstorm.be', firstname: 'Mauritcio', lastname: 'Fivez' },
  ];

  users2: User[] = [];

  toggleShowed() {
    this.isShowed = !this.isShowed;
  }

}
