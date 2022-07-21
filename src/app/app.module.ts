import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componant/header/header.component';
import { NavbarComponent } from './componant/navbar/navbar.component';
import { FooterComponent } from './componant/footer/footer.component';
import { SidenavbarComponent } from './componant/sidenavbar/sidenavbar.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './componant/not-found/not-found.component';
import { AboutUsComponent } from './componant/about-us/about-us.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SidenavbarComponent,
    NotFoundComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS,useClass: AuthTokenInterceptorService, multi: true }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
