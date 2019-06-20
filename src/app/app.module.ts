import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeekViewComponent } from './week-view/week-view.component';
import { myService} from './myService.service';

@NgModule({
  declarations: [
    AppComponent,
    WeekViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [myService],
  bootstrap: [AppComponent]
})
export class AppModule { }
