function end(str, target) { 
  if (str.substr((str.length - target.length ),(str.length)) == target) {
    return true;
  } else {
    return false;
  }
   
  return str;
}

end('Bastian', 'n');