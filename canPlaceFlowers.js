const canPlaceFlowers = () => {
    const flowerbed = [0]
    let n = 1

    if(flowerbed.length === 1 && flowerbed[0] === 0 && n === 1)return true

    for(let i = 0;i < flowerbed.length;i++){
        if(flowerbed[i] === 0){
            if(i === 0 && flowerbed[i+1] === 0){
                n -= 1
                flowerbed[i] = 1
                if(n === 0){
                    return true
                }
        
            }else if(i === flowerbed.length-1 && flowerbed[i-1] === 0){
                n -= 1
                flowerbed[i] = 1
                if(n === 0){
                    return true
                }
        
            }
            else if(flowerbed[i-1] === 0 && flowerbed[i+1] === 0){
                n -= 1
                flowerbed[i] = 1
                if(n === 0){
                    return true
                }
        
            }
        }
    }

    return false

}

console.log(canPlaceFlowers())