const myObj = {
  a: [1],
  b: {
    c: [2],
  },
};

const transformObj = (jsonObj, n) => {
  const addToArray = (item) => {
    if (Array.isArray(item)) {
      const newArr = [];
      item.forEach((arrItem) => newArr.push(addToArray(arrItem)));
      newArr.push(n);
      return newArr;
    } else if (item !== null && typeof item === "object") {
      const newObj = {};
      for (const key in item) {
        newObj[key] = addToArray(item[key]);
      }
      return newObj;
    } else {
      return item;
    }
  };
  return addToArray(jsonObj);
};

console.log(JSON.stringify(transformObj(myObj, "yayyy"), null, 2));
