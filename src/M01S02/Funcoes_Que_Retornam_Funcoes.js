function contador(){
    let acc = 0

    return function(){
        acc += 1
        return acc
    }
}

module.exports = contador