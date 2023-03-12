
function palindrome(str) {
    let reverse = str.split("").reverse().join("");
    // console.log(reverse);
    return str == reverse;
}
console.log(palindrome("NITIN"));

console.log("***************************************************************************")

function pal(str) {
    var newstring = str.split("").reverse().join("");
    //console.log(newstring);
    if(str===newstring){
        console.log("Palindrome")
    }
    else{
        console.log("Not pallindrome")
    }
  
}
pal("12344321")

console.log("****************************************************************************")
function palindrome(str) {
    let inputreverse = str.split("").reverse().join("");
    // console.log(reverse);
    return str == inputreverse;
}
console.log(palindrome("madam"));
console.log("*************************************************************************")

function Newpalindrome(str){
    var newstr=Newpalindrome.split("").reverse().join("");
    if(Newpalindrome===newstr){
        console.log("string is palindrome")      
    }
    else{
        console.log("Not palindrome")
    }

}
Newpalindrome("Hello")



