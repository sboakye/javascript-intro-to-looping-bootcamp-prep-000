
function forLoop (array){
for (let i = 1; i < 26; i++) {
array.push(`I am ${i} strange loop${i > 1 ? 's' : ''}.`)
}return array
}

function whileLoop(n){
  while ( n > 0){
    console.log(n--)
  } return 'done'
}


function doWhileLoop(array){
  return function maybeTrue() {
    return array
  }
  do{
    array--
  }while (array.length > 0 && maybeTrue())

}
