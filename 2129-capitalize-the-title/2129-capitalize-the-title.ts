function capitalizeTitle(title: string): string {
    let listWord = title.toLowerCase().split(' ');
    
    for(let i = 0; i < listWord.length; i++){
        if(listWord[i].length > 2) {
            listWord[i] = listWord[i][0].toUpperCase() + listWord[i].substring(1);
        }
    }
    return listWord.join(' ');
};