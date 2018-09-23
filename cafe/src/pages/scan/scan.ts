import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
 
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  //slideOneForm: FormGroup;
  createdCodea: any;
  //qrData="";
 
  createdCode = null;
  scannedCode = null;
  constructor(private barcodeScanner: BarcodeScanner, public formBuilder: FormBuilder) {  
  
   
   }
 
   //save(){
   // console.log('data',this.slideOneForm.value)
  // }





 /* createCode() {
    console.log(this.qrData,'qr code')
    this.createdCode = this.qrData;
    console.log(this.createdCode,'created code')
  }*/
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }
 
}
