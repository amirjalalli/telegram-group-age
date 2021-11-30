var ages = [19, 20 , 22 , 23 ,18]

var isAll = ages.every(function(age){
    console.log(age)
    return age > 18
})

console.log(isAll)