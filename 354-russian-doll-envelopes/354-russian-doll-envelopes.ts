var maxEnvelopes = function (envelopes) {
  // Step 1: sort by width
  envelopes.sort((env1, env2) => {
    if (env2[0] === env1[0]) return env2[1] - env1[1];
    return env1[0] - env2[0];
  });

  // max envelops we can fit
  let maxEnvelopes = 0;

  // sorted heights
  const sortedEnvelopes = [];

  // Step 2: sort by height
  for (let env of envelopes) {
    let left = 0,
      right = sortedEnvelopes.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      // middle envelop's height is greater or equal than new envelope
      // then we need to insert this new envelope on left side
      if (sortedEnvelopes[mid][1] >= env[1]) right = mid - 1;
      // insert on right side of mid
      else left = mid + 1;
    }

    // insert envelope
    sortedEnvelopes[left] = env;

    // calculate maximum number of envelopes
    // all envelopes on left of this can be inserted inside of this enevelope
    maxEnvelopes = Math.max(maxEnvelopes, left + 1);
  }

  return maxEnvelopes;
};