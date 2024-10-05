let status = true;
const arr = [myObj1 = { name: 'arha', ag: 90 },
    { name: 'farha', ag: 50 },
    { name: 'tanisha', ag: 30 }
]

if (status) {
    const sliceArr = arr.slice(0,1)
    
    sliceArr.forEach(element => {
        console.log(element);
    });
}