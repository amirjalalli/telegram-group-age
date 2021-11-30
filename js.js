var groupUsers = [
    {id :1 , name : "ali", age : 19},
    {id :2 , name : "amir", age : 22},
    {id :3 , name : "amin", age : 21},
    {id :4 , name : "mat", age : 25},
    {id :5 , name : "ari", age : 24},
    {id :6 , name : "mohammd", age : 25},
    {id :7 , name : "asghar", age : 26},
    {id :8 , name : "reze", age : 27},
    {id :9 , name : "essi", age : 28},
    {id :10 , name : "mahnaz", age : 29},
    {id :11 , name : "mona", age : 30},
]

var isAll = groupUsers.every(function(user){
    
    return user.age > 18
})

if ( isAll == true ) {
    console.log(" شما می توانید تماس دریافت کنید")
} else {
    console.log(
    "شما نمیتوانید تماس بگیرید"
    )
}
