import { Component, inject } from '@angular/core';
import { Authentication } from '../../../core/services/authentication';

@Component({
  selector: 'app-demo12-services-di',
  imports: [],
  templateUrl: './demo12-services-di.html',
  styleUrl: './demo12-services-di.css',
})
export class Demo12ServicesDi {

  private _authenticationService: Authentication = inject(Authentication);

  isConnected: boolean = this._authenticationService.status();

  login() {
    this._authenticationService.login();
    this.isConnected = this._authenticationService.status();
  }
  
  logout() {
    this._authenticationService.logout();
    this.isConnected = this._authenticationService.status();
  }
}
