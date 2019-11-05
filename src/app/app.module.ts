import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { LabelService } from './services/label/label.service';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LabelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
