function convert(str) {
    var split = str.split("");

    for (var i=0; i<str.length; i++)
        if (split[i]=== '&') {
            split[i] = '&amp;'
        } else if (split[i] === '<') {
            split[i] = '&lt;';
        } else if (split[i] === '>') {
            split[i] = '&gt;';
        } else if (split[i] === '"') {
            split[i] = '&quot;';
        } else if (split[i] === "'") {
            split[i] = '&apos;';
        } else {
        }
    return split.join("");
}

convert('Dolce & Gabbana');