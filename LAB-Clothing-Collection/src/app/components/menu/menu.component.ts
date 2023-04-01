import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(
    private readonly _router: Router,
    private readonly _auth: AuthService,
  ) { }

  public isGroupActive(routeGroup: 'dashboard' | 'collection' | 'model'): boolean {
    const currentRoute = this._router.routerState.snapshot.url;
    switch (routeGroup) {
      case 'dashboard':
        return currentRoute === '/home';
      case 'collection':
        return currentRoute === '/collection-listing'
          || currentRoute.startsWith('/collection-editing')
          || currentRoute === '/collection-creating';
      case 'model':
        return currentRoute === '/models-listing'
          || currentRoute.startsWith('/models-editing')
          || currentRoute === '/models-creating';
      default:
        return false;
    }
  }

  public logoutHandler(): void {
    this._auth.logoff();
    this._router.navigate(['/sign-in']);
  }
}
