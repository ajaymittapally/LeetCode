/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let  present = init;
    const increment = ()=>{
        return ++present;

    }
    const reset =()=>{
        return present=init;

    }
    const decrement =()=>{
        return --present;

    }
    
    return {increment,reset,decrement}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */