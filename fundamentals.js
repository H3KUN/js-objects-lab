const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
        {name:"Pat Smith",adress:"Main Street"},
        {name:"Sheila Dwyer",adress:"High Street"}
    ],
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
  console.log('First owner : ' + aCar.previous_owners[0].name + '-'+ aCar.previous_owners[0].adress)