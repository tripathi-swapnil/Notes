function simplifyPath(path: string): string {
    const cannonicalPathList = [];
    const pathList = path.split('/');
    for(let i = 0; i< pathList.length; i++) {
        const currentItem = pathList[i];
        
        if(currentItem === '.' || currentItem === '') {
           continue;
         }
        if(currentItem === '..') {
           cannonicalPathList.pop();
            continue;
         }
        cannonicalPathList.push(currentItem);
    }
    return '/'+cannonicalPathList.join('/');
    // const pathNew = '/'+cannonicalPathList.join('/');
    // console.log(pathNew);
    // return pathNew;

};