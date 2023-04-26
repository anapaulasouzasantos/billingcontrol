export default function normalizeValue(value){
    const normalizedValue = (`R$ ${((value/100).toFixed(2)).replace('.', ',')}`);
    return normalizedValue;
}