class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-'\s]/gi, "")
  }

  static titleize(string) {
    let title = []
    string = string[0].toUpperCase() +string.slice(1)
    let words = string.split(' ')
    let excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (const word of words) {
      if (excludedWords.includes(word)) {
        title.push(word)
      }
      else if (!(excludedWords.includes(word))) {
        title.push(word[0].toUpperCase() + word.slice(1))
      }
      
    }
    return title.join(" ")
    
    
  }
}


// let excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
//     let title = []
//     let words = string.split(" ")
//     for (const word of words) {
//       for (const preposition of excludedWords) {
//         if (!(word == preposition)) {
//           title.push(word[0].toUpperCase() + word.slice(1))
//         }
//         else title.push(word)
//       }
      
//     }
//     return title.join(" ")
    
//   }