console.log("ts admin connected...");var fbIcon=document.getElementById("fbIcon"),twIcon=document.getElementById("twIcon"),inIcon=document.getElementById("inIcon"),piIcon=document.getElementById("piIcon"),yoIcon=document.getElementById("yoIcon"),fbLink=fbIcon.getAttribute("href");console.log(fbLink),""===fbLink?(console.log("blank"),fbIcon.className+=" hideIcon"):(console.log("link working with refresh"),fbIcon.className+=" showIcon"),console.log(fbLink);