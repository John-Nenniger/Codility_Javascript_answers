function capitalize(str){
  let results = []
  let words = str.split(" ");
  words.forEach(function(word){
    results.push(word[0].toUpperCase() + word.slice(1))
  })
  return results.join(" ")
}


console.log(capitalize("the best thing I've ever done"))
