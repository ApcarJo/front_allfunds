export const convertDate = (date) => {
    let newDate = new Date (date)
    let day = newDate.getDate();
    let month = newDate.getMonth()+1;
    let year = newDate.getFullYear();
    let date2= day+'/'+month+'/'+year;
    return date2;
}