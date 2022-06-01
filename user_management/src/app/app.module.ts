import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {
  AlertModule,
  ButtonModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ModalModule,
  NavModule,
  TableModule,
  UtilitiesModule,
} from '@coreui/angular';
import { HeaderComponent } from './components/header/header.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'signup', component: AddUserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddUserComponent,
    UsersComponent,
    DetailComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    Ng2SearchPipeModule,
    AlertModule,
    IconModule,
    GridModule,
    FormModule,
    ButtonModule,
    FooterModule,
    HeaderModule,
    NavModule,
    TableModule,
    UtilitiesModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
