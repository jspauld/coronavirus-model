export const weightedMean = (arrValues, arrWeights) => {
    const result = arrValues
      .map((value, i) => {
        const weight = arrWeights[i]
        const sum = value * weight
        return [sum, weight]
      })
      .reduce((p, c) => [p[0] + c[0], p[1] + c[1]], [0, 0])
  
    return result[0] / result[1]
  }