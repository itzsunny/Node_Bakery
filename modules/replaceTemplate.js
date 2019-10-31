module.exports = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%FAT%}/g, product.fat);
  output = output.replace(/{%PROTEIN%}/g, product.protein);
  output = output.replace(/{%CALORIES%}/g, product.calories);
  output = output.replace(/{%COLESTROL%}/g, product.colestrol);
  output = output.replace(/{%ID%}/g, product.id);
 
  if (!product.veg) output = output.replace(/{%NOT_VEG%}/g, 'not-veg');
  return output;
};
