const BASE_URL = "https://admdev.restoyar.ir/";

const methods = {
  isNullOrEmptyString(str) {
    return !str || str === "";
  },

  normalImage = (strImage) => {
  if (!strImage || strImage === "") {
    return null;
  }
  
  return BASE_URL + strImage;
};
}

export default methods;


