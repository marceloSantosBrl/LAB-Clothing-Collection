import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output('clickEvent') public clickEvent = new EventEmitter<any>();

  constructor(
    private readonly _auth: AuthService,
    private readonly _router: Router,
  ) { }

  public logoffHandler(): void {
    this._auth.logoff();
    this._router.navigate(['/sign-up']);
  }
}
