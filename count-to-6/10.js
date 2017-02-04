
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(readyStrings, ...values){
   return readyStrings.map( (dangerString, i) =>
     (i == readyStrings.length-1) ? dangerString : dangerString + htmlSafe(values[i])
   ).join('');
}

function htmlSafe (string) {
  return string.replace(/&/g, "&amp;" )
               .replace(/'/g, "&apos;")
               .replace(/"/g, "&quot;")
               .replace(/</g, "&lt;"  )
               .replace(/>/g, "&gt;"  );
