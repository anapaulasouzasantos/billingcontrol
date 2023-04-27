export default function normalizeTel(tel) {
    tel = tel.replace(/\D/g, '');

    if (tel.length === 11) {
        tel = tel.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else {
        tel = tel.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
    }
    return tel;
}