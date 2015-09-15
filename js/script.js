// /*    ---------------                     BEGINNING OF MULTILINE COMMENT OF ALL CODE                      ----------------


//    ASSIGNMENT1  - JOE MCDONALD   SEPT 2015

//  ---------------------------------------------       STEP 1    camelCase -------

// someMonth
// function getCurrentMonth
// CURRENT_MONTH
// summerMonths
// myLibaryFunction

//  -----------------------------------------------      STEP 2  LITERAL EXPRESSIONS -------------

//  numeric literal expression

var nOneHundred = 100; 
console.log (nOneHundred); 

// string literal expression

var  sString = "this is a string literal";
console.log (sString); 

// boolean literal expression

var x = 100, y = 100 ; 
console.log (x == y); 

//  null literal expression

var x = 100, y = null;
x = null;					// erase the contents of variable 
console.log(x); 
console.log(y);

//  --------------------------------------------      STEP 3   COMPLEX VARIABLE EXPRESSIONS  -------------
  
var a1Var = 2 + (4 / 6) * 8;
var a2Var = Math.PI * a1Var * 2;
var a3Var = a2Var + "%" + a1Var;
var a4Var = "(" + a2Var + ") % (" + a1Var + ")";

//  ---------------------------------------------      STEP 4   DECLARING   -------------
var sFirstName, sLastName, sStreetAddress, sCity, sState, nZipCode, nYourAge, sReferralSource, bMayWeContactYou; 

//  ---------------------------------------------      STEP 5   DECLARING AND ASSIGNING  -------------

//  method 1
var sFirstName; 
var	sLastName;
var	sStreetAddress;
var	sCity;
var	sState;
var	nZipCode;
var nYourAge;
var	sReferralSource; 
var	bMayWeContactYou;

sFirstName = "Joe";
sLastName = "McDonald";
sStreetAddress = "123 Anystreet Avenue"; 
City = "San Diego"; 
sState = "CA";
nZipCode = 92123;
nYourAge = 40; 
sReferralSource = "Church" ; 
bMayWeContactYou = true ; 

//  method 2
var sFirstName = "Joe";
var sLastName = "McDonald";
var	sStreetAddress = "123 Anystreet Avenue"; 
var	City = "San Diego"; 
var	sState = "CA";
var	nZipCode = 92123;
var	nYourAge = 40; 
var	sReferralSource = "Church" ; 
var	bMayWeContactYou = true ; 

//  method 3
var sFirstName = "Joe", sLastName = "McDonald", sStreetAddress = "123 Anystreet Avenue", sCity = "San Diego", sState = "CA", nZipCode = 92123, nYourAge = 40, sReferralSource = "Church" , bMayWeContactYou = true ; 

//  -----------------------------------------------      STEP 6  COERCED   -------------
var nNumber = 40;
var sString = "Joseph";
var sFirstResult = (nNumber += sString); 
console.log ("First Result is "  + " " + sFirstResult + "         " +" nNumber is converted to: " + nNumber + "       " + "nNumber typeof is coerced to: " + typeof nNumber);      //coerced to string

var bBoolean = true;
var sString = "Joseph";
var sSecondResult = (bBoolean += sString);     
console.log ("Second Result is "  + " " + sSecondResult + "         " + " bBoolean is coerced to: " + bBoolean + "      "+ "bBoolean typeof is coerced to: " + typeof bBoolean);   //coerced to string

var bBoolean = true;
var nNumber = 40;
var nThirdResult = (bBoolean += nNumber); 
console.log ("Third Result is "  + " " + nThirdResult + "         " + " bBoolean is coerced to: " + bBoolean + "      " + "bBoolean typeof is coerced to: " + typeof bBoolean);     //coerced to number

//  -------------- -------------------------------     STEP 7   HOISTING UNDEFINED  ----------


//  <!DOCTYPE html>
//  <html>
//  <body
//  <script>
 

var x; 			       // Declare x
console.log( "value of x is " + " " + x);
x = 5; 			       // initializes x - Assign 5 to x 


//   </script>
//   </body>
//   </html> 


//  -------------------------------------------      STEP 8    STRING LITERAL QUOTES -------------

var someString = "Who once said, 'Only two things are infinite, the universe and human stupidity, and I'm not sure about the former'";
console.log(someString);

//  --------------------------------------------      STEP 9    NULL UNDEFINED VALUE -------------

var nullString = null;
var undefString;
console.log("value is NULL: " + nullString); 
console.log("value is UNDEFINED: " + undefString);

//  --------------------------------------------      STEP 10    TYPEOF -------------

var data = 'Roger';
console.log ( "typeof string data: " + typeof data );

data = 32;
console.log ( "typeof number data: " + typeof data);

data = true; 
console.log ( "typeof boolean data: " + typeof data);

data = ["A", "R", "R", "A", "Y"];
console.log ( "typeof array object data: " + typeof data );

var undefData;
console.log ( "typeof undefined undefData: " + typeof undefData);

//  --------------------------------------------      STEP 11   ALERT  -------------

alert ("Hello " + "Joe McDonald" + ", welcome to the JavaScript class!" );

//  --------------------------------------------      STEP 12   ALERT VARIABLE -------------

var sName = "JOE MCDONALD";
alert ("Hello " + sName + ", welcome to the JavaScript class!" );

//  ------------------------------------------      STEP 13   ALERT 2 VARIABLES  -------------

var sName = "JOE MCDONALD", course = "JavaScript";
alert ("Hello " + sName + ", welcome to the " + course + " class!" );

//  -------------------------------------------      STEP 14   ALERT LINE BREAK -------------

var sName = "JOE MCDONALD", course = "JavaScript";
alert ("Hello " + sName + ", \nwelcome to the " + course + " class!" );

//  ------------------------------------------      STEP 15    PROMPT  -------------

var sName = prompt ("Please enter your Name: ", "enter name"), course = "JavaScript";
alert ("Hello " + sName + ", \nwelcome to the " + course + " class!" );

//  -----------------------------------------      STEP 16   2 PROMPT  -------------

var sName = prompt ("Please enter your Name: ", "enter name"), course = prompt ("Please enter your the class you are taking: ", "enter class");
alert ("Hello " + sName + ", \nwelcome to the " + course + " class!" );

//  -------------------------------------------      STEP 17    ARITHMETIC ADDITION-------------

var x = 10;
var y = 20;

console.log(x + y);

//  --------------------------------------------      STEP 18  ADDITION ASSIGNMENT   -------------
var x = 20;
x += 20;
console.log(x);

//  ---------------------------------------------      STEP 19  MULTIPLIATION ASSIGMMENT  -------------

var x = 20;
x *= 5;
console.log(x);

//  --------------------------------------------      STEP 20  DIVISION ASSIGNMENT   -------------

var x = 20 % 3;
x /= 1;

console.log(x);

//  --------------------------------------------      STEP 21  COMPARISON LOGICAL OPERATORS  TRUE -------------

var nValue1 = 15 , nValue2 = 20 ;
console.log((nValue1 > 10) && (nValue2 <= 100))   // true because the nValue1 is greater 
											  // than 10 and nValue2 less than 100

//  ---------------------------------- ---------     STEP 22    COMPARISON LOGICAL OPERATORS  FALSE -------------

var nValue1 = 15 , nValue2 = 20 ;
console.log((nValue1 != 10) != (nValue2 <= 100))   // false  because the nValue1 is not equal to 10 results in true
												  // and nValue2 less than 100 results in true
													//  and comparison are both true therefore the comparison results in false 

//  ------------------------------------------      STEP 23   NEW OBJECT -------------

var widget = new Object();
console.log ( "typeof widget: " + typeof widget );

//  -------------------------------------------      STEP 24  INSTANCEOF  -------------

var widget = new Object();
console.log ( "Is the widget an instance of an object:   " + (widget instanceof Object) );

//  ------------------------------------------      STEP 25  INSTANCEOF FALSE USING !  -------------

var widget = new Object();
console.log ( "Is the widget an instance of an object:   " + !(widget instanceof Object) );


//  --------------------------------------------------------------------------------------------------------------------

// */       //  -------------------            END OF MULTILINE COMMENT                    --------------------------------
