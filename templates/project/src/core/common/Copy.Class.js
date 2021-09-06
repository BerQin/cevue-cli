function CopyClass() {}

CopyClass.prototype.strCopy = function (str) {
  return new Promise((resolve, reject) => {
    const inputElement = document.createElement('input');
    inputElement.value = str;
    inputElement.style.opacity = 0;
    inputElement.style.position = 'absolute';
    document.body.appendChild(inputElement);
    console.log(inputElement);
    inputElement.select();
    document.execCommand('Copy');
    document.body.removeChild(inputElement);
    resolve(true);
  });
};

export default new CopyClass();
