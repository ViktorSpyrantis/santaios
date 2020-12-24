
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartHandler } from 'src/providers/cart-handler';

@Component({
  selector: 'order-modal',
  templateUrl: 'order-modal.html',
  styleUrls: ['order-modal.scss'],
})
export class OrderModal {

  title: string = "ΠΡΟΣΩΠΙΚΑ ΣΤΟΙΧΕΙΑ";
  buttonLabel: string = "Επιβεβαίωση";
  
  forms = {
    name: "Όνομα",
    surname: "Επώνυμο",
    phone: "Τηλέφωνο επικοινωνίας",
    city: "Πόλη",
    state: "Νομός",
    zip: "Τ.Κ",
    street: "Οδός",
    number: "Αριθμός",
    email: "e-mail" 
  }

  constructor(
    private modalCtrl: ModalController,
  ) {
    
  }

  proceedWithOrder() {
    console.log("$$$$")
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}