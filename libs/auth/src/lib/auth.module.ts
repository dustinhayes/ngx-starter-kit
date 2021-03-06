import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwksValidationHandler, OAuthModule, OAuthService, ValidationHandler } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';

import { initializeAuth } from './oauth.init';
import { AuthState } from './auth.state';
import { LoginComponent } from './components/login/login.component';
import { ROPCService } from './ropc.service';
import { AuthService } from './auth.service';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080/auth'],
        sendAccessToken: true,
      },
    }),
  ],
  declarations: [LoginComponent],
  entryComponents: [LoginComponent],
  providers: [
    AuthState,
    ROPCService,
    AuthService,
    AuthGuard,
    { provide: ValidationHandler, useClass: JwksValidationHandler },
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [{ provide: APP_INITIALIZER, useFactory: initializeAuth, deps: [OAuthService, Store], multi: true }],
    };
  }
}
