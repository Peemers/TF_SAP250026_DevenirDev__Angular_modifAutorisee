import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Authentication } from '../../../core/services/authentication';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private _authenticationService: Authentication = inject(Authentication);

  isConnected: boolean = this._authenticationService.status();

}
