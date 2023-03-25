import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent implements OnInit {
  public secondPage: boolean = false;

  public email: string = '';

  constructor(
    private readonly _router: Router,
    private readonly _auth: AuthService,
  ) { }

  ngOnInit() {
    if (this._auth.isLogged) {
      this._router.navigate(['/home']);
    }
  }

  public emailSender(email: string): void {
    this.email = email;
    this.secondPage = true;
  }
}
