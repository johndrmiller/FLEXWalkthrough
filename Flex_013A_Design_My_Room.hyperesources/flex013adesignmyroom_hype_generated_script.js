//	HYPE.documents["Flex_013A_Design_My_Room"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="Flex_013A_Design_My_Room.hyperesources",c="Flex_013A_Design_My_Room",e="flex013adesignmyroom_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("flex013adesignmyroom_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_530","HYPE_dtl_530",!0==(null!=a&&10>a||false==!0)?"HYPE-530.full.min.js":"HYPE-530.thin.min.js"),false==!0&&(a=a||l("HYPE_w_530","HYPE_wdtl_530","HYPE-530.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"exitFunction",source:"function(hypeDocument, element, event) {\t\n\twindow.close()\n}",identifier:"15"},{name:"videoEndListen",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById('room_customize').addEventListener('ended', function(){\n\t\t//when video ends: start other timeline\n\t\thypeDocument.startTimelineNamed('videoAfterEvent');\n\t});\n\t\n}",identifier:"21"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_530(c,e,{"3":{n:"arumsansblackitalic-webfont.ttf"},"12":{n:"arumsansbolditalic-webfont.eot"},"21":{p:1,n:"arumsansitalic-webfont.svg",g:"12",t:"image/svg+xml"},"4":{n:"arumsansblackitalic-webfont.woff"},"30":{n:"ArumSansRegular.woff"},"13":{p:1,n:"arumsansbolditalic-webfont.svg",g:"10",t:"image/svg+xml"},"5":{n:"arumsansbold-webfont.eot"},"22":{n:"arumsansitalic-webfont.ttf"},"6":{p:1,n:"arumsansbold-webfont.svg",g:"9",t:"image/svg+xml"},"31":{p:1,n:"Edit-my-Avatar.jpg",g:"16",o:true,t:"@1x"},"14":{n:"arumsansbolditalic-webfont.ttf"},"7":{n:"arumsansbold-webfont.ttf"},"23":{n:"arumsansitalic-webfont.woff"},"32":{p:1,n:"Edit-my-Avatar_2x.jpg",g:"16",o:true,t:"@2x"},"15":{n:"arumsansbolditalic-webfont.woff"},"8":{n:"arumsansbold-webfont.woff"},"24":{n:"arumsansregular-webfont.eot"},"9":{n:"ArumSansBold.eot"},"33":{n:"Room-customize.m4v",g:"18",t:"video/mp4"},"16":{n:"arumsansextrabold-webfont.eot"},"25":{p:1,n:"arumsansregular-webfont.svg",g:"13",t:"image/svg+xml"},"34":{n:"Room-customize_libtheora.ogv",g:"18",t:"video/ogg"},"17":{p:1,n:"arumsansextrabold-webfont.svg",g:"11",t:"image/svg+xml"},"26":{n:"arumsansregular-webfont.ttf"},"35":{n:"Room-customize_VP8.webm",g:"18",t:"video/webm"},"18":{n:"arumsansextrabold-webfont.ttf"},"27":{n:"arumsansregular-webfont.woff"},"36":{p:1,n:"Triangle.png",g:"52",t:"@1x"},"19":{n:"arumsansextrabold-webfont.woff"},"28":{n:"ArumSansRegular.eot"},"29":{n:"ArumSansRegular.ttf"},"10":{n:"ArumSansBold.ttf"},"0":{n:"arumsansblack-webfont.eot"},"1":{n:"arumsansblackitalic-webfont.eot"},"11":{n:"ArumSansBold.woff"},"2":{p:1,n:"arumsansblackitalic-webfont.svg",g:"8",t:"image/svg+xml"},"20":{n:"arumsansitalic-webfont.eot"}},h,["<style>\n@font-face {\n    font-family: 'ArumSansRg';\n    src: url('Flex_013A_Design_My_Room.hyperesources/ArumSansRegular.eot'); /* IE9 Compat Modes */\n    src: url('Flex_013A_Design_My_Room.hyperesources/ArumSansRegular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansRegular.woff') format('woff'), /* Modern Browsers */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansRegular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansRegular.svg#ArumSansRegular') format('svg'); /* Legacy iOS */\n    font-style: normal;\n    font-weight: normal;\n    text-rendering: optimizeLegibility;\n}\n@font-face {\n    font-family: 'ArumSansRg';\n    src: url('Flex_013A_Design_My_Room.hyperesources/ArumSansBold.eot'); /* IE9 Compat Modes */\n    src: url('Flex_013A_Design_My_Room.hyperesources/ArumSansBold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansBold.woff') format('woff'), /* Modern Browsers */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansBold.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansBold.svg#ArumSansBold') format('svg'); /* Legacy iOS */\n    font-style: normal;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n}\n@font-face {\n    font-family: 'ArumSansRg';\n    src: url('Flex_013A_Design_My_Room.hyperesources/ArumSansItalic.eot'); /* IE9 Compat Modes */\n    src: url('Flex_013A_Design_My_Room.hyperesources/ArumSansItalic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansItalic.woff') format('woff'), /* Modern Browsers */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansItalic.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansItalic.svg#ArumSansItalic') format('svg'); /* Legacy iOS */\n    font-style: italic;\n    font-weight: normal;\n    text-rendering: optimizeLegibility;\n}\n@font-face {\n    font-family: 'ArumSansRg';\n    src: url('Flex_013A_Design_My_Room.hyperesources/ArumSansBoldItalic.eot'); /* IE9 Compat Modes */\n    src: url('Flex_013A_Design_My_Room.hyperesources/ArumSansBoldItalic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansBoldItalic.woff') format('woff'), /* Modern Browsers */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansBoldItalic.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('Flex_013A_Design_My_Room.hyperesources/ArumSansBoldItalic.svg#ArumSansBoldItalic') format('svg'); /* Legacy iOS */\n    font-style: italic;\n    font-weight: bold;\n    text-rendering: optimizeLegibility;\n}\n</style>"],d,[{n:"Flex_013B_Edit_My_Avatar",o:"1",X:[0]}],[{A:{a:[{p:4,h:"21"}]},o:"3",p:"600px",x:0,cA:false,Z:650,Y:1024,c:"#E8E9EA",L:[],bY:1,d:1024,U:{"66":{V:{MainMenuReturn:"80","Main Timeline":"79"},W:"79",n:"Symbol"}},T:{"80":{c:"66",z:0.06,i:"80",n:"MainMenuReturn",a:[{f:"c",y:0,z:0.06,i:"b",e:25,s:0,o:"67"},{f:"c",y:0,z:0.01,i:"a",e:21,s:200,o:"69"},{y:0.01,i:"a",s:21,z:0,o:"69",f:"c"},{y:0.06,i:"b",s:25,z:0,o:"67",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:45.16,b:[{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"79"}],a:[{y:0,p:1,i:"Video Track",z:45.16,o:"76",f:"a"},{f:"c",y:0,z:0.24,i:"e",e:1,s:0,o:"77"},{f:"c",y:0,z:0.23,i:"e",e:1,s:0,o:"78"},{y:0.23,i:"e",s:1,z:0,o:"78",f:"c"},{y:0.24,i:"e",s:1,z:0,o:"77",f:"c"}],f:30},"20":{i:"20",n:"videoAfterEvent",z:0,b:[],a:[],f:30},"79":{c:"66",z:0,i:"79",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["69","75","70","71","72","68","73","74","67","66","77","78","76","65"],v:{"68":{bR:0,w:"",h:"52",p:"no-repeat",x:"visible",i:"Triangle",q:"100% 100%",a:170,j:"absolute",b:25,z:3,k:"div",bF:"67",d:25,c:25,r:"inline",f:90},"74":{c:151,bS:36,d:25,I:"None",J:"None",K:"None",g:"#C80000",L:"None",M:0,N:0,bF:"67",A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,C:"#A0A0A0",z:1,P:0,D:"#A0A0A0",a:195,b:25},"70":{c:30,d:21,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"Yes_button",w:"",N:0,A:"#A0A0A0",x:"visible",aA:{a:[{j:"Flex_Dashboard_Screen.html",p:5,k:false}]},B:"#A0A0A0",j:"absolute",k:"div",C:"#A0A0A0",z:6,O:0,D:"#A0A0A0",bF:"67",P:0,a:271,b:2},"69":{c:146,d:21,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"Start_Return",N:0,bF:"67",A:"#A0A0A0",x:"visible",aA:{a:[{b:"80",p:3,z:false}]},B:"#A0A0A0",j:"absolute",k:"div",C:"#A0A0A0",z:32,O:0,D:"#A0A0A0",P:0,a:200,b:27},"75":{c:26,d:21,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"No_button",N:0,bF:"67",A:"#A0A0A0",x:"visible",aA:{a:[{b:"80",p:3,z:true}]},B:"#A0A0A0",j:"absolute",k:"div",C:"#A0A0A0",z:7,O:0,D:"#A0A0A0",P:0,a:312,b:2},"65":{w:"",h:"16",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:2,k:"div",c:1024,d:576,e:0},"71":{G:"#FFFFFF",aU:0,c:332,H:"none",bS:36,d:14,I:"None",aV:2,r:"inline",s:"Arial,Helvetica,Sans-Serif",t:13,Y:13,u:"italic",Z:"break-word",M:0,v:"bold",i:"RMM_confirm",w:"Leave this section and go to Main Menu? &nbsp; Yes &nbsp;/ &nbsp;No",bF:"67",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:0,aT:0,a:10,b:4},"76":{aR:"0",x:"visible",i:"room_customize",bE:"18",a:0,j:"absolute",b:0,c:1024,k:"video",z:3,d:576,aO:"0",aQ:"0",aH:"1"},"66":{x:"visible",a:465,cA:false,bX:false,j:"absolute",b:-25,c:346,k:"div",bY:1,d:50,z:7,bZ:180,cV:[]},"72":{c:346,bS:36,d:25,I:"None",J:"None",K:"None",g:"#C80000",L:"None",M:0,N:0,bF:"67",A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:0,C:"#A0A0A0",z:4,P:0,D:"#A0A0A0",a:0,b:0},"77":{G:"#000000",aU:8,c:1024,d:106,aV:8,r:"inline",e:0,s:"ArumSansRg",t:18,Y:22,Z:"break-word",aP:"default",v:"bold",w:"<div style=\"width:auto; height:auto;color: rgb(20, 20, 150);background-color: rgb(145, 215, 255); padding: 20px;border-radius:5px;border-bottom:3px solid rgb(20, 20, 150);border-right:2px solid rgb(20, 20, 150);border-left:1px solid rgb(20, 20, 150);border-top:1px solid rgb(20, 20, 150);\"><p style=\"margin-top: 0px; margin-bottom: 0px;\">Students can decorate their room by purchasing items from the Item Shop. As students progress through lessons and earn points, these points can be redeemed for decorative items from the shop. Purchased items appear in the Design My Room tab, and students can drag and drop items from the tab to their room to decorate and personalize it. New items become available every five lessons, and item categories include flooring, furniture, wallpaper, and miscellaneous items.</p></div><br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:-8,F:"justify",b:510},"73":{G:"#FFFFFF",aU:0,c:134,H:"none",bS:36,d:13,I:"Solid",aV:2,r:"inline",s:"Arial,Helvetica,Sans-Serif",t:13,Y:13,u:"italic",Z:"break-word",M:1,v:"bold",i:"RMM",w:"Return to Main Menu",bF:"67",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:0,aT:0,a:205,b:28},"67":{x:"visible",i:"ReturnToMainMenu",a:0,bS:36,j:"absolute",bF:"66",c:346,k:"div",z:12,d:50,r:"inline",b:0},"78":{b:463,z:4,K:"None",c:178,L:"None",d:18,aS:10,M:0,e:0,bD:"none",N:0,aT:10,O:0,g:"#C80000",aU:10,P:0,aV:10,j:"absolute",aI:0,k:"div",aJ:0,aK:0,aL:0,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"ArumSansRg",D:"#A0A0A0",t:16,aA:{a:[{p:4,h:"15"}]},F:"center",G:"#FFFFFF",aP:"pointer",w:"RETURN TO ROOM",x:"visible",I:"None",a:813,y:"preserve",J:"None"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
