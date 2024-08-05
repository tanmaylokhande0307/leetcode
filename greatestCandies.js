const kidsWithCandies = () => {
    const candies = [2,3,5,1,3];
    const extraCandies = 3

    const boolArray = []
    let maxValue = Math.max(...candies)
    for(let i = 0;i < candies.length;i++){
        boolArray.push(candies[i]+extraCandies >= maxValue)
    }
    console.log(boolArray)
}


kidsWithCandies()