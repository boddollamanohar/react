
let INCR = 'INCR'
let DECR = 'DECR'
let incrAction = () => {
    // console.log("inside - incraction")
    return { type: INCR }
}
let decrAction = () => {
    // console.log("inside -decraction")
    return { type: DECR }
}

export { incrAction, decrAction, INCR, DECR }