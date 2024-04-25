//synchronous code is run line by line, and it waits untils previuos line finishes
// first()

// second()

// thirt()

//esy way to show ascynchronouse code in works is to use setTimeout

setTimeout(()=> {
    console.log('5 sekundes ateityje')
    setTimeout(()=> {
        console.log('5 sekundes ateityje')
    }, 5000)
}, 5000)



