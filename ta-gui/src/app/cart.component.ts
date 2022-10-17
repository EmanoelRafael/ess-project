import { Component, OnInit} from '@angular/core'
import { StoreService } from './store.service';

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent {
    constructor(private storeService: StoreService) {};

    
    title = 'cart';
}