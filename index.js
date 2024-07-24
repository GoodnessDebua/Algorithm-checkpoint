function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 1; 
    let vowelCounter = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (char !== '.') {
            lengthCounter++;
            if (vowels.includes(char)) {
                vowelCounter++;
            }
            if (char === ' ') {
                wordCounter++;
            }
        }
    }

    return {
        length: lengthCounter,
        words: wordCounter,
        vowels: vowelCounter
    };
}



