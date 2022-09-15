const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
        {name:"Pat Smith",address:"Main Street"},
        {name:"Sheila Dwyer",address:"High Street"}
    ],
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc : '1.8'
    },
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
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
//console.log('First owner : ' + aCar.previous_owners[0].name + '-'+ aCar.previous_owners[0].adress)
for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name+' - '+aCar.previous_owners[i].address) ;
} 
for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}