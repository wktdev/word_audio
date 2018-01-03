// http://api.pearson.com/v2/dictionaries/entries?headword=proton

// https://code.responsivevoice.org/responsivevoice.js


$(function() {
 

    function getWordAndPlay(index) {
        currentWord = wordList[index]
        currentDefinition = definitionList[index]

        responsiveVoice.speak(currentWord, "US English Male", {
            rate:0.8,
            onend: function() {

                setTimeout(function() {
                   
                    responsiveVoice.speak(currentDefinition, "US English Female", {
                        pitch:0.9,
                        onend: function() {

                            getWordAndPlay(index += 1)

                        }

                    });

                }, 3000)

            }




        });

    }


    $("button").on("click", () => {

        getWordAndPlay(0)

    })

});

