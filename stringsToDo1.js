// 1) Remove Blanks

// goal: remove all blank spaces in a string.

function removeBlanks(string) {
    string = string.split(' ').join('');
    console.log(string);
    return string;
}

removeBlanks("Pl ayTha tF u nkyM usi c ");
removeBlanks("I can not BELIEVE it's not BUTTER");

// 2) getDigits

// goal: take a string remove the letters and return a new string of integers

function getDigits(string) {
    let thisThing  = ""
    for( let char in string) {
        if(!isNaN(string[char])){
            thisThing += string[char]
        }
    }
    Number(thisThing)
    console.log(thisThing)
    return thisThing;
}

getDigits("abc8c0d1ngd0j0!8")
getDigits("0s1a3y5w7h9a2t4?6!8?0")

// 3) Acronyms
// goal take the first character of each word capitalize it and put together to make an acronym

function acronym(string) {
    let newString = ''
    let words = string.split(' ')
    let chars = ''
    for(let index in words ) {
        chars = words[index].split('');
        if(chars.length > 0)
        newString += chars[0];
        index++;
    }
    console.log(newString.toUpperCase())
    return newString;
}

acronym(" there's no free lunch - gotta pay yer way. ")
acronym("Live from New York, it's Saturday Night!")

// 4) Count Non-spaces

// goal: count all characters in a string

function countNonSpaces(string) {
    string = string.split(' ').join('');
    let num = string.length
    console.log(num)
    return num;
}

countNonSpaces("Honey pie, you are driving me crazy")
countNonSpaces("Hello world !") 

// 5) Remove Shorter Strings

// goal: given an array of strings and a number only return array of strings that have more characters then the number

function removeShorterStrings(arr, num) {
    let newArr = []
    let nextIndex = 0

    for(let value in arr) {
        if(arr[value].length >= num) [
            newArr[nextIndex++] = arr[value]
        ]
    }
    console.log(newArr)
    return newArr;
}

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) 
