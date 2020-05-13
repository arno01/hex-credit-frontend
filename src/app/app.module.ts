import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BigNumberDirective, BigNumberFormat, BigNumberMax, BigNumberMin } from './directives/bignumber/bignumber';
import {MetamaskService} from './services/web3/web3.service';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BigNumberDirective,
    BigNumberFormat,
    BigNumberMax,
    BigNumberMin
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    MetamaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
