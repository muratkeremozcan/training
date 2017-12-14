function CaretakerMedallion(caretaker) {
    switch (caretaker) {
        case "PixelPriest":
            this.bronzeBanner = 'Omne initium est a pixel';
        case "FontFriar":
            this.circumscribedSquare = 'Venit Comic Sans';
        case "StyleSensei":
            this.innerRing = 'Ars autem est in aeternum';
    }
}

// Example uses of our CaretakerMedallion function
// Note the properties for each example

var medallion1 = new CaretakerMedallion('PixelPriest');
/*
  CaretakerMedallion {
    bronzeBanner: 'Omne initium est a pixel', 
    circumscribedSquare: 'Venit Comic Sans', 
    innerRing: 'Ars autem est in aeternum'
  }
*/

var medallion2 = new CaretakerMedallion('StyleSensei');
/*
  CaretakerMedallion {
    innerRing: 'Ars autem est in aeternum'
  }
*/