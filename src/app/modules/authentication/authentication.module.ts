import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authenticationRoutes } from './authentication.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authenticationRoutes)],
})
export class AuthenticationModule {}
