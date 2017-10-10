function cipherCesar(userMessage){
var convertToCapital =userMessage.toUpperCase();//LUCESITA
var splitString=convertToCapital.split("")//["L", "U", "C", "E", "S", "I", "T", "A"]
/*creando un un ciclo que itere y vaya preguntando en cada posición en el arreglo sobre el número de código ASCI asociado
al caracter*/
for(i=0; i<splitString.length; i++){
  var n=33;
  //associatedNumberAsci guardará el número asociado al caracter por cifrar
  associatedNumberAsci=splitString[i].charCodeAt()
  //cipherCesarCharacter guardará el número asociado al caracter ya cifrado
  cipherCesarCharacter=((associatedNumberAsci-65+n)%26)+65;
  //irá guardando en cada iteración, el string asociado al número de caracter cifrado
  splitString[i]=String.fromCharCode(cipherCesarCharacter); //["S", "B", "J", "L", "Z", "P", "A", "H"]
  messageCifrado=splitString.join("")
 }
return messageCifrado  //retornará la cadena de texto ya cifrado.
}

function decipherCesar(userMessageCipher){
convertToCapitalTheMessageCipher =userMessageCipher.toUpperCase();//LUCESITA
splitMessageCipher=convertToCapitalTheMessageCipher.split("")//["L", "U", "C", "E", "S", "I", "T", "A"]
/*creando un un ciclo que itere y vaya preguntando en cada posición en el arreglo sobre el número de código ASCI asociado
al caracter*/
for(i=0; i<splitMessageCipher.length; i++){
  var n=33;
  //associatedNumberAsci guardará el número asociado al caracter por descifrar
  associatedNumberAsci=splitMessageCipher[i].charCodeAt()
  //cipherCesarCharacter guardará el número asociado al caracter ya descifrado
  decipherCesarCharacter=((associatedNumberAsci-33+65)%26)+65;
  //irá guardando en cada iteración, los string ya descifrados
  splitMessageCipher[i]=String.fromCharCode(decipherCesarCharacter);
  messageDescrifrado= splitMessageCipher.join("")
}
return messageDescrifrado;  //retornará la cadena de descifrada.
}


do{
  var message= prompt("escribe un mensaje");
  console.log(cipherCesar(message));
  console.log(decipherCesar(message));
}while(message.length==0)
