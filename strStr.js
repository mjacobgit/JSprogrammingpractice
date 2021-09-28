function strStr(haystack,needle){
    for (let i = 0; i <= (haystack.length - needle.length); i++){
        if(needle.length === 0) return 0;
        else if(haystack.substring(i,(i+needle.length)) === needle) return i
        
    }
    return -1;
        
   

}
console.log(strStr('Hello','lo'))


return haystack.search(needle)