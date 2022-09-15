const aCar = {
    owner : "Joe Bloggs",
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc : '1.8'
    },
    registration : '201WD1058',
  };
  aCar.mileage = 10000;
  aCar.colour = {
        exterior : {
        colour : 'red'
    },
    interior : {
        texture : 'leather',
        shade : 'cream'
    }
  };
  console.log('It is a '+aCar.colour.exterior.colour+' car, '+aCar.mileage+' mileage, with '+aCar.colour.interior.texture+' interior..');