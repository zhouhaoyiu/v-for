import { compileTemplate } from "./compile";

const domNodePool = [];

export function createApp(options) {
  // console.log(options);
  for (let option in options) {
    switch (option) {
      case 'components':
        initComponent(options[option]);
        break;
      default:
        break;
    }
  }
  return {
    mount
  }
}

function initComponent(components) {
  console.log(components);
  for (let component of components) {
    let [template, state] = component();
    console.log(template, state);
    const node = compileTemplate(template, state);
    domNodePool.push(node);
    // console.log(node);    
  }
}


function mount(el) {
  const app = document.querySelector(el);
  const oFrag = document.createDocumentFragment();

  domNodePool.forEach(node => {
    oFrag.appendChild(node);
  });
  app.appendChild(oFrag);
}