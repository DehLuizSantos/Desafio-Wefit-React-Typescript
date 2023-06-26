export const removeAccent = (str: string) => {
  const withA = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ';
  // A string com os respectivos caracteres sem acento
  const withoutA = 'AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr';
  // Usa a função replace() para substituir os caracteres
  return str.replace(/[^\w]/g, function (ch) {
    return withoutA[withA.indexOf(ch)] || ch;
  });
};
