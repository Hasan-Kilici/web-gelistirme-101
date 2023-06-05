let routes = [];
let cache = {};
let params;
async function addRoute(route, path, title, func,) {
  routes.push({ route: route, path: path, title: title, func: func });
}

document.addEventListener("DOMContentLoaded", function() {
  var elements = document.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add(`KawEThRa${Math.floor(Math.random() * 200000000)}`);
  }
});

async function component() {
  let route = window.location.hash.substring(1);
  route = route.split("?param=");
  params = route;
  for (let i = 0; i < routes.length; i++) {
    if (route[0] == routes[i].route) {
      let page;
      if (!cache[routes[i].path]) {
        const response = await fetch(routes[i].path);
        page = await response.text();
        cache[routes[i].path] = page;
      } else {
        page = cache[routes[i].path];
      }
      document.getElementById("main").innerHTML = page;
      document.title = routes[i].title;
      setTimeout(()=>{
        routes[i].func()
        console.log(routes[i].func)
      },10);
      break;
    }
  }
  controlIfElse()
}

window.addEventListener('load', component);
window.addEventListener('hashchange', component);

const kw = {
  bind: (id)=>{
    return document.getElementById(id).value;
  },
  css: (selector,property,value)=>{
    document.querySelector(selector).style[property] = value;
  },
  show: (selector)=>{
    document.querySelector(selector).style.display = "block";
  },
  hide: (selector)=>{
    document.querySelector(selector).style.display = "none";
  },
  getJson: async (url) => {
    return await(fetch(url).then(res => res.json()));
  },
  readFile: async (path)=>{
    return await(fetch(path).then(res => res.text()));
  },
  sendFile: async (path, text)=>{
    const fileContent = text;

    const file = new Blob([fileContent], { type: "text/plain" });
    
    const a = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = path;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  },
  text: (selector, text)=>{
      document.querySelector(selector).innerText = text;
  },
  html: (selector, text)=>{
      document.querySelector(selector).innerHTML = text;
  }
}

document.addEventListener("click", (e)=>{
  let element = e.srcElement;
  let click = element.getAttribute("click");
  let kwclick = element.getAttribute("kw:click");
  eval(click);
  eval(kwclick);
})

document.addEventListener("dblclick", (e)=>{
  let element = e.srcElement;
  let dblclick = element.getAttribute("dblclick");
  let kwdblclick = element.getAttribute("kw:dblclick");
  eval(dblclick);
  eval(kwdblclick);
})

document.addEventListener("mouseover", (e)=>{
  let element = e.srcElement;
  let hover = element.getAttribute("hover");
  let kwhover = element.getAttribute("kw:hover");
  eval(hover);
  eval(kwhover);
})

document.addEventListener("mouseout", (e)=>{
  let element = e.srcElement;
  let offhover = element.getAttribute("off:hover");
  let kwoffhover = element.getAttribute("kw:off:hover");
  eval(offhover);
  eval(kwoffhover);
})

document.addEventListener("mouseup", (e)=>{
  let element = e.srcElement;
  let offclick = element.getAttribute("off:click");
  let kwoffclick = element.getAttribute("kw:off:click");
  eval(offclick);
  eval(kwoffclick);
})


function controlIfElse(){
  const elements = document.querySelectorAll('[if], [else-if], [else], [kw-if], [kw-if-else], [kw-else]');

  elements.forEach(element => {
    const ifCondition = element.getAttribute('if') || element.getAttribute('kw-if');
    const elseIfCondition = element.getAttribute('else-if') || element.getAttribute('kw-else-if');
    const elseCondition = !ifCondition && !elseIfCondition;
    
    if (ifCondition && eval(ifCondition)) {
      element.remove()
    } else if (elseIfCondition && eval(elseIfCondition)) {
      element.remove()
    } else if (elseCondition) {
      element.remove()
    } else {
      element.remove()
    }
  });
}

function onMount(callback) {
  document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
      callback()
    },100);
  });
  window.addEventListener("hashchange", ()=>{
    setTimeout(()=>{
      callback()
    },100);
  });
  window.addEventListener("onload",()=>{
    setTimeout(()=>{
      callback()
    },100);
  });
  window.addEventListener("load", ()=>{
    setTimeout(()=>{
      callback() 
    },100);
  });
  
}

function reactive(variable, callback) {
  let handler = {
    set(target, property, value, receiver) {
      callback();
      return Reflect.set(target, property, value, receiver);
    }
  };
  
  if (typeof variable === "object") {
    return new Proxy(variable, handler);
  } else {
    callback();
    return variable;
  }
}
