
function zb(a,b,c,d,e){if(!a.fa)a.fa=[];M(b)||(b=0);a.fa.push(setTimeout(function(){a.fa.splice(g,1);c.apply(d,e||[])},b));var g=a.fa.length}
y(Function,j,m,{lazy:function(a,b){function c(){if(!(g&&e.length>b-2)){e.push([this,arguments]);f()}}var d=this,e=[],g=m,f,i,h;a=a||1;b=b||Infinity;i=P(a,void 0,"ceil");h=P(i/a);f=function(){if(!(g||e.length==0)){for(var l=x.max(e.length-h,0);e.length>l;)Function.prototype.apply.apply(d,e.shift());zb(c,i,function(){g=m;f()});g=j}};return c},delay:function(a){var b=D(arguments).slice(1);zb(this,a,this,this,b);return this},throttle:function(a){return this.lazy(a,1)},debounce:function(a){var b=this;
return function(){b.cancel();zb(b,a,b,this,arguments)}},cancel:function(){if(pa(this.fa))for(;this.fa.length>0;)clearTimeout(this.fa.shift());return this},after:function(a){var b=this,c=0,d=[];if(M(a)){if(a===0){b.call();return b}}else a=1;return function(){var e;d.push(D(arguments));c++;if(c==a){e=b.call(this,d);c=0;d=[];return e}}},once:function(){var a=this;return function(){return ka(a,"memo")?a.memo:a.memo=a.apply(this,arguments)}},fill:function(){var a=this,b=D(arguments);return function(){var c=
D(arguments);b.forEach(function(d,e){if(d!=k||e>=c.length)c.splice(e,0,d)});return a.apply(this,c)}}});
