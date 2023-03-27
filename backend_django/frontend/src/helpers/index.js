import defaultImage from "../assets/image/default/item_default.png";

const formatImageUrl = (url) => {
  return url ? `${process.env.REACT_APP_IMG_URL}${url}` : defaultImage;
};

const validateCommon = (type, value, splitChar = " ") => {
  if (!value) return type === "money" ? 0 : "_";

  if (type === "phone") {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return value.match(phoneno) ? true : false;
  }

  if (type === "email") {
    var emailno =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailno.test(String(value).toLowerCase()) ? true : false;
  }

  if (type === "onlyText") {
    return /^[A-Za-z ]+$/.test(value) ? true : false;
  }

  if (type === "onlyNumber") {
    return value.match(/^-?\d*(\.\d+)?$/) ? true : false;
  }

  if (type === "money") {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  if (type === "date") {
    return value.split("-").reverse().join("/");
  }

  if (type === "getTimeFromCreation") {
    return value.split(splitChar)[1]?.split(":").slice(0, 2)?.join(":");
  }

  if (type === "getDateFromCreation") {
    return value.split(" ")[0]?.split("-")?.reverse()?.join("/");
  }

  if (type === "formatCreation") {
    let date = value.split(splitChar)[0]?.split("-")?.reverse()?.join("/");
    let time = value.split(splitChar)[1]?.split(":").slice(0, 2)?.join(":");
    return `${time} ${date}`;
  }
};

const checkValidPhone = (phone) => {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone && phone.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};

const checkValidString = (string) => {
  return string && string?.trim() !== "" ? true : false;
};

const DMS2DD = (degrees, minutes, seconds, direction) => {
  var dd = degrees + minutes / 60 + seconds / 3600;
  if (direction === "S" || direction === "W") {
    dd = dd * -1;
  }
  return dd;
};

const genFileName = (type = "png") => {
  let date = new Date();
  let fileName = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.${type}`;
  return fileName;
};

export {
  formatImageUrl,
  validateCommon,
  checkValidPhone,
  checkValidString,
  DMS2DD,
  genFileName,
};
