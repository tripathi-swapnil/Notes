function findJudge(n: number, trusts: number[][]): number {
    let c = Array(n+1).fill(0).map(a => 0);
    //console.log(c);
    
    for(let [v, s] of trusts) {
        c[v]--;
        c[s]++;
    }
    //console.log(c);
    for(let i = 1; i <= n; ++i) {
       // console.log(i);
       if(c[i] === n-1) return i;
    }
    return -1;
    

};
  // public int findJudge(int N, int[][] trust) {
  //       int[] count = new int[N+1];
  //       for (int[] t: trust) {
  //           count[t[0]]--;
  //           count[t[1]]++;
  //       }
  //       for (int i = 1; i <= N; ++i) {
  //           if (count[i] == N - 1) return i;
  //       }
  //       return -1;
  //   }