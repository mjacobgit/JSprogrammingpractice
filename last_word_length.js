// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

function last_word_length(s){
    let string_array = []; // initializing an empty string
    string_array = s.split(" "); // Splitting the string at space separator and assiging it to the array. 
    let count = 0; // Initializing count variable.   

    while(count < string_array.length){ // Using a while loop to traverse the array
        let last_element_length; // initializing a last element length variable
        last_element_length = string_array.pop().length; // Checking the length of the last element in the array using pop.
        
        if( last_element_length != 0){ // Checking if its not an empty element.
            return last_element_length; // If its not returning the size of the last element.
        }
    }
}

console.log(last_word_length("My name is Manu  "));