

const props = {
    cols: 3,
}

function calculateClass() {
    let finalValue = 'myGrid';
    finalValue += ` cols${props.cols}`
    // if (props.cols === 2) {
    //     finalValue += ' cols2'
    // } else if (props.cols === 1) {
    //     finalValue += ' cols1'
    // }
    return finalValue;
}
const rez = calculateClass()
console.log('rez ===', rez);