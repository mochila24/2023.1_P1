let p = 1
let s = 0
let n = 4
let m = 4
let t = 0
let cont = 0
while (cont < n){
    cont += 1
    s += cont
    p *= cont
}
t = s * p
console.log("O produto de ",s," por ",p," é ",t)
