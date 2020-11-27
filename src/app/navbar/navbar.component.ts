import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthState } from '../auth/store/auth.reducer';
import { User } from '../auth/user.model';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  isAuthenticated: boolean = false;
  isLoaded: boolean = false;
  user$: Observable<AuthState>;
  user: User;

  private subscriptions: Subscription[] = [];

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.isLoaded = false;
    this.user$ = this.store.select('auth');
    this.user$.subscribe(({ user }) => {
      this.isAuthenticated = !!user;
      this.user = user;
      this.isLoaded = true;
    });
  }

  onOpen() {
    this.isOpen = !this.isOpen;
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  ngOnDestroy() {
    //this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
