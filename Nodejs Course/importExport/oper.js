// Import Export


const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mult = (a, b) => {
    return a * b;
}


const name = "Bilal"

// For multiple values
// module.exports.add = add;
// module.exports.sub = sub;

// we also used obj D-structuring

module.exports = { add, sub, name, mult };