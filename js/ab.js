(function (window, document, undefined) {
  var setVariant = /\?variant=(\d)/.exec(window.location.href) ? /\?variant=(\d)/.exec(window.location.href)[1] : null;
  var variant = setVariant !== null ? parseInt(setVariant) : Math.random() > 0.5 ? 0 : 1;
  var content = {};
  Object.keys(window.content).forEach((key)=>{
    content[key] = window.content[key][variant]
  })
  Object.keys(content).forEach(key => {
    var el = document.getElementById(key);
    if(el){
      el.innerHTML = content[key];
    }
  });
  var el = document.getElementById('googleiframe');
  // el.innerHTML = variant ? '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfsuuRAidEMJhtu6cfGt27_EMnoRkGrD71oyAvncO9GINVjtA/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>' : '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfKEkFa7MYYrkq0vuUi_Ono1mPwPTYnmmGKqb_NZSS0MrTePQ/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>'
  el.src = variant ? "https://docs.google.com/forms/d/e/1FAIpQLSfsuuRAidEMJhtu6cfGt27_EMnoRkGrD71oyAvncO9GINVjtA/viewform?embedded=true"  : "https://docs.google.com/forms/d/e/1FAIpQLSfKEkFa7MYYrkq0vuUi_Ono1mPwPTYnmmGKqb_NZSS0MrTePQ/viewform?embedded=true";
})(window, document);