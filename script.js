window.addEventListener("load", (e) => {
})

function getTutorial(lang) {
  fetch(`https://api.github.com/repos/hasan-kilici/web-gelistirme-101/contents/docs/${lang}`).then(async (data) => {
    let Docs = await data.json();
    document.getElementById("sidebar").innerHTML = "";
    for (let i = 0; i < Docs.length; i++) {
      let name = Docs[i].name.split(".md")
      document.getElementById("sidebar").innerHTML += `<div style="padding-left:12px;padding-bottom:6px;padding-top:6px" onclick="redirectMD('${lang}', '${Docs[i].name}')">${name[0]}</div>`;
      document.getElementById("content").innerHTML += `<div style="padding-left:12px;padding-bottom:6px;padding-top:6px" onclick="redirectMD('${lang}', '${Docs[i].name}')">${name[0]}</div>`;
    }
  })
}

function getMD(lang, name) {
  fetch(`https://api.github.com/repos/hasan-kilici/web-gelistirme-101/contents/docs/${lang}/${name}`)
    .then(async (data) => {
      let file = await data.json();
      let fileurl = file.download_url;
      setTimeout(() => {
        fetch(fileurl).then(async (data) => {
          let content = await data.text();
          let contentHTML = marked.parse(content);
          document.getElementById("content").innerHTML =`<div class="d" onclick="openSidebar()"><i class="fa-duotone fa-bars-sort" style="--fa-secondary-opacity: 0.8;"></i></div>` + contentHTML;
          Prism.highlightAll();
        }, 1);
      });
    });
  }


function redirectTutorial(lang) {
  window.location.href = `#/lang?param=${lang}`;
}

function redirectMD(lang, name) {
  window.location.href = `#/md?param=${lang}?param=${name}`;
}
let open = false;
function openSidebar(){
  if(!open){
    document.getElementById('sidebar').style.display = 'block';
    open = true;
  } else {
    document.getElementById('sidebar').style.display = 'none';
    open = false;
  }
}
