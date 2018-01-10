


function getTriangleArea(a, h)
{   var triangleField = a * h / 2;
    if (a > 0 && h > 0) {
    return triangleField; 
    
    console.log('Twoj wynik to: '+triangleField);
    
    }else {
      return 'Nieprawidłowe dane';
      
    console.log('Nieprawidlowe dane');
    }
    
}


console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(31, 45);
console.log(getTriangleArea(31, 45));
var triangle2Area = getTriangleArea(19, 19);
console.log(getTriangleArea(19, 19));
var triangle3Area = getTriangleArea(62, 41);
console.log(getTriangleArea(62, 41));




