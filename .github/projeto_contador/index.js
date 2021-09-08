const button = document.getElementById("countButton");
button.addEventListener("click", function() {  

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    // Isto muda todas as letras para minúsculas

    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
    const letterCounts = {};
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }    
    

   
    let currentWord = typedText.split(/\s+/);
    console.log(currentWord)
    const wordCounts = {};
    for (let i = 0; i < currentWord.length; i ++){

        if (wordCounts[currentWord[i]] === undefined) {
            wordCounts[currentWord[i]] = 1; 
        } else { 
            wordCounts[currentWord[i]]++; 
        }
    }
    for (let words in wordCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${words}": ${wordCounts[words]}, `;
        span.innerText = textContent; 
        const palavras = document.getElementById("wordsDiv");
        palavras.appendChild(span); 
    } 

})
     
     

