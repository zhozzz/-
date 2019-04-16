var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};
if(typeof __WXML_GLOBAL__ === 'undefined') __WXML_GLOBAL__={};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if("undefined"!==typeof debugInfo)
e.stack += "\n "+" "+" "+" at "+debugInfo[g.opindex][0]+":"+debugInfo[g.opindex][1]+":"+debugInfo[g.opindex][2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
return rev;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "" );
return value;
}
else
{
return raw;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
return grb( z[opindex], env, scope, global, nothing );
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
return r===1 ? $gdc(o(),undefined,2) : o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
__WXML_GLOBAL__.debuginfo_set = __WXML_GLOBAL__.debuginfo_set || {};
var debugInfo=__WXML_GLOBAL__.debuginfo_set.$gwx || [];
if ( !__WXML_GLOBAL__.ops_init.$gwx){
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2d694b4c']);debugInfo.push(['./components/nairenk-waterfall-flow/nairenk-waterfall-flow.vue.wxml',1,15]);Z([3,'1965cc40']);debugInfo.push(['./pages/category/category.vue.wxml',1,15]);Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/category/category.wxml',2,34]);Z(z[1]);debugInfo.push(['./pages/category/category.wxml',2,18]);Z([3,'7e87e260']);debugInfo.push(['./pages/mune/mune.vue.wxml',1,15]);Z(z[2]);debugInfo.push(['./pages/mune/mune.wxml',2,34]);Z(z[4]);debugInfo.push(['./pages/mune/mune.wxml',2,18]);Z([3,'1788398e']);debugInfo.push(['./pages/publish-detial/publish-qa/publish-qa.vue.wxml',1,15]);Z(z[2]);debugInfo.push(['./pages/publish-detial/publish-qa/publish-qa.wxml',2,34]);Z(z[7]);debugInfo.push(['./pages/publish-detial/publish-qa/publish-qa.wxml',2,18]);Z([3,'92f4c2bc']);debugInfo.push(['./pages/publish-detial/publish-release/publish-release.vue.wxml',1,15]);Z(z[2]);debugInfo.push(['./pages/publish-detial/publish-release/publish-release.wxml',2,34]);Z(z[10]);debugInfo.push(['./pages/publish-detial/publish-release/publish-release.wxml',2,18]);Z([3,'56cbfb8a']);debugInfo.push(['./pages/publish-detial/publish-video/publish-video.vue.wxml',1,15]);Z(z[2]);debugInfo.push(['./pages/publish-detial/publish-video/publish-video.wxml',2,34]);Z(z[13]);debugInfo.push(['./pages/publish-detial/publish-video/publish-video.wxml',2,18]);Z([3,'2f2785f3']);debugInfo.push(['./pages/tabbar/index/index.vue.wxml',1,15]);Z(z[2]);debugInfo.push(['./pages/tabbar/index/index.wxml',2,34]);Z(z[16]);debugInfo.push(['./pages/tabbar/index/index.wxml',2,18]);Z([3,'12e3684d']);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,98]);Z([3,'_view 12e3684d content']);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,121]);Z([3,'handleProxy']);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1357]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'12e3684d-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1429]);Z([[7],[3,'$k']]);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1415]);Z([1,'12e3684d-4']);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1384]);Z(z[0]);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1486]);Z(z[21]);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1598]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'12e3684d-1']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1670]);Z(z[23]);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1656]);Z([1,'12e3684d-5']);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1625]);Z(z[0]);debugInfo.push(['./pages/tabbar/live/live.vue.wxml',1,1727]);Z(z[2]);debugInfo.push(['./pages/tabbar/live/live.wxml',2,34]);Z(z[19]);debugInfo.push(['./pages/tabbar/live/live.wxml',2,18]);Z([3,'ed58c8c6']);debugInfo.push(['./pages/tabbar/message/message.vue.wxml',1,15]);Z(z[2]);debugInfo.push(['./pages/tabbar/message/message.wxml',2,34]);Z(z[33]);debugInfo.push(['./pages/tabbar/message/message.wxml',2,18]);Z([3,'38a54dad']);debugInfo.push(['./pages/tabbar/publish/publish.vue.wxml',1,15]);Z(z[2]);debugInfo.push(['./pages/tabbar/publish/publish.wxml',2,34]);Z(z[36]);debugInfo.push(['./pages/tabbar/publish/publish.wxml',2,18]);Z([3,'29ff48a6']);debugInfo.push(['./pages/tabbar/user/user.vue.wxml',1,15]);Z(z[2]);debugInfo.push(['./pages/tabbar/user/user.wxml',2,34]);Z(z[39]);debugInfo.push(['./pages/tabbar/user/user.wxml',2,18]);})(z);__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
__WXML_GLOBAL__.debuginfo_set.$gwx=debugInfo;
}
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./common/slots.wxml','/components/nairenk-waterfall-flow/nairenk-waterfall-flow.vue.wxml','./components/nairenk-waterfall-flow/nairenk-waterfall-flow.vue.wxml','./pages/category/category.vue.wxml','./pages/category/category.wxml','./category.vue.wxml','./pages/mune/mune.vue.wxml','./pages/mune/mune.wxml','./mune.vue.wxml','./pages/publish-detial/publish-qa/publish-qa.vue.wxml','./pages/publish-detial/publish-qa/publish-qa.wxml','./publish-qa.vue.wxml','./pages/publish-detial/publish-release/publish-release.vue.wxml','./pages/publish-detial/publish-release/publish-release.wxml','./publish-release.vue.wxml','./pages/publish-detial/publish-video/publish-video.vue.wxml','./pages/publish-detial/publish-video/publish-video.wxml','./publish-video.vue.wxml','./pages/tabbar/index/index.vue.wxml','./pages/tabbar/index/index.wxml','./index.vue.wxml','./pages/tabbar/live/live.vue.wxml','./pages/tabbar/live/live.wxml','./live.vue.wxml','./pages/tabbar/message/message.vue.wxml','./pages/tabbar/message/message.wxml','./message.vue.wxml','./pages/tabbar/publish/publish.vue.wxml','./pages/tabbar/publish/publish.wxml','./publish.vue.wxml','./pages/tabbar/user/user.vue.wxml','./pages/tabbar/user/user.wxml','./user.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["2d694b4c"]=function(e,s,r,gg){
var b=x[2]+':2d694b4c'
r.wxVkey=b
gg.f=$gdc(f_["./components/nairenk-waterfall-flow/nairenk-waterfall-flow.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["1965cc40"]=function(e,s,r,gg){
var b=x[3]+':1965cc40'
r.wxVkey=b
gg.f=$gdc(f_["./pages/category/category.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var cF=e_[x[4]].i
_ai(cF,x[5],e_,x[4],1,1)
var hG=_v()
_(r,hG)
cs.push("./pages/category/category.wxml:template:2:6")
var oH=_o(3,e,s,gg)
var cI=_gd(x[4],oH,e_,d_)
if(cI){
var oJ=_1(2,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[4],2,18)
cs.pop()
cF.pop()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["7e87e260"]=function(e,s,r,gg){
var b=x[6]+':7e87e260'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mune/mune.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var tM=e_[x[7]].i
_ai(tM,x[8],e_,x[7],1,1)
var eN=_v()
_(r,eN)
cs.push("./pages/mune/mune.wxml:template:2:6")
var bO=_o(6,e,s,gg)
var oP=_gd(x[7],bO,e_,d_)
if(oP){
var xQ=_1(5,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[7],2,18)
cs.pop()
tM.pop()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["1788398e"]=function(e,s,r,gg){
var b=x[9]+':1788398e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/publish-detial/publish-qa/publish-qa.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
return r
}
e_[x[9]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m7=function(e,s,r,gg){
var cT=e_[x[10]].i
_ai(cT,x[11],e_,x[10],1,1)
var hU=_v()
_(r,hU)
cs.push("./pages/publish-detial/publish-qa/publish-qa.wxml:template:2:6")
var oV=_o(9,e,s,gg)
var cW=_gd(x[10],oV,e_,d_)
if(cW){
var oX=_1(8,e,s,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[10],2,18)
cs.pop()
cT.pop()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
d_[x[12]]["92f4c2bc"]=function(e,s,r,gg){
var b=x[12]+':92f4c2bc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/publish-detial/publish-release/publish-release.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
return r
}
e_[x[12]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m9=function(e,s,r,gg){
var t1=e_[x[13]].i
_ai(t1,x[14],e_,x[13],1,1)
var e2=_v()
_(r,e2)
cs.push("./pages/publish-detial/publish-release/publish-release.wxml:template:2:6")
var b3=_o(12,e,s,gg)
var o4=_gd(x[13],b3,e_,d_)
if(o4){
var x5=_1(11,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[13],2,18)
cs.pop()
t1.pop()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[x[14]],ic:[]}
d_[x[15]]={}
d_[x[15]]["56cbfb8a"]=function(e,s,r,gg){
var b=x[15]+':56cbfb8a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/publish-detial/publish-video/publish-video.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
return r
}
e_[x[15]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m11=function(e,s,r,gg){
var c8=e_[x[16]].i
_ai(c8,x[17],e_,x[16],1,1)
var h9=_v()
_(r,h9)
cs.push("./pages/publish-detial/publish-video/publish-video.wxml:template:2:6")
var o0=_o(15,e,s,gg)
var cAB=_gd(x[16],o0,e_,d_)
if(cAB){
var oBB=_1(14,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[16],2,18)
cs.pop()
c8.pop()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[18]]={}
d_[x[18]]["2f2785f3"]=function(e,s,r,gg){
var b=x[18]+':2f2785f3'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
return r
}
e_[x[18]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m13=function(e,s,r,gg){
var tEB=e_[x[19]].i
_ai(tEB,x[20],e_,x[19],1,1)
var eFB=_v()
_(r,eFB)
cs.push("./pages/tabbar/index/index.wxml:template:2:6")
var bGB=_o(18,e,s,gg)
var oHB=_gd(x[19],bGB,e_,d_)
if(oHB){
var xIB=_1(17,e,s,gg) || {}
var cur_globalf=gg.f
eFB.wxXCkey=3
oHB(xIB,xIB,eFB,gg)
gg.f=cur_globalf
}
else _w(bGB,x[19],2,18)
cs.pop()
tEB.pop()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[x[20]],ic:[]}
d_[x[21]]={}
d_[x[21]]["12e3684d"]=function(e,s,r,gg){
var b=x[21]+':12e3684d'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/live/live.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
cs.push("./pages/tabbar/live/live.vue.wxml:view:1:110")
var oB=_n('view')
_r(oB,'class',20,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/tabbar/live/live.vue.wxml:template:1:1340")
var oD=_o(25,e,s,gg)
var fE=_gd(x[21],oD,e_,d_)
if(fE){
var cF=_1(22,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[21],1,1486)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/tabbar/live/live.vue.wxml:template:1:1581")
var oH=_o(30,e,s,gg)
var cI=_gd(x[21],oH,e_,d_)
if(cI){
var oJ=_1(27,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[21],1,1727)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var fKB=e_[x[21]].i
_ai(fKB,x[1],e_,x[21],1,1)
fKB.pop()
return r
}
e_[x[21]]={f:m14,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[22]]={}
var m15=function(e,s,r,gg){
var hMB=e_[x[22]].i
_ai(hMB,x[23],e_,x[22],1,1)
var oNB=_v()
_(r,oNB)
cs.push("./pages/tabbar/live/live.wxml:template:2:6")
var cOB=_o(32,e,s,gg)
var oPB=_gd(x[22],cOB,e_,d_)
if(oPB){
var lQB=_1(31,e,s,gg) || {}
var cur_globalf=gg.f
oNB.wxXCkey=3
oPB(lQB,lQB,oNB,gg)
gg.f=cur_globalf
}
else _w(cOB,x[22],2,18)
cs.pop()
hMB.pop()
return r
}
e_[x[22]]={f:m15,j:[],i:[],ti:[x[23]],ic:[]}
d_[x[24]]={}
d_[x[24]]["ed58c8c6"]=function(e,s,r,gg){
var b=x[24]+':ed58c8c6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/message/message.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
return r
}
e_[x[24]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m17=function(e,s,r,gg){
var eTB=e_[x[25]].i
_ai(eTB,x[26],e_,x[25],1,1)
var bUB=_v()
_(r,bUB)
cs.push("./pages/tabbar/message/message.wxml:template:2:6")
var oVB=_o(35,e,s,gg)
var xWB=_gd(x[25],oVB,e_,d_)
if(xWB){
var oXB=_1(34,e,s,gg) || {}
var cur_globalf=gg.f
bUB.wxXCkey=3
xWB(oXB,oXB,bUB,gg)
gg.f=cur_globalf
}
else _w(oVB,x[25],2,18)
cs.pop()
eTB.pop()
return r
}
e_[x[25]]={f:m17,j:[],i:[],ti:[x[26]],ic:[]}
d_[x[27]]={}
d_[x[27]]["38a54dad"]=function(e,s,r,gg){
var b=x[27]+':38a54dad'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/publish/publish.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m18=function(e,s,r,gg){
return r
}
e_[x[27]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m19=function(e,s,r,gg){
var h1B=e_[x[28]].i
_ai(h1B,x[29],e_,x[28],1,1)
var o2B=_v()
_(r,o2B)
cs.push("./pages/tabbar/publish/publish.wxml:template:2:6")
var c3B=_o(38,e,s,gg)
var o4B=_gd(x[28],c3B,e_,d_)
if(o4B){
var l5B=_1(37,e,s,gg) || {}
var cur_globalf=gg.f
o2B.wxXCkey=3
o4B(l5B,l5B,o2B,gg)
gg.f=cur_globalf
}
else _w(c3B,x[28],2,18)
cs.pop()
h1B.pop()
return r
}
e_[x[28]]={f:m19,j:[],i:[],ti:[x[29]],ic:[]}
d_[x[30]]={}
d_[x[30]]["29ff48a6"]=function(e,s,r,gg){
var b=x[30]+':29ff48a6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabbar/user/user.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[30]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
return r
}
e_[x[30]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m21=function(e,s,r,gg){
var e8B=e_[x[31]].i
_ai(e8B,x[32],e_,x[31],1,1)
var b9B=_v()
_(r,b9B)
cs.push("./pages/tabbar/user/user.wxml:template:2:6")
var o0B=_o(41,e,s,gg)
var xAC=_gd(x[31],o0B,e_,d_)
if(xAC){
var oBC=_1(40,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[31],2,18)
cs.pop()
e8B.pop()
return r
}
e_[x[31]]={f:m21,j:[],i:[],ti:[x[32]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabbar/index/index","pages/tabbar/live/live","pages/tabbar/publish/publish","pages/tabbar/message/message","pages/tabbar/user/user","pages/publish-detial/publish-release/publish-release","pages/publish-detial/publish-video/publish-video","pages/publish-detial/publish-qa/publish-qa","pages/mune/mune","pages/category/category"],"subPackages":[],"window":{"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black"},"usingComponents":{},"tabBar":{"borderStyle":"black","backgroundColor":"#fff","color":"rgb(51,51,51)","selectedColor":"rgb(254,96,0)","list":[{"pagePath":"pages/tabbar/index/index","text":"首页"},{"pagePath":"pages/tabbar/live/live","text":"生活圈"},{"pagePath":"pages/tabbar/publish/publish","iconPath":"static/img/tabbar/add.png","selectedIconPath":"static/img/tabbar/addactive.png"},{"pagePath":"pages/tabbar/message/message","text":"消息"},{"pagePath":"pages/tabbar/user/user","text":"个人中心"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"buwei"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"], { 1415: function _(n, t, e) {"use strict";var u = e("406f"),o = e.n(u);o.a;}, "406f": function f(n, t, e) {}, "423b": function b(n, t, e) {"use strict";e.r(t);var u = e("85c3");for (var o in u) {"default" !== o && function (n) {e.d(t, n, function () {return u[n];});}(o);}e("1415");var r,a,c = e("2877"),f = Object(c["a"])(u["default"], r, a, !1, null, null, null);t["default"] = f.exports;}, "85c3": function c3(n, t, e) {"use strict";e.r(t);var u = e("d7aa"),o = e.n(u);for (var r in u) {"default" !== r && function (n) {e.d(t, n, function () {return u[n];});}(r);}t["default"] = o.a;}, a602: function a602(n, t, e) {"use strict";e("1942");var u = r(e("f3d3")),o = r(e("423b"));function r(n) {return n && n.__esModule ? n : { default: n };}function a(n) {for (var t = 1; t < arguments.length; t++) {var e = null != arguments[t] ? arguments[t] : {},u = Object.keys(e);"function" === typeof Object.getOwnPropertySymbols && (u = u.concat(Object.getOwnPropertySymbols(e).filter(function (n) {return Object.getOwnPropertyDescriptor(e, n).enumerable;}))), u.forEach(function (t) {c(n, t, e[t]);});}return n;}function c(n, t, e) {return t in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;}u.default.config.productionTip = !1, o.default.mpType = "app";var f = new u.default(a({}, o.default));f.$mount();}, d7aa: function d7aa(n, t, e) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;var u = { onLaunch: function onLaunch() {}, onShow: function onShow() {}, onHide: function onHide() {} };t.default = u;} }, [["a602", "common/runtime", "common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(function (e) {function r(r) {for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;}for (n in a) {Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);}c && c(r);while (s.length) {s.shift()();}return u.push.apply(u, f || []), t();}function t() {for (var e, r = 0; r < u.length; r++) {for (var t = u[r], n = !0, i = 1; i < t.length; i++) {var a = t[i];0 !== o[a] && (n = !1);}n && (u.splice(r--, 1), e = l(l.s = t[0]));}return e;}var n = {},o = { "common/runtime": 0 },u = [];function l(r) {if (n[r]) return n[r].exports;var t = n[r] = { i: r, l: !1, exports: {} };return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;}l.m = e, l.c = n, l.d = function (e, r, t) {l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });}, l.r = function (e) {"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });}, l.t = function (e, r) {if (1 & r && (e = l(e)), 8 & r) return e;if (4 & r && "object" === typeof e && e && e.__esModule) return e;var t = Object.create(null);if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) {l.d(t, n, function (r) {return e[r];}.bind(null, n));}return t;}, l.n = function (e) {var r = e && e.__esModule ? function () {return e["default"];} : function () {return e;};return l.d(r, "a", r), r;}, l.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r);}, l.p = "/";var i = global["webpackJsonp"] = global["webpackJsonp"] || [],a = i.push.bind(i);i.push = r, i = i.slice();for (var f = 0; f < i.length; f++) {r(i[f]);}var c = a;t();})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{1942:function(t,e,n){},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(t,e){return c.call(e),p(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"388c":function(t,e,n){"use strict";var r=n("ae14"),i=n.n(r);i.a},"55a2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{error:"/static/nairenk-waterfall-flow/error.jpg",mark:0,boxHeight:[],loadingTop:0}},watch:{list:function(t,e){this.mark=e.length,t!=e&&this.$nextTick(function(){var t=this;setTimeout(function(){t.waterFall()},100)})}},methods:{waterFall:function(){var e=this;t.createSelectorQuery().selectAll(".item").boundingClientRect().exec(function(t){for(var n=t[0],r=n.length,i=e.mark;i<r;i++){var o,a=parseInt(n[i].height),s=a;if(i<2)e.$set(e.list[i],"top",0),e.$set(e.list[i],"left",i),a>a&&(a=a,s=a),e.boxHeight.push(s);else(function(){var t=e.boxHeight[0],n=e.boxHeight.length,r=0;for(o=0;o<n;o++)t>e.boxHeight[o]&&(t=e.boxHeight[o],r=o);e.$set(e.list[i],"top",e.boxHeight[r]),e.$set(e.list[i],"left",r),e.boxHeight[r]=e.boxHeight[r]+s,e.loadingTop=e.boxHeight[2+~r],setTimeout(function(){for(var t=e.boxHeight[0],r=0;r<n;r++)t<e.boxHeight[r]&&(t=e.boxHeight[r]);e.loadingTop=t})})()}})},choose:function(t){var e=t.currentTarget.dataset.item;this.$emit("click",e)}}};e.default=n}).call(this,n("649d")["default"])},"649d":function(t,e,n){"use strict";n.r(e);var r=function(t){return"function"===typeof t},i=function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})},o=/^on|^create|Sync$|Manager$|^pause/,a=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],s=function(t){return(!o.test(t)||"createBLEConnection"===t)&&!~a.indexOf(t)},c=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(a.success)||r(a.fail)||r(a.complete)?t.apply(void 0,[a].concat(n)):i(new Promise(function(e,r){t.apply(void 0,[Object.assign({},a,{success:e,fail:r})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}},u=1e-4,p=750,f=!1,l=0,d=0;function h(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;l=r,d=n,f="ios"===e}function v(t,e){if(0===l&&h(),0===t)return 0;var n=t/p*(e||l);return n<0&&(n=-n),n=Math.floor(n+u),0===n?1!==d&&f?.5:1:t<0?-n:n}function m(t){return __requireNativePlugin__(t)}var g={},y={os:{plus:!0}};"undefined"!==typeof Proxy?g=new Proxy({},{get:function(t,e){return y.hasOwnProperty(e)?y[e]:"upx2px"===e?v:"requireNativePlugin"===e?m:wx.hasOwnProperty(e)?s(e)?c(wx[e]):wx[e]:void 0}}):(g.upx2px=v,g.requireNativePlugin=m,Object.keys(y).forEach(function(t){g[t]=y[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(s(t)?g[t]=c(wx[t]):g[t]=wx[t])}));var _=g;e["default"]=_},"81d2":function(t,e,n){"use strict";n.r(e);var r=n("d54e"),i=n("dfe7");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("388c");var a=n("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"b569b9b4",null);e["default"]=s.exports},ae14:function(t,e,n){},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),i=n.n(r);function o(t,e,n){var r,i=t.$options[e];if("onError"===e&&i&&(i=[i]),"function"===typeof i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)r=i[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return o(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new i.a(t);this.$vm=n;var r=n.$root;r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var o=r.$mp;o.mpType="page",o.page=this,o.query=e,o.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",o(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",o(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",o(t,"onHide")},onUnload:function(){var t=a(this);o(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);o(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);o(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);o(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);o(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return o(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);o(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);o(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);o(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);o(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return o(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d54e:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"flow-box"},[t._l(t.list,function(e,r){return n("view",{key:r,staticClass:"item",class:1==e.left?"left":"",style:"top:"+e.top+"px",attrs:{"data-item":e,eventid:"2d694b4c-0-"+r},on:{click:t.choose}},[n("view",{staticClass:"pic"},[n("image",{staticClass:"image",staticStyle:{width:"100%",display:"block","border-radius":"40rpx","min-height":"100pt","max-height":"240pt"},attrs:{src:e.image?e.image:t.error}})]),n("view",{staticClass:"content"},[n("text",[t._v(t._s(e.content))]),n("view",{staticClass:"user"},[n("image",{staticStyle:{width:"40rpx",height:"40rpx","border-radius":"50%","margin-right":"10rpx"},attrs:{src:e.user.avatar?e.user.avatar:t.error}}),t._v(t._s(e.user.name))])])])}),n("view",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading",style:"top: "+t.loadingTop+"px"},[n("image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:"/static/nairenk-waterfall-flow/loading.gif"}})])],2)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},dd6a:function(t){t.exports={list:[{id:1,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493711400&di=e6c84132e52932ffaf8fc5025ed46824&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201303%2F31%2F20130331124639_svhNV.thumb.700_0.jpeg",content:"我的左手吗？呵…我把它送给了新世界",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:2,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493784989&di=4e0dea29f039774a9478af73f5742920&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F51%2F49%2F16pic_5149719_b.jpg",content:"我是要成为海贼王的男人",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:3,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493871657&di=26eeaf4e2a8dc15be242029ce2073c8b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F05%2F20150605173646_ehdVy.jpeg",content:"我不是天生的王者，但我骨子里流动着不让我低头的血液",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:4,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493804218&di=27e261f4674ce10bf4b0d4a2e6cc20e1&imgtype=0&src=http%3A%2F%2Fi-7.vcimg.com%2Fcrop%2F877b27bbb05ed074e64d30b1ffb83774220677%2528600x%2529%2Fthumb.jpg",content:"想要我的财宝吗？去吧，我把一切全都放在了那里——伟大航路",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:5,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493902398&di=daf28d743a4d6c17ead37fbf50d2fdf9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F11%2F20180511181055_nKWGj.jpeg",content:"一个人的死，对于这个世界来说不过是多了一座坟墓，但对于相依为命的人来说，却是整个世界都被坟墓掩埋",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:6,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553506624359&di=1e6e3c2bf99531d25e5875bb58db2c41&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F20%2F20161020233108_38LGv.jpeg",content:"能够原谅女人谎言的才是男人",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:7,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493987349&di=856c14b4649a8d912d52046b3fe908c3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F07%2F20160307221846_KRLmZ.jpeg",content:"将过去和羁绊全部丢弃,不要吝惜那为了梦想流下的泪水",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:8,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493711400&di=e6c84132e52932ffaf8fc5025ed46824&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201303%2F31%2F20130331124639_svhNV.thumb.700_0.jpeg",content:"我的左手吗？呵…我把它送给了新世界",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:9,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493784989&di=4e0dea29f039774a9478af73f5742920&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F51%2F49%2F16pic_5149719_b.jpg",content:"我是要成为海贼王的男人",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:10,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493871657&di=26eeaf4e2a8dc15be242029ce2073c8b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F05%2F20150605173646_ehdVy.jpeg",content:"我不是天生的王者，但我骨子里流动着不让我低头的血液",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:11,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493804218&di=27e261f4674ce10bf4b0d4a2e6cc20e1&imgtype=0&src=http%3A%2F%2Fi-7.vcimg.com%2Fcrop%2F877b27bbb05ed074e64d30b1ffb83774220677%2528600x%2529%2Fthumb.jpg",content:"想要我的财宝吗？去吧，我把一切全都放在了那里——伟大航路",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:12,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493902398&di=daf28d743a4d6c17ead37fbf50d2fdf9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F11%2F20180511181055_nKWGj.jpeg",content:"一个人的死，对于这个世界来说不过是多了一座坟墓，但对于相依为命的人来说，却是整个世界都被坟墓掩埋",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:13,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553506624359&di=1e6e3c2bf99531d25e5875bb58db2c41&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F20%2F20161020233108_38LGv.jpeg",content:"能够原谅女人谎言的才是男人",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:14,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493987349&di=856c14b4649a8d912d52046b3fe908c3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F07%2F20160307221846_KRLmZ.jpeg",content:"将过去和羁绊全部丢弃,不要吝惜那为了梦想流下的泪水",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:15,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493711400&di=e6c84132e52932ffaf8fc5025ed46824&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201303%2F31%2F20130331124639_svhNV.thumb.700_0.jpeg",content:"我的左手吗？呵…我把它送给了新世界",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:16,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493784989&di=4e0dea29f039774a9478af73f5742920&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F51%2F49%2F16pic_5149719_b.jpg",content:"我是要成为海贼王的男人",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:17,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493871657&di=26eeaf4e2a8dc15be242029ce2073c8b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F05%2F20150605173646_ehdVy.jpeg",content:"我不是天生的王者，但我骨子里流动着不让我低头的血液",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:18,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493804218&di=27e261f4674ce10bf4b0d4a2e6cc20e1&imgtype=0&src=http%3A%2F%2Fi-7.vcimg.com%2Fcrop%2F877b27bbb05ed074e64d30b1ffb83774220677%2528600x%2529%2Fthumb.jpg",content:"想要我的财宝吗？去吧，我把一切全都放在了那里——伟大航路",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:19,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493902398&di=daf28d743a4d6c17ead37fbf50d2fdf9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F11%2F20180511181055_nKWGj.jpeg",content:"一个人的死，对于这个世界来说不过是多了一座坟墓，但对于相依为命的人来说，却是整个世界都被坟墓掩埋",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:20,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553506624359&di=1e6e3c2bf99531d25e5875bb58db2c41&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F20%2F20161020233108_38LGv.jpeg",content:"能够原谅女人谎言的才是男人",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:21,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493987349&di=856c14b4649a8d912d52046b3fe908c3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F07%2F20160307221846_KRLmZ.jpeg",content:"将过去和羁绊全部丢弃,不要吝惜那为了梦想流下的泪水",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:22,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493711400&di=e6c84132e52932ffaf8fc5025ed46824&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201303%2F31%2F20130331124639_svhNV.thumb.700_0.jpeg",content:"我的左手吗？呵…我把它送给了新世界",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:23,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493784989&di=4e0dea29f039774a9478af73f5742920&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F51%2F49%2F16pic_5149719_b.jpg",content:"我是要成为海贼王的男人",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:24,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493871657&di=26eeaf4e2a8dc15be242029ce2073c8b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F05%2F20150605173646_ehdVy.jpeg",content:"我不是天生的王者，但我骨子里流动着不让我低头的血液",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:25,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493804218&di=27e261f4674ce10bf4b0d4a2e6cc20e1&imgtype=0&src=http%3A%2F%2Fi-7.vcimg.com%2Fcrop%2F877b27bbb05ed074e64d30b1ffb83774220677%2528600x%2529%2Fthumb.jpg",content:"想要我的财宝吗？去吧，我把一切全都放在了那里——伟大航路",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:26,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493902398&di=daf28d743a4d6c17ead37fbf50d2fdf9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F11%2F20180511181055_nKWGj.jpeg",content:"一个人的死，对于这个世界来说不过是多了一座坟墓，但对于相依为命的人来说，却是整个世界都被坟墓掩埋",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:27,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553506624359&di=1e6e3c2bf99531d25e5875bb58db2c41&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F20%2F20161020233108_38LGv.jpeg",content:"能够原谅女人谎言的才是男人",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}},{id:28,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553493987349&di=856c14b4649a8d912d52046b3fe908c3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F07%2F20160307221846_KRLmZ.jpeg",content:"将过去和羁绊全部丢弃,不要吝惜那为了梦想流下的泪水",user:{name:"nairenk",avatar:"https://avatars2.githubusercontent.com/u/24265249?s=40&v=4"}}]}},dfe7:function(t,e,n){"use strict";n.r(e);var r=n("55a2"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,i){if(r!==i&&void 0!==r)if(null==r||null==i||typeof r!==typeof i)e[n]=r;else if(Array.isArray(r)&&Array.isArray(i))if(r.length===i.length)for(var o=0,a=r.length;o<a;++o)t(e,n+"["+o+"]",r[o],i[o]);else e[n]=r;else if("object"===typeof r&&"object"===typeof i){var s=Object.keys(r),c=Object.keys(i);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(o=0,a=s.length;o<a;++o)u[s[o]]=!0,u[c[o]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(o=0,a=s.length;o<a;++o){var p=s[o];t(e,n+"."+p,r[p],i[p])}}}else r!==i&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),i={},o=0,a=r.length;o<a;++o){for(var s=r[o],c=s.split("."),u=n[c[0]],p=1,f=c.length;p<f&&void 0!==u;++p)u=u[c[p]];t(i,s,e[s],u)}return i}function i(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var p=Object.prototype.toString;function f(t){return"[object Object]"===p.call(t)}function l(t){return"[object RegExp]"===p.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function m(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}m("slot,component",!0);var g=m("key,ref,slot,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,F=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),x=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/([^-])([A-Z])/g,k=$(function(t){return t.replace(A,"$1-$2").replace(A,"$1-$2").toLowerCase()});function O(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function j(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function C(t,e){for(var n in e)t[n]=e[n];return t}function S(t){for(var e={},n=0;n<t.length;n++)t[n]&&C(e,t[n]);return e}function P(t,e,n){}var T=function(t,e,n){return!1},I=function(t){return t};function D(t,e){var r=u(t),i=u(e);if(!r||!i)return!r&&!i&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function E(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function N(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var R="data-server-rendered",B=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:P,parsePlatformTagName:I,mustUseProp:T,_lifecycleHooks:M},z=Object.freeze({});function L(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function U(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W=P;function K(t,e,n){if(q.errorHandler)q.errorHandler.call(null,t,e,n);else{if(!Z||"undefined"===typeof console)throw t;console.error(t)}}var G,J="__proto__"in{},Z="undefined"!==typeof window,X=["mpvue-runtime"].join(),Q=(X&&/msie|trident/.test(X),X&&X.indexOf("msie 9.0"),X&&X.indexOf("edge/")>0),Y=(X&&X.indexOf("android"),X&&/iphone|ipad|ipod|ios/.test(X)),tt=(X&&/chrome\/\d+/.test(X),{}.watch);if(Z)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===G&&(G=!Z&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),G},rt=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function it(t){return"function"===typeof t&&/native code/.test(t.toString())}var ot,at="undefined"!==typeof Symbol&&it(Symbol)&&"undefined"!==typeof Reflect&&it(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function i(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&it(Promise)){var o=Promise.resolve(),a=function(t){console.error(t)};t=function(){o.then(i).catch(a),Y&&setTimeout(P)}}else t=function(){setTimeout(i,0)};return function(i,o){var a;if(e.push(function(){if(i)try{i.call(o)}catch(n){K(n,o,"nextTick")}else a&&a(o)}),r||(r=!0,t()),!i&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();ot="undefined"!==typeof Set&&it(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){y(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var pt=[];function ft(t){ut.target&&pt.push(ut.target),ut.target=t}function lt(){ut.target=pt.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];V(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var vt=Object.getOwnPropertyNames(ht),mt={shouldConvert:!0},gt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,V(t,"__ob__",this),Array.isArray(t)){var e=J?yt:_t;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function yt(t,e,n){t.__proto__=e}function _t(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];V(t,o,e[o])}}function bt(t,e){var n;if(u(t))return b(t,"__ob__")&&t.__ob__ instanceof gt?n=t.__ob__:mt.shouldConvert&&!nt()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new gt(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,i){var o=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!i&&bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(o.depend(),u&&u.dep.depend(),Array.isArray(e)&&xt(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!i&&bt(e),o.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(b(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Ft(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function xt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&xt(e)}gt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n],t[e[n]])},gt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)bt(t[e])};var At=q.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,i,o=Object.keys(e),a=0;a<o.length;a++)n=o[a],r=t[n],i=e[n],b(t,n)?f(r)&&f(i)&&kt(r,i):wt(t,n,i);return t}function Ot(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,i="function"===typeof t?t.call(n):void 0;return r?kt(r,i):i}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function jt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Ct(t,e){var n=Object.create(t||null);return e?C(n,e):n}At.data=function(t,e,n){return n?Ot(t,e,n):e&&"function"!==typeof e?t:Ot.call(this,t,e)},M.forEach(function(t){At[t]=jt}),B.forEach(function(t){At[t+"s"]=Ct}),At.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in C(n,t),e){var i=n[r],o=e[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):Array.isArray(o)?o:[o]}return n},At.props=At.methods=At.inject=At.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return C(n,t),C(n,e),n},At.provide=Ot;var St=function(t,e){return void 0===e?t:e};function Pt(t){var e=t.props;if(e){var n,r,i,o={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(i=F(r),o[i]={type:null})}else if(f(e))for(var a in e)r=e[a],i=F(a),o[i]=f(r)?r:{type:r};t.props=o}}function Tt(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function It(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Dt(t,e,n){"function"===typeof e&&(e=e.options),Pt(e),Tt(e),It(e);var r=e.extends;if(r&&(t=Dt(t,r,n)),e.mixins)for(var i=0,o=e.mixins.length;i<o;i++)t=Dt(t,e.mixins[i],n);var a,s={};for(a in t)c(a);for(a in e)b(t,a)||c(a);function c(r){var i=At[r]||St;s[r]=i(t[r],e[r],n,r)}return s}function Et(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=F(n);if(b(i,o))return i[o];var a=x(o);if(b(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Nt(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t];if(Mt(Boolean,i.type)&&(o&&!b(i,"default")?a=!1:Mt(String,i.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Rt(r,i,t);var s=mt.shouldConvert;mt.shouldConvert=!0,bt(a),mt.shouldConvert=s}return a}function Rt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Mt(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var qt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},zt={child:{}};zt.child.get=function(){return this.componentInstance},Object.defineProperties(qt.prototype,zt);var Lt=function(t){void 0===t&&(t="");var e=new qt;return e.text=t,e.isComment=!0,e};function Vt(t){return new qt(void 0,void 0,void 0,String(t))}function Ht(t){var e=new qt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Ut(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var Wt,Kt=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Gt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,t)}return e.fns=t,e}function Jt(t,e,n,r,o){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Kt(a),i(s)||(i(c)?(i(s.fns)&&(s=t[a]=Gt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)i(t[a])&&(u=Kt(a),r(u.name,e[a],u.capture))}function Zt(t,e,n){var r=e.options.props;if(!i(r)){var a={},s=t.attrs,c=t.props;if(o(s)||o(c))for(var u in r){var p=k(u);Xt(a,c,u,p,!0)||Xt(a,s,u,p,!1)}return a}}function Xt(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Yt(t){return c(t)?[Vt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return o(t)&&o(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],i(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Vt(r)):te(r)&&te(s)?u[u.length-1]=Vt(s.text+r.text):(a(t._isVList)&&o(r.tag)&&i(r.key)&&o(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,i){var o=Lt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function ie(t,e,n){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;if(a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(!o(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},p=N(function(n){t.resolved=ne(n,e),s||c()}),f=N(function(e){o(t.errorComp)&&(t.error=!0,c())}),l=t(p,f);return u(l)&&("function"===typeof l.then?i(t.resolved)&&l.then(p,f):o(l.component)&&"function"===typeof l.component.then&&(l.component.then(p,f),o(l.error)&&(t.errorComp=ne(l.error,e)),o(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){i(t.resolved)&&i(t.error)&&(t.loading=!0,c())},l.delay||200)),o(l.timeout)&&setTimeout(function(){i(t.resolved)&&f(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function oe(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&o(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Wt.$once(t,e):Wt.$on(t,e)}function ce(t,e){Wt.$off(t,e)}function ue(t,e,n){Wt=t,Jt(e,n||{},se,ce,t)}function pe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,i=this;if(Array.isArray(t))for(var o=0,a=t.length;o<a;o++)r.$on(t[o],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var i=0,o=t.length;i<o;i++)n.$off(t[i],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?j(r):r;for(var i=j(arguments,1),o=0,a=r.length;o<a;o++)try{r[o].apply(e,i)}catch(n){K(n,e,'event handler for "'+t+'"')}}return e}}function fe(t,e){var n={};if(!t)return n;for(var r=[],i=0,o=t.length;i<o;i++){var a=t[i];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function me(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=he;he=n,n._vnode=t,i?n.$el=n.__patch__(i,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function ge(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Lt),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Ne(t,r,P),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function ye(t,e,n,r,i){var o=!!(i||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==z);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){mt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Nt(u,t.$options.props,e,t)}mt.shouldConvert=!0,t.$options.propsData=e}if(n){var p=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,p)}o&&(t.$slots=fe(i,r.context),t.$forceUpdate())}function _e(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function be(t,e){if(e){if(t._directInactive=!1,_e(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"activated")}}function $e(t,e){if((!e||(t._directInactive=!0,!_e(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var i=0,o=r.length;i<o;i++)try{r[i].call(t)}catch(n){K(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Fe=[],xe=[],Ae={},ke=!1,Oe=!1,je=0;function Ce(){je=Fe.length=xe.length=0,Ae={},ke=Oe=!1}function Se(){var t,e;for(Oe=!0,Fe.sort(function(t,e){return t.id-e.id}),je=0;je<Fe.length;je++)t=Fe[je],e=t.id,Ae[e]=null,t.run();var n=xe.slice(),r=Fe.slice();Ce(),Ie(n),Pe(r),rt&&q.devtools&&rt.emit("flush")}function Pe(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Te(t){t._inactive=!1,xe.push(t)}function Ie(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,be(t[e],!0)}function De(t){var e=t.id;if(null==Ae[e]){if(Ae[e]=!0,Oe){var n=Fe.length-1;while(n>je&&Fe[n].id>t.id)n--;Fe.splice(n+1,0,t)}else Fe.push(t);ke||(ke=!0,st(Se))}}var Ee=0,Ne=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ee,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ot,this.newDepIds=new ot,this.expression="","function"===typeof e?this.getter=e:(this.getter=U(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ne.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;K(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),lt(),this.cleanupDeps()}return t},Ne.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ne.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Ne.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():De(this)},Ne.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){K(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Ne.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ne.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Ne.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Re=new ot;function Be(t){Re.clear(),Me(t,Re)}function Me(t,e){var n,r,i=Array.isArray(t);if((i||u(t))&&Object.isExtensible(t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)Me(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Me(t[r[n]],e)}}}var qe={enumerable:!0,configurable:!0,get:P,set:P};function ze(t,e,n){qe.get=function(){return this[e][n]},qe.set=function(t){this[e][n]=t},Object.defineProperty(t,n,qe)}function Le(t){t._watchers=[];var e=t.$options;e.props&&Ve(t,e.props),e.methods&&Ze(t,e.methods),e.data?He(t):bt(t._data={},!0),e.computed&&Ke(t,e.computed),e.watch&&e.watch!==tt&&Xe(t,e.watch)}function Ve(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;mt.shouldConvert=o;var a=function(o){i.push(o);var a=Nt(o,e,n,t);$t(r,o,a),o in t||ze(t,"_props",o)};for(var s in e)a(s);mt.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?Ue(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];r&&b(r,o)||L(o)||ze(t,"_data",o)}bt(e,!0)}function Ue(t,e){try{return t.call(e)}catch(n){return K(n,e,"data()"),{}}}var We={lazy:!0};function Ke(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var i=e[r],o="function"===typeof i?i:i.get;n[r]=new Ne(t,o,P,We),r in t||Ge(t,r,i)}}function Ge(t,e,n){"function"===typeof n?(qe.get=Je(e),qe.set=P):(qe.get=n.get?!1!==n.cache?Je(e):n.get:P,qe.set=n.set?n.set:P),Object.defineProperty(t,e,qe)}function Je(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Ze(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?P:O(e[n],t)}function Xe(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Qe(t,n,r[i]);else Qe(t,n,r)}}function Qe(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ye(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=Ft,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var i=new Ne(r,t,e,n);return n.immediate&&e.call(r,i.value),function(){i.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(mt.shouldConvert=!1,Object.keys(e).forEach(function(n){$t(t,n,e[n])}),mt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i],a=t[o],s=e;while(s){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,i){var a={},s=t.options.props;if(o(s))for(var c in s)a[c]=Nt(c,s,e||{});else o(n.attrs)&&on(a,n.attrs),o(n.props)&&on(a,n.props);var u=Object.create(r),p=function(t,e,n,r){return vn(u,t,e,n,r,!0)},f=t.options.render.call(null,p,{data:n,props:a,children:i,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return fe(i,r)}});return f instanceof qt&&(f.functionalContext=r,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}function on(t,e){for(var n in e)t[F(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var i=t.componentInstance=un(t,he,n,r);i.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var o=t;an.prepatch(o,o)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;ye(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Te(n):be(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$e(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!i(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var p;if(i(t.cid)&&(p=t,t=ie(p,c,n),void 0===t))return re(p,e,n,r,s);e=e||{},In(t),o(e.model)&&ln(t.options,e);var f=Zt(e,t,s);if(a(t.options.functional))return rn(t,f,e,n,r);var l=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}pn(e);var h=t.options.name||s,v=new qt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:l,tag:s,children:r},p);return v}}}function un(t,e,n,r){var i=t.componentOptions,a={_isComponent:!0,parent:e,propsData:i.propsData,_componentTag:i.tag,_parentVnode:t,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return o(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new i.Ctor(a)}function pn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],i=an[n];t.hook[n]=r?fn(i,r):i}}function fn(t,e){return function(n,r,i,o){t(n,r,i,o),e(n,r,i,o)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});o(i[r])?i[r]=[e.model.callback].concat(i[r]):i[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,i,o){return(Array.isArray(n)||c(n))&&(i=r,r=n,n=void 0),a(o)&&(i=hn),mn(t,e,n,r,i)}function mn(t,e,n,r,i){if(o(n)&&o(n.__ob__))return Lt();if(o(n)&&o(n.is)&&(e=n.is),!e)return Lt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===hn?r=Yt(r):i===dn&&(r=Qt(r)),"string"===typeof e)?(s=q.getTagNamespace(e),a=q.isReservedTag(e)?new qt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):o(c=Et(t.$options,"components",e))?cn(c,n,t,r,e):new qt(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return o(a)?(s&&gn(a,s),a):Lt()}function gn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&o(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];o(a.tag)&&i(a.ns)&&gn(a,e)}}function yn(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)&&(n._isVList=!0),n}function _n(t,e,n,r){var i=this.$scopedSlots[t];if(i)return n=n||{},r&&(n=C(C({},r),n)),i(n)||e;var o=this.$slots[t];return o||e}function bn(t){return Et(this.$options,"filters",t,!0)||I}function $n(t,e,n){var r=q.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=S(n));var a=function(a){if("class"===a||"style"===a||g(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||q.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in o)&&(o[a]=n[a],i)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Fn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Ut(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),An(n,"__static__"+t,!1),n)}function xn(t,e,n){return An(t,"__once__"+e+(n?"_"+n:""),!0),t}function An(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function On(t,e){if(e)if(f(e)){var n=t.on=t.on?C({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(o,i):o}}else;return t}function jn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=fe(t.$options._renderChildren,n),t.$scopedSlots=z,t._c=function(e,n,r,i){return vn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return vn(t,e,n,r,i,!0)};var r=e&&e.data;$t(t,"$attrs",r&&r.attrs,null,!0),$t(t,"$listeners",r&&r.on,null,!0)}function Cn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,i=r.render,o=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=Ut(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||z,o&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=i.call(e._renderProxy,e.$createElement)}catch(n){K(n,e,"render function"),t=e._vnode}return t instanceof qt||(t=Lt()),t.parent=a,t},t.prototype._o=xn,t.prototype._n=v,t.prototype._s=h,t.prototype._l=yn,t.prototype._t=_n,t.prototype._q=D,t.prototype._i=E,t.prototype._m=Fn,t.prototype._f=bn,t.prototype._k=$n,t.prototype._b=wn,t.prototype._v=Vt,t.prototype._e=Lt,t.prototype._u=de,t.prototype._g=On}var Sn=0;function Pn(t){t.prototype._init=function(t){var e=this;e._uid=Sn++,e._isVue=!0,t&&t._isComponent?Tn(e,t):e.$options=Dt(In(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),jn(e),we(e,"beforeCreate"),en(e),Le(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Tn(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function In(t){var e=t.options;if(t.super){var n=In(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Dn(t);i&&C(t.extendOptions,i),e=t.options=Dt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Dn(t){var e,n=t.options,r=t.extendOptions,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=En(n[o],r[o],i[o]));return e}function En(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var i=0;i<t.length;i++)(e.indexOf(t[i])>=0||n.indexOf(t[i])<0)&&r.push(t[i]);return r}return t}function Nn(t){this._init(t)}function Rn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=j(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Dt(this.options,t),this}}function Mn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Dt(n.options,t),a["super"]=n,a.options.props&&qn(a),a.options.computed&&zn(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=C({},a.options),i[r]=a,a}}function qn(t){var e=t.options.props;for(var n in e)ze(t.prototype,"_props",n)}function zn(t){var e=t.options.computed;for(var n in e)Ge(t.prototype,n,e[n])}function Ln(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}Pn(Nn),Ye(Nn),pe(Nn),me(Nn),Cn(Nn);var Vn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function Un(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Wn(t,e,n){for(var r in t){var i=t[r];if(i){var o=Hn(i.componentOptions);o&&!n(o)&&(i!==e&&Kn(i),t[r]=null)}}}function Kn(t){t&&t.componentInstance.$destroy()}var Gn={name:"keep-alive",abstract:!0,props:{include:Vn,exclude:Vn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Kn(t.cache[e])},watch:{include:function(t){Wn(this.cache,this._vnode,function(e){return Un(t,e)})},exclude:function(t){Wn(this.cache,this._vnode,function(e){return!Un(t,e)})}},render:function(){var t=oe(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!Un(this.include,n)||this.exclude&&Un(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Jn={KeepAlive:Gn};function Zn(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:W,extend:C,mergeOptions:Dt,defineReactive:$t},t.set=wt,t.delete=Ft,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,C(t.options.components,Jn),Rn(t),Bn(t),Mn(t),Ln(t)}Zn(Nn),Object.defineProperty(Nn.prototype,"$isServer",{get:nt}),Object.defineProperty(Nn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Nn.version="2.4.1",Nn.mpvueVersion="1.0.12";var Xn=m("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=m("style,class");m("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),m("embed,img,image,input,link,meta",!0);function Yn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},ir={};function or(t,e){return ir}function ar(t,e){return ir}function sr(t){return ir}function cr(t){return ir}function ur(t,e,n){}function pr(t,e){}function fr(t,e){}function lr(t){return ir}function dr(t){return ir}function hr(t){return"div"}function vr(t,e){return ir}function mr(t,e,n){return ir}var gr=Object.freeze({createElement:or,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:pr,appendChild:fr,parentNode:lr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:mr}),yr={create:function(t,e){_r(e)},update:function(t,e){t.data.ref!==e.data.ref&&(_r(t,!0),_r(e))},destroy:function(t){_r(t,!0)}};function _r(t,e){var n=t.data.ref;if(n){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?y(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var br=new qt("",{},[]),$r=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&Fr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&i(e.asyncFactory.error))}function Fr(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i}function xr(t,e,n){var r,i,a={};for(r=e;r<=n;++r)i=t[r].key,o(i)&&(a[i]=r);return a}function Ar(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<$r.length;++e)for(r[$r[e]]=[],n=0;n<s.length;++n)o(s[n][$r[e]])&&r[$r[e]].push(s[n][$r[e]]);function p(t){return new qt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function d(t,e,n,r,i){if(t.isRootInsert=!i,!h(t,e,n,r)){var s=t.data,c=t.children,p=t.tag;o(p)?(t.elm=t.ns?u.createElementNS(t.ns,p):u.createElement(p,t),w(t),_(t,c,e),o(s)&&$(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,r)):(t.elm=u.createTextNode(t.text),y(n,t.elm,r))}}function h(t,e,n,r){var i=t.data;if(o(i)){var s=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1,n,r),o(t.componentInstance))return v(t,e),a(s)&&g(t,e,n,r),!0}}function v(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?($(t,e),w(t)):(_r(t),e.push(t))}function g(t,e,n,i){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,o(a=s.data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](br,s);e.push(s);break}y(n,t.elm,i)}function y(t,e,n){o(t)&&(o(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function _(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function $(t,n){for(var i=0;i<r.create.length;++i)r.create[i](br,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(br,t),o(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;o(e=he)&&e!==t.context&&o(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function F(t,e,n,r,i,o){for(;r<=i;++r)d(n[r],o,t,e)}function x(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)x(t.children[n])}function A(t,e,n,r){for(;n<=r;++n){var i=e[n];o(i)&&(o(i.tag)?(k(i),x(i)):l(i.elm))}}function k(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=f(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else l(t.elm)}function O(t,e,n,r,a){var s,c,p,f,l=0,h=0,v=e.length-1,m=e[0],g=e[v],y=n.length-1,_=n[0],b=n[y],$=!a;while(l<=v&&h<=y)i(m)?m=e[++l]:i(g)?g=e[--v]:wr(m,_)?(j(m,_,r),m=e[++l],_=n[++h]):wr(g,b)?(j(g,b,r),g=e[--v],b=n[--y]):wr(m,b)?(j(m,b,r),$&&u.insertBefore(t,m.elm,u.nextSibling(g.elm)),m=e[++l],b=n[--y]):wr(g,_)?(j(g,_,r),$&&u.insertBefore(t,g.elm,m.elm),g=e[--v],_=n[++h]):(i(s)&&(s=xr(e,l,v)),c=o(_.key)?s[_.key]:null,i(c)?(d(_,r,t,m.elm),_=n[++h]):(p=e[c],wr(p,_)?(j(p,_,r),e[c]=void 0,$&&u.insertBefore(t,p.elm,m.elm),_=n[++h]):(d(_,r,t,m.elm),_=n[++h])));l>v?(f=i(n[y+1])?null:n[y+1].elm,F(t,f,n,h,y,r)):h>y&&A(t,e,l,v)}function j(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?P(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var p,f=e.data;o(f)&&o(p=f.hook)&&o(p=p.prepatch)&&p(t,e);var l=t.children,d=e.children;if(o(f)&&b(e)){for(p=0;p<r.update.length;++p)r.update[p](t,e);o(p=f.hook)&&o(p=p.update)&&p(t,e)}i(e.text)?o(l)&&o(d)?l!==d&&O(c,l,d,n,s):o(d)?(o(t.text)&&u.setTextContent(c,""),F(c,null,d,0,d.length-1,n)):o(l)?A(c,l,0,l.length-1):o(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),o(f)&&o(p=f.hook)&&o(p=p.postpatch)&&p(t,e)}}}function C(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var S=m("attrs,style,class,staticClass,staticStyle,key");function P(t,n,r){if(a(n.isComment)&&o(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var i=n.tag,s=n.data,c=n.children;if(o(s)&&(o(e=s.hook)&&o(e=e.init)&&e(n,!0),o(e=n.componentInstance)))return v(n,r),!0;if(o(i)){if(o(c))if(t.hasChildNodes()){for(var u=!0,p=t.firstChild,f=0;f<c.length;f++){if(!p||!P(p,c[f],r)){u=!1;break}p=p.nextSibling}if(!u||p)return!1}else _(n,c,r);if(o(s))for(var l in s)if(!S(l)){$(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,f){if(!i(e)){var l=!1,h=[];if(i(t))l=!0,d(e,h,c,f);else{var v=o(t.nodeType);if(!v&&wr(t,e))j(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),n=!0),a(n)&&P(t,e,h))return C(e,h,!0),t;t=p(t)}var m=t.elm,g=u.parentNode(m);if(d(e,h,m._leaveCb?null:g,u.nextSibling(m)),o(e.parent)){var y=e.parent;while(y)y.elm=e.elm,y=y.parent;if(b(e))for(var _=0;_<r.create.length;++_)r.create[_](br,e.parent)}o(g)?A(g,[t],0,0):o(t.tag)&&x(t)}}return C(e,h,l),e.elm}o(t)&&x(t)}}var kr=[yr],Or=Ar({nodeOps:gr,modules:kr});function jr(){Or.apply(this,arguments),this.$updateDataToMP()}function Cr(t,e,r){var i,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)try{i=o[a].call(t,r)}catch(n){K(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Cr(t,e,r)}),i}function Sr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Pr(t,e,n){if(t){var r,i,o;if(Array.isArray(t)){r=t.length;while(r--)i=t[r],"string"===typeof i&&(o=F(i),e[o]={type:null})}else if(f(t))for(var a in t)i=t[a],o=F(a),e[o]=f(i)?i:{type:i};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[o]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Tr(t){var e=t.$options.properties,n=t.$options.props,r={};return Pr(e,r,t),Pr(n,r,t),r}function Ir(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(ze(t,"_mpProps",n),e[n]=void 0)}),bt(e,!0)}function Dr(t,n){var r=this.$root;r.$mp||(r.$mp={});var i=r.$mp;if(i.status)return"app"===t?Cr(this,"onLaunch",i.appOptions):Cr(this,"onLoad",i.query),n();if(i.mpType=t,i.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),i.app=this,i.status="launch",this.globalData.appOptions=i.appOptions=t,Cr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),i.status="show",this.globalData.appOptions=i.appOptions=t,Cr(r,"onShow",t)},onHide:function(){i.status="hide",Cr(r,"onHide")},onError:function(t){Cr(r,"onError",t)},onUniNViewMessage:function(t){Cr(r,"onUniNViewMessage",t)}});else if("component"===t)Ir(r),e.Component({properties:Tr(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){i.status="created",i.page=this},attached:function(){i.status="attached",Cr(r,"attached")},ready:function(){i.status="ready",Cr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Cr(r,"moved")},detached:function(){i.status="detached",Cr(r,"detached")}});else{var o=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,i.page=this,i.query=t,i.status="load",Sr(o,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Cr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,i.page=this,i.status="show",Cr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){i.status="ready",Cr(r,"onReady"),n()},onHide:function(){i.status="hide",Cr(r,"onHide")},onUnload:function(){i.status="unload",Cr(r,"onUnload"),i.page=null},onPullDownRefresh:function(){Cr(r,"onPullDownRefresh")},onReachBottom:function(){Cr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Cr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Cr(r,"onPageScroll",t)},onTabItemTap:function(t){Cr(r,"onTabItemTap",t)}})}}function Er(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Nr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Nr(r,e):e):e}function Rr(t){var e=Nr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Er(t),{$k:n,$kk:n+",",$p:e}),i="$root."+n,o={};return o[i]=r,o}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Rr(t))}function Mr(t,e,n){var r,i,o,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,o=t.apply(r,i),a||(r=i=null)}return n||(n={}),function(u,p){var f=Date.now();s||!1!==n.leading||(s=f);var l=e-(f-s);return r=this,i=i?[u,Object.assign(i[1],p)]:[u,p],l<=0||l>e?(clearTimeout(a),a=null,s=f,o=t.apply(r,i),a||(r=i=null)):a||!1===n.trailing||(a=setTimeout(c,l)),o}}var qr=Mr(function(t,e){t(e)},50);function zr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var i=n.page;if("app"!==r&&i&&"function"===typeof i.setData)return i}function Lr(){var t=zr(this);if(t){var e=JSON.parse(JSON.stringify(Rr(this)));qr(t.setData.bind(t),r(e,t.data))}}function Vr(){var t=zr(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var i=t.$children[r],o=nr(i);if(o===e)return t=i,t}return t},t):t}function Ur(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var i=t||{},o=i.data;void 0===o&&(o={});var a=i.children;void 0===a&&(a=[]);var s=i.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var i=s.$slots[t],o=Array.isArray(i)?i:[i];o.forEach(function(t){r=r.concat(Ur(t,e,n))})}):a.forEach(function(t){r=r.concat(Ur(t,e,n))});var c=o.attrs,u=o.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Wr(t){var e=t.type,n=t.timeStamp,r=t.touches,i=t.detail;void 0===i&&(i={});var o=t.target;void 0===o&&(o={});var a=t.currentTarget;void 0===a&&(a={});var s=i.x,c=i.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},o,i),detail:i,currentTarget:a,stopPropagation:P,preventDefault:P};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function Kr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var i=t.currentTarget,o=i||r,a=o.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var p=rr[n]||[n],f=Ur(u._vnode,c,p);if(f.length){var l=Wr(t);if(1===f.length){var d=f[0](l);return d}f.forEach(function(t){return t(l)})}}}return Nn.config.mustUseProp=Yn,Nn.config.isReservedTag=Xn,Nn.config.isReservedAttr=Qn,Nn.config.getTagNamespace=tr,Nn.config.isUnknownElement=er,Nn.prototype.__patch__=jr,Nn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var i=r.mpType;return void 0===i&&(i="page"),this._initMP(i,function(){return ge(n,void 0,void 0)})}return ge(this,void 0,void 0)},Nn.prototype._initMP=Dr,Nn.prototype.$updateDataToMP=Lr,Nn.prototype._initDataToMP=Vr,Nn.prototype.$handleProxyWithVue=Kr,Nn})}).call(this,n("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/tabbar/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/index/index.js';

define('pages/tabbar/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/index/index"],{"09e4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),i=o(n("81d2"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,c,"next",t)}function c(t){a(o,r,i,s,c,"throw",t)}s(void 0)})}}var c=n("dd6a"),u={data:function(){return{title:"Hello",search:"",page:1,start:0,end:0,loading:!0,list:[],city:"成都",show:!1,selectIndex:0,tabList:[{name:"吃",id:"eat"},{name:"喝",id:"drink"},{name:"住宿",id:"sleep"},{name:"玩乐",id:"play"}],nearindex:0,fouceindex:0,scrollLeft:0}},onLoad:function(){},mounted:function(){this.getList()},onReachBottom:function(){this.page++,this.loading=!0,this.getList()},methods:{mune:function(){t.navigateTo({url:"../../mune/mune"})},changeBar:function(t){this.selectIndex=t},loadMore:function(t){console.log(t)},tapTab:function(){var t=s(r.default.mark(function t(e){var n,i;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.fouceindex!==e){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.getElSize("tab-bar");case 6:n=t.sent,i=n.scrollLeft,this.scrollLeft=i,this.isClickChange=!0,this.fouceindex=e;case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),changeTab:function(){var e=s(r.default.mark(function e(n){var i,o,a,s,c,u,l,f,h;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(i=n.detail.current,!this.isClickChange){e.next=5;break}return this.fouceindex=i,this.isClickChange=!1,e.abrupt("return");case 5:return e.next=7,this.getElSize("tab-bar");case 7:o=e.sent,a=o.scrollLeft,s=0,c=0;case 11:if(!(c<i)){e.next=19;break}return e.next=14,this.getElSize(this.tabList[c].id);case 14:u=e.sent,s+=u.width;case 16:c++,e.next=11;break;case 19:return l=t.getSystemInfoSync().windowWidth,e.next=22,this.getElSize(this.tabList[i].id);case 22:f=e.sent,h=f.width,s+h-a>l&&(this.scrollLeft=s+h-l),s<a&&(this.scrollLeft=s),this.isClickChange=!1,this.fouceindex=i;case 28:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),getElSize:function(e){return new Promise(function(n,r){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){n(t)}).exec()})},mapclick:function(){t.chooseLocation({success:function(t){this.city=t.name,console.log("位置名称："+t.name),console.log("详细地址："+t.address),console.log("纬度："+t.latitude),console.log("经度："+t.longitude)}})},choose:function(t){console.log(t)},getList:function(){var t=this;this.list.length<c.list.length?setTimeout(function(){t.end=10*t.page,t.list=t.list.concat(c.list.slice(t.start,t.end)),t.start=t.end,setTimeout(function(){t.loading=!1},120)},1e3):this.loading=!1},foucechange:function(t){this.fouceindex=t},foucemovechange:function(t){this.fouceindex=t},naerchange:function(t){this.nearindex=t}},components:{WaterfallFlow:i.default}};e.default=u}).call(this,n("649d")["default"])},"4fb1":function(t,e,n){"use strict";n("1942");var r=o(n("b0ce")),i=o(n("ad51"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,r.default)(i.default))},6246:function(t,e,n){},"8d37":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"titleBox"},[n("view",{staticClass:"city",attrs:{eventid:"2f2785f3-0"},on:{tap:t.mapclick}},[n("image",{staticStyle:{width:"40rpx",height:"40rpx"},attrs:{src:"../../../static/img/map.svg"}}),t._v(t._s(t.city||"地区"))]),n("view",{staticClass:"topbarbox"},[n("view",{staticClass:"fouce",class:0==t.selectIndex?"active":"",attrs:{eventid:"2f2785f3-1"},on:{tap:function(e){t.changeBar(0)}}},[n("view",[t._v("发现")]),n("view",{staticClass:"bot-line"})]),n("view",{staticClass:"near",class:1==t.selectIndex?"active":"",attrs:{eventid:"2f2785f3-2"},on:{tap:function(e){t.changeBar(1)}}},[n("view",[t._v("附近")]),n("view",{staticClass:"bot-line"})])])]),n("view",{staticClass:"searchBox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search uni-input",attrs:{type:"text",placeholder:"搜索",eventid:"2f2785f3-3"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("image",{staticStyle:{width:"40rpx",height:"40rpx"},attrs:{src:"../../../static/img/search.svg"}})]),n("view",{directives:[{name:"show",rawName:"v-show",value:0==t.selectIndex,expression:"selectIndex==0"}],staticClass:"wf_main"},[n("view",{staticClass:"munetab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabList,function(e,r){return n("view",{key:r,class:["muneitem","swiper-tab-list",t.fouceindex==r?"active":""],attrs:{id:e.id,"data-current":r,eventid:"2f2785f3-4-"+r},on:{click:function(e){t.tapTab(r)},tap:function(e){t.foucechange(r)}}},[t._v(t._s(e.name))])})),n("view",{staticClass:"nearmune"},[n("swiper",{staticClass:"swiper-box",attrs:{current:t.fouceindex,duration:"300",eventid:"2f2785f3-6"},on:{change:t.changeTab}},t._l(t.tabList,function(e,r){return n("swiper-item",{key:r,attrs:{mpcomid:"2f2785f3-0-"+r}},[n("scroll-view",{staticClass:"list",attrs:{"scroll-y":"",eventid:"2f2785f3-5-"+r},on:{scrolltolower:function(e){t.loadMore(r)}}},[t._v(t._s(e.name))])],1)}))],1)]),n("view",{directives:[{name:"show",rawName:"v-show",value:1==t.selectIndex,expression:"selectIndex==1"}],staticClass:"wf_main"},[n("view",{staticClass:"munetab"},t._l(t.tabList,function(e,r){return n("view",{key:r,staticClass:"muneitem",class:t.nearindex==r?"active":"",attrs:{eventid:"2f2785f3-7-"+r},on:{tap:function(e){t.naerchange(r)}}},[t._v(t._s(e.name))])})),n("view",{staticClass:"nearmune"},t._l(t.tabList,function(e,r){return n("view",{key:r,staticClass:"munemain",class:t.nearindex==r?"active":""},[t._v(t._s(e.name))])}))])])},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=x;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",p={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(N([])));y&&y!==r&&i.call(y,a)&&(g=y);var w=k.prototype=L.prototype=Object.create(g);_.prototype=w.constructor=k,k.constructor=_,k[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},C(E.prototype),E.prototype[s]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,n,r){var i=new E(x(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},C(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=N,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function x(t,e,n,r){var i=e&&e.prototype instanceof L?e:L,o=Object.create(i.prototype),a=new I(r||[]);return o._invoke=O(t,n,a),o}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function _(){}function k(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(n,r,o,a){var s=b(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function O(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return T()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?v:h,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},ad51:function(t,e,n){"use strict";n.r(e);var r=n("8d37"),i=n("e358");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("d515");var a=n("2877"),s=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"442f20f2",null);e["default"]=s.exports},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},d515:function(t,e,n){"use strict";var r=n("6246"),i=n.n(r);i.a},e358:function(t,e,n){"use strict";n.r(e);var r=n("09e4"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a}},[["4fb1","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/index/index.js');
__wxRoute = 'pages/tabbar/live/live';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/live/live.js';

define('pages/tabbar/live/live.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/live/live"],{"04bf":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("81d2"));function i(t){return t&&t.__esModule?t:{default:t}}var s=a("dd6a"),c={data:function(){return{selectIndex:0,list:[],page:1,start:0,end:0,loading:!0,search:""}},onLoad:function(){},mounted:function(){this.getList()},onReachBottom:function(){this.page++,this.loading=!0,this.getList()},methods:{mune:function(){t.navigateTo({url:"../../mune/mune"})},changeBar:function(t){this.selectIndex=t},choose:function(t){console.log(t)},getList:function(){var t=this;this.list.length<s.list.length?setTimeout(function(){t.end=10*t.page,t.list=t.list.concat(s.list.slice(t.start,t.end)),t.start=t.end,setTimeout(function(){t.loading=!1},120)},1e3):this.loading=!1}},components:{WaterfallFlow:n.default}};e.default=c}).call(this,a("649d")["default"])},"0a97":function(t,e,a){"use strict";var n=a("2d72"),i=a.n(n);i.a},"1ca2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"titleBox"},[a("view",{staticClass:"topbarbox"},[a("view",{staticClass:"fouce",class:0==t.selectIndex?"active":"",attrs:{eventid:"12e3684d-0"},on:{tap:function(e){t.changeBar(0)}}},[a("view",[t._v("发现")]),a("view",{staticClass:"bot-line"})]),a("view",{staticClass:"near",class:1==t.selectIndex?"active":"",attrs:{eventid:"12e3684d-1"},on:{tap:function(e){t.changeBar(1)}}},[a("view",[t._v("附近")]),a("view",{staticClass:"bot-line"})])]),a("view",[a("image",{staticStyle:{width:"40rpx",height:"40rpx"},attrs:{src:"../../../static/img/mune.svg",eventid:"12e3684d-2"},on:{click:t.mune}})])]),a("view",{staticClass:"searchBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search uni-input",attrs:{type:"text",placeholder:"搜索",eventid:"12e3684d-3"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("image",{staticStyle:{width:"40rpx",height:"40rpx"},attrs:{src:"../../../static/img/search.svg"}})]),a("view",{directives:[{name:"show",rawName:"v-show",value:0==t.selectIndex,expression:"selectIndex==0"}],staticClass:"main"},[a("waterfall-flow",{attrs:{list:t.list,loading:t.loading,eventid:"12e3684d-4",mpcomid:"12e3684d-0"},on:{click:t.choose}})],1),a("view",{directives:[{name:"show",rawName:"v-show",value:1==t.selectIndex,expression:"selectIndex==1"}],staticClass:"main"},[a("waterfall-flow",{attrs:{list:t.list,loading:t.loading,eventid:"12e3684d-5",mpcomid:"12e3684d-1"},on:{click:t.choose}})],1)])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"2d72":function(t,e,a){},a97b:function(t,e,a){"use strict";a.r(e);var n=a("04bf"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},a97f:function(t,e,a){"use strict";a.r(e);var n=a("1ca2"),i=a("a97b");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("0a97");var c=a("2877"),o=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},ee43:function(t,e,a){"use strict";a("1942");var n=s(a("b0ce")),i=s(a("a97f"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))}},[["ee43","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/live/live.js');
__wxRoute = 'pages/tabbar/publish/publish';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/publish/publish.js';

define('pages/tabbar/publish/publish.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/publish/publish"],{"063e":function(t,a,e){"use strict";e("1942");var i=n(e("b0ce")),s=n(e("adf8"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},2570:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"content",class:{active:t.active}},[e("image",{staticClass:"logo",class:{active:t.active},attrs:{src:"../../../static/logo.png",mode:"aspectFit"}}),e("view",{staticClass:"tabbar-box-wrap"},[e("view",{staticClass:"tabbar-box"},[e("view",{staticClass:"tabbar-box-item",attrs:{eventid:"38a54dad-0"},on:{click:function(a){t.goToPage("/pages/publish-detial/publish-release/publish-release")}}},[e("image",{staticClass:"box-image",attrs:{src:"../../../static/img/release.png",mode:"aspectFit"}}),e("text",{staticClass:"explain"},[t._v("发图文")])]),e("view",{staticClass:"tabbar-box-item",attrs:{eventid:"38a54dad-1"},on:{click:function(a){t.goToPage("/pages/publish-detial/publish-video/publish-video")}}},[e("image",{staticClass:"box-image",attrs:{src:"../../../static/img/video.png",mode:"aspectFit"}}),e("text",{staticClass:"explain"},[t._v("发视频")])]),e("view",{staticClass:"tabbar-box-item",attrs:{eventid:"38a54dad-2"},on:{click:function(a){t.goToPage("/pages/publish-detial/publish-qa/publish-qa")}}},[e("image",{staticClass:"box-image",attrs:{src:"../../../static/img/qa.png",mode:"aspectFit"}}),e("text",{staticClass:"explain"},[t._v("提问")])])])])])},s=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return s})},"9c12":function(t,a,e){},a879:function(t,a,e){"use strict";e.r(a);var i=e("f2bd"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);a["default"]=s.a},adf8:function(t,a,e){"use strict";e.r(a);var i=e("2570"),s=e("a879");for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);e("e3e9");var c=e("2877"),o=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,"59382b0a",null);a["default"]=o.exports},e3e9:function(t,a,e){"use strict";var i=e("9c12"),s=e.n(i);s.a},f2bd:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{active:!1}},onLoad:function(){},onShow:function(){this.active=!0},onHide:function(){this.active=!1},methods:{goToPage:function(a){a&&t.navigateTo({url:a})}}};a.default=e}).call(this,e("649d")["default"])}},[["063e","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/publish/publish.js');
__wxRoute = 'pages/tabbar/message/message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/message/message.js';

define('pages/tabbar/message/message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/message/message"],{"0568":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{}};n.default=u},"2a1a":function(t,n,e){"use strict";e.r(n);var u=e("0568"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},3595:function(t,n,e){"use strict";e("1942");var u=r(e("b0ce")),a=r(e("8828"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,u.default)(a.default))},"430b":function(t,n,e){},4564:function(t,n,e){"use strict";var u=e("430b"),a=e.n(u);a.a},8828:function(t,n,e){"use strict";e.r(n);var u=e("c671"),a=e("2a1a");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("4564");var o=e("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=c.exports},c671:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[t._v("页面 - 4")])},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})}},[["3595","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/message/message.js');
__wxRoute = 'pages/tabbar/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/user/user.js';

define('pages/tabbar/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/user/user"],{"2be6":function(t,s,a){"use strict";var i=a("c816"),e=a.n(i);e.a},"6b6e":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"content"},[a("view",{staticClass:"usertitle"},[a("view",{staticClass:"userimgbox"},[a("image",{staticClass:"userimg",attrs:{src:t.userimgscr}})]),a("view",{staticClass:"username"},[t._v("xxx")]),a("view",{staticClass:"userintro"},[t._v("十九八七六五四三二一十九八七六五四三二一")]),a("view",{staticClass:"userInfoBox"},[a("view",{staticClass:"attention"},[a("view",{staticClass:"attentionNum"},[t._v(t._s(t.attention))]),a("view",[t._v("关注")])]),a("view",{staticClass:"fans"},[a("view",{staticClass:"fansNum"},[t._v(t._s(t.fans))]),a("view",[t._v("粉丝")])]),a("view",{staticClass:"like"},[a("view",{staticClass:"likeNum"},[t._v(t._s(t.like))]),a("view",[t._v("点赞")])])])]),a("scroll-view",{staticClass:"usermain",attrs:{"scroll-y":""}},[a("view",{staticClass:"walletBox"},[a("view",{staticClass:"tabbox"},[a("image",{staticClass:"walletimg",attrs:{src:"../../../static/img/wallet.svg"}}),a("view",{staticClass:"text"},[t._v("钱包")])]),a("view",{staticClass:"tabbox"},[a("image",{staticClass:"walletimg",attrs:{src:"../../../static/img/tuiguang.svg"}}),a("view",{staticClass:"text"},[t._v("关注")])])]),a("view",{staticClass:"shopBox"},[a("view",{staticClass:"shopBoxTitle",attrs:{eventid:"29ff48a6-0"},on:{tap:t.erwei}},[t._v("全部订单")]),a("view",{staticClass:"orderBox"},t._l(t.orderlist,function(s,i){return a("view",{key:i,staticClass:"orderitem"},[a("image",{staticClass:"orderimg",attrs:{src:s.img,mode:""}}),a("view",{staticClass:"ordername"},[t._v(t._s(s.name))])])}))]),a("scroll-view",{attrs:{"scroll-y":""}},[a("view"),a("view"),a("view"),a("view")])],1)],1)},e=[];a.d(s,"a",function(){return i}),a.d(s,"b",function(){return e})},"891e":function(t,s,a){"use strict";a.r(s);var i=a("6b6e"),e=a("da39");for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);a("2be6");var c=a("2877"),r=Object(c["a"])(e["default"],i["a"],i["b"],!1,null,null,null);s["default"]=r.exports},c69a:function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{userimgscr:"../../../static/img/tarck.jpg",attention:30,fans:12,like:60,orderlist:[{name:"待付款",img:"../../../static/img/fukuan.svg",id:1},{name:"待使用",img:"../../../static/img/daishiyong.svg",id:2},{name:"待评价",img:"../../../static/img/pingjia.svg",id:3},{name:"退款",img:"../../../static/img/tuikuan.svg",id:4}]}},onLoad:function(){},methods:{erwei:function(){t.scanCode({success:function(t){console.log("条码类型："+t.scanType),console.log("条码内容："+t.result)}})}}};s.default=a}).call(this,a("649d")["default"])},c816:function(t,s,a){},ca1b:function(t,s,a){"use strict";a("1942");var i=n(a("b0ce")),e=n(a("891e"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))},da39:function(t,s,a){"use strict";a.r(s);var i=a("c69a"),e=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(s,t,function(){return i[t]})}(n);s["default"]=e.a}},[["ca1b","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/user/user.js');
__wxRoute = 'pages/publish-detial/publish-release/publish-release';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/publish-detial/publish-release/publish-release.js';

define('pages/publish-detial/publish-release/publish-release.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/publish-detial/publish-release/publish-release"],{"2cfa":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t._v("页面 - 发图文")])},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"737d":function(t,e,n){"use strict";var u=n("e2c0"),a=n.n(u);a.a},8498:function(t,e,n){"use strict";n.r(e);var u=n("a00e"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},a00e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{}};e.default=u},b58a:function(t,e,n){"use strict";n.r(e);var u=n("2cfa"),a=n("8498");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("737d");var c=n("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},c6b7:function(t,e,n){"use strict";n("1942");var u=r(n("b0ce")),a=r(n("b58a"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,u.default)(a.default))},e2c0:function(t,e,n){}},[["c6b7","common/runtime","common/vendor"]]]);
});
require('pages/publish-detial/publish-release/publish-release.js');
__wxRoute = 'pages/publish-detial/publish-video/publish-video';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/publish-detial/publish-video/publish-video.js';

define('pages/publish-detial/publish-video/publish-video.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/publish-detial/publish-video/publish-video"],{"0a5d":function(t,n,e){"use strict";e.r(n);var u=e("87bf"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=a.a},"2d8a":function(t,n,e){"use strict";e.r(n);var u=e("5811"),a=e("0a5d");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("eef0");var r=e("2877"),i=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},5811:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[t._v("页面 - 发视频")])},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"6b5b":function(t,n,e){},"87bf":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{}};n.default=u},da18:function(t,n,e){"use strict";e("1942");var u=o(e("b0ce")),a=o(e("2d8a"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,u.default)(a.default))},eef0:function(t,n,e){"use strict";var u=e("6b5b"),a=e.n(u);a.a}},[["da18","common/runtime","common/vendor"]]]);
});
require('pages/publish-detial/publish-video/publish-video.js');
__wxRoute = 'pages/publish-detial/publish-qa/publish-qa';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/publish-detial/publish-qa/publish-qa.js';

define('pages/publish-detial/publish-qa/publish-qa.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/publish-detial/publish-qa/publish-qa"],{"05e2":function(t,n,e){"use strict";e("1942");var u=r(e("b0ce")),a=r(e("cbaf"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,u.default)(a.default))},"25ba":function(t,n,e){"use strict";e.r(n);var u=e("b733"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},"5fc4":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[t._v("页面 - 提问")])},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"79d2":function(t,n,e){"use strict";var u=e("7cd3"),a=e.n(u);a.a},"7cd3":function(t,n,e){},b733:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}}};n.default=u},cbaf:function(t,n,e){"use strict";e.r(n);var u=e("5fc4"),a=e("25ba");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("79d2");var c=e("2877"),f=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports}},[["05e2","common/runtime","common/vendor"]]]);
});
require('pages/publish-detial/publish-qa/publish-qa.js');
__wxRoute = 'pages/mune/mune';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mune/mune.js';

define('pages/mune/mune.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mune/mune"],{1596:function(i,t,c){"use strict";c.r(t);var n=c("1c99"),e=c.n(n);for(var a in n)"default"!==a&&function(i){c.d(t,i,function(){return n[i]})}(a);t["default"]=e.a},"1c99":function(i,t,c){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e(c("be02"));function e(i){return i&&i.__esModule?i:{default:i}}var a={data:function(){return{name:"wkiwi",height:0,categoryActive:0,scrollTop:0,scrollLeftTop:0,classifyData:n.default,arr:[0,584,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],leftItemHeight:51,navLeftHeight:0,diff:0,tabBarHeight:0}},onShow:function(){},onLoad:function(){this.height=i.getSystemInfoSync().windowHeight-this.tabBarHeight},onReady:function(){var t=this,c=i.createSelectorQuery();c.selectAll(".nav-left-item").boundingClientRect(function(i){t.leftItemHeight=i[0].height,t.navLeftHeight=t.leftItemHeight*n.default.length,t.diff=t.navLeftHeight-t.height}),c.selectAll(".box").boundingClientRect(function(i){var c=[0],n=0;i.forEach(function(i){n+=i.height,c.push(n)}),console.log(c),t.arr=c}).exec()},methods:{scroll:function(i){var t=this;this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){t.scrollHeight=i.detail.scrollTop+t.height/2;for(var c=0;c<t.arr.length;c++){var e=t.arr[c],a=t.arr[c+1];if(!a||t.scrollHeight>=e&&t.scrollHeight<a)return t.categoryActive=c,t.diff>0&&(t.scrollLeftTop=Math.round(t.categoryActive*t.diff/(n.default.length-1))),!1}t.categoryActive=0,t.timeoutId=void 0},10)},categoryClickMain:function(i){this.categoryActive=i,this.scrollTop=this.arr[i]},cart:function(t){i.showToast({title:t,icon:"none"})}},components:{}};t.default=a}).call(this,c("649d")["default"])},"3b80":function(i,t,c){"use strict";c.r(t);var n=c("4afc"),e=c("1596");for(var a in e)"default"!==a&&function(i){c.d(t,i,function(){return e[i]})}(a);c("ece3");var s=c("2877"),f=Object(s["a"])(e["default"],n["a"],n["b"],!1,null,null,null);t["default"]=f.exports},"4afc":function(i,t,c){"use strict";var n=function(){var i=this,t=i.$createElement,c=i._self._c||t;return c("view",{staticClass:"page-body",style:"height:"+i.height+"px"},[c("scroll-view",{staticClass:"nav-left",style:"height:"+i.height+"px",attrs:{"scroll-y":"","scroll-top":i.scrollLeftTop,"scroll-with-animation":""}},i._l(i.classifyData,function(t,n){return c("view",{key:n,staticClass:"nav-left-item",class:n==i.categoryActive?"active":"",attrs:{eventid:"7e87e260-0-"+n},on:{click:function(t){i.categoryClickMain(n)}}},[i._v(i._s(t.name))])})),c("scroll-view",{staticClass:"nav-right",style:"height:"+i.height+"px",attrs:{"scroll-y":"","scroll-top":i.scrollTop,"scroll-with-animation":"",eventid:"7e87e260-2"},on:{scroll:i.scroll}},i._l(i.classifyData,function(t,n){return c("view",{key:n,staticClass:"box"},i._l(t.foods,function(t,e){return c("view",{key:e,staticClass:"nav-right-item",attrs:{id:0==e?"first":"",eventid:"7e87e260-1-"+n+"-"+e},on:{click:function(c){i.cart(t.name)}}},[c("image",{attrs:{src:t.icon}}),c("view",[i._v(i._s(t.name))])])}))}))],1)},e=[];c.d(t,"a",function(){return n}),c.d(t,"b",function(){return e})},7850:function(i,t,c){},be02:function(i,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{name:"品牌",foods:[{name:"A字裙",key:"A字裙",icon:"http://img.kiwifruits.cn/classify/1/1.jpg",cat:10},{name:"T恤",key:"T恤",icon:"http://img.kiwifruits.cn/classify/1/2.jpg",cat:10},{name:"半身裙",key:"半身裙",icon:"http://img.kiwifruits.cn/classify/1/3.jpg",cat:10},{name:"衬衫",key:"衬衫",icon:"http://img.kiwifruits.cn/classify/1/4.jpg",cat:10},{name:"短裙",key:"短裙",icon:"http://img.kiwifruits.cn/classify/1/5.jpg",cat:10},{name:"阔腿裤",key:"阔腿裤",icon:"http://img.kiwifruits.cn/classify/1/6.jpg",cat:10},{name:"连衣裙",key:"连衣裙",icon:"http://img.kiwifruits.cn/classify/1/7.jpg",cat:10},{name:"妈妈装",key:"妈妈装",icon:"http://img.kiwifruits.cn/classify/1/8.jpg",cat:10},{name:"牛仔裤",key:"牛仔裤",icon:"http://img.kiwifruits.cn/classify/1/9.jpg",cat:10},{name:"情侣装",key:"情侣装",icon:"http://img.kiwifruits.cn/classify/1/10.jpg",cat:10},{name:"休闲裤",key:"休闲裤",icon:"http://img.kiwifruits.cn/classify/1/11.jpg",cat:10},{name:"雪纺衫",key:"雪纺衫",icon:"http://img.kiwifruits.cn/classify/1/12.jpg",cat:10},{name:"防晒衣",key:"防晒衣",icon:"http://img.kiwifruits.cn/classify/1/13.jpg",cat:10},{name:"礼服/婚纱",key:"礼服婚纱",icon:"http://img.kiwifruits.cn/classify/1/14.jpg",cat:10}]},{name:"美食",foods:[{name:"火锅",key:"火锅",icon:"http://img.kiwifruits.cn/classify/2/1.jpg",cat:6},{name:"糕点饼干",key:"糕点饼干",icon:"http://img.kiwifruits.cn/classify/2/2.jpg",cat:6},{name:"坚果果干",key:"坚果果干",icon:"http://img.kiwifruits.cn/classify/2/3.jpg",cat:6},{name:"酒类",key:"酒类",icon:"http://img.kiwifruits.cn/classify/2/4.jpg",cat:6},{name:"辣条",key:"辣条",icon:"http://img.kiwifruits.cn/classify/2/5.jpg",cat:6},{name:"大礼包",key:"大礼包",icon:"http://img.kiwifruits.cn/classify/2/6.jpg",cat:6},{name:"精品茗茶",key:"茶",icon:"http://img.kiwifruits.cn/classify/2/7.jpg",cat:6},{name:"休闲食品",key:"休闲食品",icon:"http://img.kiwifruits.cn/classify/2/8.jpg",cat:6},{name:"糖果巧克力",key:"糖果巧克力",icon:"http://img.kiwifruits.cn/classify/2/9.jpg",cat:6},{name:"方便速食",key:"方便速食",icon:"http://img.kiwifruits.cn/classify/2/10.jpg",cat:6},{name:"营养代餐",key:"营养代餐",icon:"http://img.kiwifruits.cn/classify/2/11.jpg",cat:6},{name:"粮油副食",key:"粮油",icon:"http://img.kiwifruits.cn/classify/2/12.jpg",cat:6},{name:"生鲜水果",key:"水果",icon:"http://img.kiwifruits.cn/classify/2/13.jpg",cat:6},{name:"饮品",key:"饮品",icon:"http://img.kiwifruits.cn/classify/2/14.jpg",cat:6}]},{name:"饮品",foods:[{name:"化妆刷",key:"化妆刷",icon:"http://img.kiwifruits.cn/classify/3/1.jpg",cat:3},{name:"粉底",key:"粉底",icon:"http://img.kiwifruits.cn/classify/3/2.jpg",cat:3},{name:"洗发护发",key:"洗发护发",icon:"http://img.kiwifruits.cn/classify/3/3.jpg",cat:3},{name:"美容工具",key:"美容工具",icon:"http://img.kiwifruits.cn/classify/3/4.jpg",cat:3},{name:"眼部护理",key:"眼部护理",icon:"http://img.kiwifruits.cn/classify/3/5.jpg",cat:3},{name:"眉妆",key:"眉妆",icon:"http://img.kiwifruits.cn/classify/3/6.jpg",cat:3},{name:"卸妆品",key:"卸妆品",icon:"http://img.kiwifruits.cn/classify/3/7.jpg",cat:3},{name:"基础护肤",key:"基础护肤",icon:"http://img.kiwifruits.cn/classify/3/8.jpg",cat:3},{name:"眼妆",key:"眼妆",icon:"http://img.kiwifruits.cn/classify/3/9.jpg",cat:3},{name:"唇妆",key:"唇妆",icon:"http://img.kiwifruits.cn/classify/3/10.jpg",cat:3},{name:"面膜",key:"面膜",icon:"http://img.kiwifruits.cn/classify/3/11.jpg",cat:3},{name:"沐浴用品",key:"沐浴用品",icon:"http://img.kiwifruits.cn/classify/3/12.jpg",cat:3},{name:"护肤套装",key:"护肤套装",icon:"http://img.kiwifruits.cn/classify/3/13.jpg",cat:3},{name:"防晒品",key:"防晒品",icon:"http://img.kiwifruits.cn/classify/3/14.jpg",cat:3},{name:"美甲",key:"美甲",icon:"http://img.kiwifruits.cn/classify/3/15.jpg",cat:3}]},{name:"住宿",foods:[{name:"垃圾袋",key:"垃圾袋",icon:"http://img.kiwifruits.cn/classify/4/1.jpg",cat:4},{name:"纸巾",key:"纸巾",icon:"http://img.kiwifruits.cn/classify/4/2.jpg",cat:4},{name:"驱蚊用品",key:"驱蚊用品",icon:"http://img.kiwifruits.cn/classify/4/3.jpg",cat:4},{name:"收纳神器",key:"收纳神器",icon:"http://img.kiwifruits.cn/classify/4/4.jpg",cat:4},{name:"厨房用品",key:"厨房用品",icon:"http://img.kiwifruits.cn/classify/4/5.jpg",cat:4},{name:"厨房烹饪",key:"烹饪",icon:"http://img.kiwifruits.cn/classify/4/6.jpg",cat:4},{name:"衣物晾晒",key:"衣物晾晒",icon:"http://img.kiwifruits.cn/classify/4/7.jpg",cat:4},{name:"衣物护理",key:"衣物护理",icon:"http://img.kiwifruits.cn/classify/4/8.jpg",cat:4},{name:"宠物用品",key:"宠物用品",icon:"http://img.kiwifruits.cn/classify/4/9.jpg",cat:4},{name:"医药保健",key:"医药",icon:"http://img.kiwifruits.cn/classify/4/10.jpg",cat:4},{name:"日用百货",key:"百货",icon:"http://img.kiwifruits.cn/classify/4/11.jpg",cat:4},{name:"清洁用品",key:"清洁",icon:"http://img.kiwifruits.cn/classify/4/12.jpg",cat:4},{name:"绿植园艺",key:"绿植",icon:"http://img.kiwifruits.cn/classify/4/13.jpg",cat:4}]},{name:"玩乐",foods:[{name:"爸爸装",key:"爸爸装",icon:"http://img.kiwifruits.cn/classify/5/1.jpg",cat:12},{name:"牛仔裤",key:"牛仔裤",icon:"http://img.kiwifruits.cn/classify/5/2.jpg",cat:12},{name:"衬衫",key:"衬衫",icon:"http://img.kiwifruits.cn/classify/5/3.jpg",cat:12},{name:"休闲裤",key:"休闲裤",icon:"http://img.kiwifruits.cn/classify/5/4.jpg",cat:12},{name:"外套",key:"外套",icon:"http://img.kiwifruits.cn/classify/5/5.jpg",cat:12},{name:"T恤",key:"T恤",icon:"http://img.kiwifruits.cn/classify/5/6.jpg",cat:12},{name:"套装",key:"套装",icon:"http://img.kiwifruits.cn/classify/5/7.jpg",cat:12},{name:"运动裤",key:"运动裤",icon:"http://img.kiwifruits.cn/classify/5/8.jpg",cat:12},{name:"马甲/背心",key:"马甲背心",icon:"http://img.kiwifruits.cn/classify/5/9.jpg",cat:12},{name:"POLO衫",key:"POLO衫",icon:"http://img.kiwifruits.cn/classify/5/10.jpg",cat:12},{name:"商务装",key:"商务装",icon:"http://img.kiwifruits.cn/classify/5/11.jpg",cat:12}]}];t.default=n},df89:function(i,t,c){"use strict";c("1942");var n=a(c("b0ce")),e=a(c("3b80"));function a(i){return i&&i.__esModule?i:{default:i}}Page((0,n.default)(e.default))},ece3:function(i,t,c){"use strict";var n=c("7850"),e=c.n(n);e.a}},[["df89","common/runtime","common/vendor"]]]);
});
require('pages/mune/mune.js');
__wxRoute = 'pages/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/category.js';

define('pages/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"1ed3":function(t,e,n){"use strict";n.r(e);var a=n("613d"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},"337e":function(t,e,n){"use strict";var a=n("af6f"),u=n.n(a);u.a},"3bfc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"banner"},[n("image",{attrs:{src:t.banner}})]),t._v(t._s(t.title))])},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},"613d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"",banner:""}},onLoad:function(t){this.title=t.name}};e.default=a},af6f:function(t,e,n){},b3e7:function(t,e,n){"use strict";n.r(e);var a=n("3bfc"),u=n("1ed3");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("337e");var c=n("2877"),f=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=f.exports},c23c:function(t,e,n){"use strict";n("1942");var a=r(n("b0ce")),u=r(n("b3e7"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(u.default))}},[["c23c","common/runtime","common/vendor"]]]);
});
require('pages/category/category.js');

