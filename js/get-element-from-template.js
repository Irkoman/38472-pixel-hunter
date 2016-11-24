const getElementFromTemplate = (content) => {
  let node = document.createElement('div');
  node.insertAdjacentHTML('beforeEnd', content);
  return node.cloneNode(true);
};

export default getElementFromTemplate;
