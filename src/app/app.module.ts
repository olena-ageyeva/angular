import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ProductDetailComponent } from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component'
import {RouterModule} from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [ 
    AppComponent,    
    WelcomeComponent
  ],
  imports: [ 
    BrowserModule,    
    HttpClientModule,
    RouterModule.forRoot([     
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
