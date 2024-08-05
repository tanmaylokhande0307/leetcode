const kidsWithCandies = () => {
    const candies = [2,3,5,1,3];
    const extraCandies = 3

    const boolArray = []
    let maxValue = Number.MIN_VALUE
    for(let i = 0;i < candies.length;i++){
        if(candies[i] >= maxValue){
            maxValue = candies[i]
        }
    }

    for(let i = 0;i < candies.length;i++){
        if(candies[i] + extraCandies >= maxValue){
            boolArray.push(true)
        }
        else{
            boolArray.push(false)
        }
    }
    console.log(boolArray)
}


kidsWithCandies()