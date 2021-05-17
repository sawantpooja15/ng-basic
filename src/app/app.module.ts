import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductTagComponent } from './product-tag/product-tag.component';
import { AdminComponent } from './admin/admin.component';
import { LearnIfComponent } from './learn-if/learn-if.component';
import { TranformedWishPipe } from './tranformed-wish.pipe';
import { AdminModule } from './admin.module';

import { ReactiveformBasicComponent } from './reactiveform-basic/reactiveform-basic.component';

import { ReactiveFomrsComponent } from './reactive-fomrs/reactive-fomrs.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductPriceComponent,
    ProductCardComponent,
    ProductDescComponent,
    ProductTagComponent,
    AdminComponent,
    LearnIfComponent,
    TranformedWishPipe,
    ReactiveformBasicComponent,
    TemplateDrivenFormComponent,
    ReactiveFomrsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
