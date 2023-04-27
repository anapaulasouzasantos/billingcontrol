export default function normalizeDate(date){
    const dueDate = new Date(date);
    const day = dueDate.getDate().toString().padStart(2, '0');
    const month = (dueDate.getMonth()+1).toString().padStart(2, '0');
    const year = dueDate.getFullYear().toString();
    const normalizedDate = (`${day}/${month}/${year}`);
    return normalizedDate;
}