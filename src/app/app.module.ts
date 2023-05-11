import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component'
import { CascadeSelectModule } from 'primeng/cascadeselect'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { AccountSettingsComponent } from './modules/authorized/pages/account-settings/account-settings.component'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion'
import { InputMaskModule } from 'primeng/inputmask'
import { InplaceModule } from 'primeng/inplace'
import { InputTextModule } from 'primeng/inputtext';
import { DialogService } from 'primeng/dynamicdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {
  UserMenuComponent,
} from './modules/authorized/user-menu/user-menu.component'
import { MenuModule } from 'primeng/menu'
import { ToastModule } from 'primeng/toast'
import { MessagesModule } from 'primeng/messages'
import { PasswordModule } from 'primeng/password';
import { ModalConfirmComponent } from './modules/authorized/modals/modal-confirm/modal-confirm.component'
import { DropdownModule } from 'primeng/dropdown'
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AccountSettingsComponent,
    UserMenuComponent,
    ModalConfirmComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CascadeSelectModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
    CheckboxModule,
    AccordionModule,
    InputMaskModule,
    InplaceModule,
    InputTextModule,
    ProgressSpinnerModule,
    MenuModule,
    ToastModule,
    MessagesModule,
    PasswordModule,
    DropdownModule,
    NgOptimizedImage,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
