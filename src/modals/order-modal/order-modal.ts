
import { Component, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CartHandler } from 'src/providers/cart-handler';
import { OrderByEmailHandler } from 'src/providers/order-by-email-handler';
import { UNITS } from 'src/providers/regional-units';

@Component({
  selector: 'order-modal',
  templateUrl: 'order-modal.html',
  styleUrls: ['order-modal.scss'],
})
export class OrderModal {

  title: string = "ΠΡΟΣΩΠΙΚΑ ΣΤΟΙΧΕΙΑ";
  buttonLabel: string = "Επιβεβαίωση";
  regionalUnits = [];
  
  forms = {
    name: "Όνομα",
    surname: "Επώνυμο",
    phone: "Τηλέφωνο επικοινωνίας",
    city: "Πόλη",
    regUnit: "Νομός",
    zip: "Τ.Κ",
    street: "Οδός",
    number: "Αριθμός",
    email: "e-mail" 
  }

  customerInfo: {
    name: string,
    surname: string,
    phone: string,
    city: string,
    regUnit: string,
    zip: string,
    street: string,
    number: string,
    email: string
  } = {
    name: null,
    surname: null,
    phone: null,
    city: null,
    regUnit: null,
    zip: null,
    street: null,
    number: null,
    email: null
  }

  constructor(
    private modalCtrl: ModalController,
    private emailOrder: OrderByEmailHandler,
    private alertController: AlertController,
    private cart: CartHandler
  ) {
    this.regionalUnits = UNITS;
  }

  // FIXME : handle all functionality on a page rather than on modal maybe
  proceedWithOrder() {
    this.emailOrder.sendOrderEmail(this.customerInfo, this.configProductsString());
    this.dismiss();
    this.cart.deleteProducts();
  }

  private configProductsString(): string {
    let products: string = '';

    this.cart.getProductsInCart().forEach(prod => {
      products += 
        prod.name + '\r\n' +
        'ΤΙΜΗ: ' + (parseFloat(prod.price.replace(/,/g, '.')) * (prod.weight ? prod.weight : prod.quantity)) + 
        '\r\n \r\n'
    })

    return products;
  }

  // Show alert popup for order confirmation
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Επιβεβαίωση παραγγελίας',
      message: '<strong>Θα θέλατε να γίνει καταχώρηση της παραγγελίας σας;</strong>',
      buttons: [
        {
          text: 'Όχι',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Ναι',
          handler: () => {
            this.proceedWithOrder();
          }
        }
      ]
    });

    await alert.present();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}