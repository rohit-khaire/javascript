let name = "Rohit"
const age = 19
name = new String('Khaire')
console.log(name+" : "+age+" Age")

console.log(`${name} : ${age} Age`);
console.log(name[0]) //=> K
console.log(name.toUpperCase()) //=> KHAIRE
console.log(name.length)
console.log(name.charAt(2))
console.log(name.indexOf('r'))
console.log(name.substring(0,3))
console.log(name.split('i'))
//console.log(name.slice(0,5))
console.log(name.slice(-6,2))
console.log("   RK   ".trimEnd())

console.log("https://rohit%20khaire.com".replace('%20','-'))
console.log("khairerohit".includes('Rohit'))
console.log("Rohit".bold())