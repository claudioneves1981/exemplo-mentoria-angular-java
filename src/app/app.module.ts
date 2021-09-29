import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CampeaoListComponent } from './campeoes/campeao-list.component';
import { StarComponent } from './star/star.component';
import { Error404Component } from './error-404/erro-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CampeaoInfoComponent } from './campeoes/campeao-info.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CampeaoListComponent,
    StarComponent,
    Error404Component,
    NavBarComponent,
    CampeaoInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'campeao', component: CampeaoListComponent
      },
      {
        path: 'campeao/info/:id', component: CampeaoInfoComponent
      },
      {
        path: '',redirectTo: 'campeao', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
