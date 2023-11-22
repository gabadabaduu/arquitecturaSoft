import { Component } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {

  stripe: any;
  card: any;
  cardElement: any;

  constructor() {
    this.stripe = Stripe('your_stripe_public_key');
  }

  ngOnInit(): void {
    this.cardElement = this.stripe.elements().create('card');
    this.cardElement.mount('#card-element');
  }

  async pay(): Promise<void> {
    const { paymentMethod, error } = await this.stripe.createPaymentMethod({
      type: 'card',
      card: this.cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // Send the paymentMethod.id to your server to complete the payment
    }
  }

}


function Stripe(arg0: string): any {
  throw new Error('Function not implemented.');
}

