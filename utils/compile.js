const customTags = ['for', 'if'];
const reg_single_bracket = /\{(.*?)\}/g;
const reg_double_bracket = /\{\{(.*?)\}\}/g;

export function compileTemplate(template, data) {
  // console.log(template, data);
  template = replaceVar(template, data, reg_double_bracket);
  const _node = document.createElement('div');
  _node.innerHTML = template;
  console.log(compileNode (_node, data));
  return compileNode(_node, data);
}

function compileNode(node, data) {
  const allNodes = node.querySelectorAll("*");

  allNodes.forEach(item => {
    const tagName = item.tagName.toLowerCase();

    if (customTags.includes(tagName)) {
      replaceNode(item, tagName, data);
    }
  })
  return [...node.childNodes].find(item => item.nodeType === 1);
}

function replaceNode(node, tag, data) {
  const dataKey = node.getAttribute('data');
  const className = node.className;
  const realTag = node.getAttribute('tag');

  switch (tag) {
    case 'for':
      vfor(node, data, dataKey, className, realTag);
      break;
    default:
      break;
  }
}


function vfor(node, data, dataKey, className, realTag) {
  const oFrag = document.createDocumentFragment();
  // console.log(data[dataKey]);
  data[dataKey].forEach(item => {
    // console.log(item)
    const el = document.createElement(realTag);
    el.className = className ? className : '';
    el.innerHTML = replaceVar(node.innerHTML, item, reg_single_bracket);
    // console.log(el)
    oFrag.appendChild(el);
  })
  node.parentNode.replaceChild(oFrag, node);
}

function replaceVar(html, data, reg) {


  return html.replace(reg, (node, key, c, d) => {
    // console.log(node) // {{ key }}
    // console.log(key) // key
    // console.log(c) // index
    // console.log(d) //html 

    key = key.trim();
    return data[key];

  })
}