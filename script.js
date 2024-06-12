function encriptar(texto, fraseClave) 
{
 // Convertir texto y frase clave a arrays de bytes
 const textoBytes = new TextEncoder().encode(texto);
 const fraseClaveBytes = new TextEncoder().encode(fraseClave);
 // Crear un array vacío para el texto cifrado
 const textoCifrado = [];
 // Recorrer cada byte del texto original
 for (let i = 0; i < textoBytes.length; i++) {
   // XOR cada byte del texto con el byte correspondiente de la frase clave
   textoCifrado.push(textoBytes[i] ^ fraseClaveBytes[i % fraseClaveBytes.length]);
 }
    
 // Convertir el array de bytes cifrados en una cadena base64
 return btoa(String.fromCharCode(...textoCifrado));
}

function descifrar(textoCifradoBase64, fraseClave) 
{
  // Convertir el texto cifrado base64 en un array de bytes
  const textoCifradoBytes = Uint8Array.from(atob(textoCifradoBase64), c => c.charCodeAt(0));
  const fraseClaveBytes = new TextEncoder().encode(fraseClave);

  // Crear un array vacío para el texto descifrado
  const textoDescifrado = [];

  // Recorrer cada byte del texto cifrado
  for (let i = 0; i < textoCifradoBytes.length; i++) {
    // XOR cada byte del texto cifrado con el byte correspondiente de la frase clave
    textoDescifrado.push(textoCifradoBytes[i] ^ fraseClaveBytes[i % fraseClaveBytes.length]);
  }
     
  // Convertir el array de bytes descifrados en una cadena
  const textoDescifradoString = new TextDecoder().decode(new Uint8Array(textoDescifrado));
  return textoDescifradoString;
}