import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/Router';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { DiscountPipe } from './discountPrice.pipe';
import { FilterProduct } from './filterProduct.pipe';
import { ProductDetailComponent } from './productDetail.component';
import { ProductService } from './product.service';
import { RouterGaurds } from './router.gaurd';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailComponent},
        ])
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        FilterProduct,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        RouterGaurds
    ]
})

export class ProductModule {

}
