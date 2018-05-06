(function(aqi){ var x = window['_aqiFeed'], conf = x['c'],n = x['n']++, c = aqi.opt = conf[n]; x.show = function(id,jq)
{ var o=document.getElementById(id); if (o) o.style.display='';};
x.hide = function(id,jq) { var o=document.getElementById(id); if (o) o.style.display='none'; };
x.adjustTooltipPosition = function (id) {try {var d = document, tooltip = d.getElementById(id), r = tooltip.getBoundingClientRect(), w = window.innerWidth || d.documentElement.clientWidth || d.body.clientWidth;if (r.left > w-210) {var dx = r.left-(w-210);var o = d.getElementById('details-'+id);o.style.marginLeft='-'+dx+'px';}}
catch (e) {}};
var text = function(o) {return function(t) {return t.replace(/%\w*/g,function(t){return o[t.substr(1)]||'-';}); }};
var instance = function() {var l = x['l']||0; x['l']=l+1;
var obj = JSON.parse(JSON.stringify(aqi).replace(/xppid-1525587275/g,'aqi-popup-'+l));
obj.details = obj.popup.frame.replace("<!-FC->",aqi.popup.content+obj.popup.attribution);
var saqi = obj.aqit.replace('<!-PP->',obj.popup.container.replace("<!-PC->",obj.popup.arrow+obj.details));
obj.aqi = saqi.replace(/custom-css/,obj.style);obj.aqiv = saqi;obj.text = text(obj);return obj;};
var obj = instance();obj.instance = instance;if (c.callback) { try { c.callback&&c.callback(obj); } catch (e) { console&&console.log(e); } }else if (c.container) { o = document.getElementById(c.container); if (o) o.innerHTML=text(obj)(c.display || '%cityname %aqi'); }if (n<conf.length-1) _aqiFeed(conf,null,n+1);}({"cityname":"Bangkok","popup":{"id":"xppid-1525587275","content":"