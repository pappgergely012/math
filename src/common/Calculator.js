export const calculate = (subcatId, height, width, length, diameter, A, B, C) => {
  let response = null;
  let r = null;
  
  width    = parseFloat(width);
  length   = parseFloat(length);
  height   = parseFloat(height);
  diameter = parseFloat(diameter);
  A        = parseFloat(A);
  B        = parseFloat(B);
  C        = parseFloat(C);


  if(diameter !== NaN){
    r = diameter / 2;
  }

  switch(subcatId){
    case '01':
        if(!width || !length) return response = null

        response = width * length
      break;
    case '02':
        if(!width || !length) return response = null

        response = 2 * (width + length);
      break;
    case '03':
        if(!width || !length) return response = null

        response = Math.pow((width * width) + (length * length), 1/2);
      break;
    case '11':
        if(!width || !length || !height) return response = null

        response = width * length * height;
      break;
    case '12':
        if(!width || !length || !height) return response = null

        response = Math.pow((width * width) + (height * height) + (length * length), 1/2);
      break;
    case '13':
        if(!width || !length || !height) return response = null

        response = 2 * ((width * length) + (width * height) + (length * height));
      break;
    case '21':
        if(!diameter) return response = null

        response = Math.PI * (diameter * diameter);
      break;
    case '22':
        if(!diameter) return response = null

        response = 2 * Math.PI * diameter;
      break;
    case '23':
        if(!diameter) return response = null

        response = diameter / 2;
      break;
    case '31':
        if(!diameter) return response = null

        response = 4 / 3 * Math.PI * (r * r * r);
      break;
    case '32':
        if(!diameter) return response = null

        response = 4 * Math.PI * (r * r);
      break;
    case '41':
        if(!A || !height) return response = null

        response = A * height / 2;
      break;
    case '42':
        if(!A || !B || !C) return response = null

        response = A + B + C;
      break;
  }

  return response;
}