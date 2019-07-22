import lunr from "lunr";


function buildIndex(queryResult) {

  let data = [];
  let searchValues = {};

  for (var i = 0; i < queryResult.length; i++) {
    data.push({
      name: queryResult[i].name,
      path: queryResult[i].id
    });
    searchValues[queryResult[i].id] = queryResult[i].name;
  }

  const index = lunr(function () {
    this.ref('path');
    this.field('name');
  
    for (var i = 0; i < data.length; i++) {
      this.add(data[i]);
    }
  
  });

  return {
    searchValues: searchValues,
    index: index
  };
}


export default buildIndex;