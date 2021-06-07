import { NgModule } from "@angular/core";
import { SharedModule } from "../modules/shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ProductComponent
  ],
  exports: [ HomeComponent ]
})
export class PagesModule {}
