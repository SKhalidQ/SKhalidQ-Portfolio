import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../app.material';

import { DialogComponent } from '../components/dialog/dialog.component';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

import { DisableRightClickDirective } from '../directives/disable-right-click/disable-right-click.directive';
import { DisableTextSelectionDirective } from '../directives/disable-text-selection/disable-text-selection.directive';

import { SocialButtonLogoPipe } from '../pipes/social-button-logo/social-button-logo.pipe';
import { TranslatePipe } from '../pipes/translate/translate.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    MenuComponent,
    SnackbarComponent,
    DialogComponent,

    TranslatePipe,
    SocialButtonLogoPipe,

    DisableRightClickDirective,
    DisableTextSelectionDirective,
  ],
  imports: [CommonModule, RouterModule, AppMaterialModule],
  exports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,

    HeaderComponent,
    SidenavComponent,
    MenuComponent,
    SnackbarComponent,
    DialogComponent,

    TranslatePipe,
    SocialButtonLogoPipe,

    DisableRightClickDirective,
    DisableTextSelectionDirective,
  ],
})
export class SharedModule {}
