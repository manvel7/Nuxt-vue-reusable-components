const toCamel = (str) => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};
const isObject = function (obj) {
  return (
    obj === Object(obj) && !Array.isArray(obj) && typeof obj !== "function"
  );
};
export const convertSnackToCamel = function (obj) {
  if (isObject(obj)) {
    const n = {};

    Object.keys(obj).forEach((k) => {
      n[toCamel(k)] = convertSnackToCamel(obj[k]);
    });

    return n;
  } else if (Array.isArray(obj)) {
    return obj.map((i) => {
      return convertSnackToCamel(i);
    });
  }

  return obj;
};
