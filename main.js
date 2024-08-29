function threeNumberSum(array, targetSum) {
  array.sort((a,b) => a-b)
  let threeNumberSums = []
  for(let i = 0; i < array.length; i++){
    let left = i + 1
    let right = array.length - 1
    while(left < right){
      let currentSum = array[i] + array[left] + array[right]
      if(currentSum == targetSum){
        threeNumberSums.push([array[i], array[left], array[right]])
        left++
        right--
      } else if(currentSum < targetSum){
        left++
      } else if(currentSum > targetSum){
        right--
      }
    }
  }

  return threeNumberSums
}