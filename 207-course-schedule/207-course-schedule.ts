function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let dependencyMat = {};
    let visitedCourse = [];
    
    
    for(let [c1, c2] of prerequisites) {
        if(!dependencyMat[c2]) {
            dependencyMat[c2] = [c1]
        } else {
            dependencyMat[c2].push(c1);
        }
    }
    
    function isCourseVisited(node) {
        if(visitedCourse[node]){
            return false;
        }
        if(dependencyMat[node] !==undefined){
            if (dependencyMat[node].length === 0){
                return true;
            }
            visitedCourse[node] = true;
            for(let val of dependencyMat[node]){
                if(!isCourseVisited(val)){
                    return false
                }
            }
            visitedCourse[node] = false;
            dependencyMat[node] = [];
        }
        return true;

    }
    
    
    for(let k in dependencyMat) {
        if(!isCourseVisited(k)) {
            return false;
        }
    }
    return true;
    

};