const student={
    name:'sakib',
    id:121,
    isSingle:true,
    friends:['apu','raaz','salman'],
    car:{
        brand:'tesla',
        price:50000000,
        manufacturer:{
            name:'tesla',
            ceo:'Elon Mask'
        }
    },
    movies : [
        {name:'no 1 sakib khan',year:2015},
        {name:'king khan',year:2018}
    ]
}

console.log(student.car.manufacturer)