function addWords() {
    var input = document.getElementById("char").value;
    input = input.toLowerCase();
    var consonantWord = [];
    var vowelWord = [];
    var trueVowel = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "u" || input[i] == "u") {
            trueVowel = true;
            break;
        }
    }

    if(trueVowel == true){
        vowelWord.push(input);
    }
    else{
        consonantWord.push(input);
    }
    console.log(vowelWord);
    console.log(consonantWord);


    for(let j=0; j<vowelWord.length; j++){
        document.getElementById("vowels").innerHTML += "<li>" + vowelWord[j] + "</li>"
    }
    for(let k=0; k<consonantWord.length; k++){
        document.getElementById("consonants").innerHTML += "<li>" + consonantWord[k] + "</li>"
    }
}