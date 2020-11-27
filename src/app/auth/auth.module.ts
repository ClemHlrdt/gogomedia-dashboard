import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import * as fromAuth from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [],
})
export class AuthModule {}
