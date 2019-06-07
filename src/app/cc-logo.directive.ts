// import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

// @Directive({
//   selector: '[ccLogo]'
// })

// enum CardType { VISA = 'visa', MASTERCARD = 'mastercard', 
// AMERICAN_EXPRESS = 'american-express', UNKNOWN = 'unknown'}
// export class CreditCardImageDirective implements OnChanges {

//   @Input() cardNumber: string;

//   @HostBinding('src')
//   imageSource;
//   constructor() { }

//   ngOnChanges(){
//     this.imageSource = 'assets/card-types/' + this.getCardTypeFromNumber() + '.png';this.imageSource = '';
//   }

//   getCardTypeFromNumber(): CardType {
//     if (this.cardNumber) {
//       if (this.cardNumber.startsWith('37')) {
//         return CardType.AMERICAN_EXPRESS;
//       } else if (this.cardNumber.startsWith('4')) {
//         return CardType.VISA;
//       } else if (this.cardNumber.startsWith('5')) {
//         return CardType.MASTERCARD;
//       }
//     }
//     return CardType.UNKNOWN;
//   }

// }
