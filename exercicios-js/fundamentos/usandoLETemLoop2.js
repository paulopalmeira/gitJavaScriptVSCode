const funcs = []

for (let i=0; i<5; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[1]()
funcs[0]()