var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="gmpy2.data";var REMOTE_PACKAGE_BASE="gmpy2.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:430699,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1296,2599,3563,4978,6355,7592,8802,10015,11169,12250,13306,14325,15439,16757,17962,19002,2e4,21031,21991,22928,23861,24776,25727,26806,28600,29982,31268,32585,34022,34881,36030,37175,38350,39435,40605,41845,43041,44299,45316,46133,46892,47937,49030,50239,51512,52524,53614,54894,56079,57084,58259,59444,60394,61506,62215,63067,64543,65670,66781,67910,69003,70096,71401,72538,73560,74615,75915,76918,78031,79104,80014,81389,82536,83783,84715,86092,87560,88785,90174,91343,92552,93703,94908,96119,97432,98746,99740,101049,102425,103686,104735,105921,107101,108290,109359,110568,112004,113288,114505,115587,116538,118092,119258,120904,122088,123231,124735,125954,127538,129069,130574,132135,133713,134931,136434,137777,139232,140689,142036,143454,144749,145999,147538,148908,150336,151879,153288,154636,156140,157734,159125,160675,162153,163716,165105,166294,167776,169185,170622,171971,173577,175135,176679,178278,179682,181337,182413,183900,185350,186992,188539,189999,191526,192807,194130,195077,196527,197844,199366,200552,201982,203241,204533,205884,207475,209202,210909,212579,214127,215651,217043,218568,219921,221553,223112,224607,226089,227526,229121,230548,231587,233270,234885,236515,238220,239821,241409,243070,244477,246120,247779,249192,250839,252375,253825,254898,256469,257742,259087,260456,262107,263775,265134,266622,268069,269275,270820,272445,274043,275631,277056,278646,280210,281658,283284,284682,285989,287346,288898,290437,291878,292954,294149,295079,296071,297604,298915,300169,301482,302765,304040,305187,306568,307929,309323,310898,312383,313953,315548,317124,318802,320444,322097,323700,325318,326865,328463,330016,331320,332950,334416,336e3,337324,338565,340183,341843,342947,344513,346021,347616,349191,350120,351378,352287,353302,354167,354757,355731,356763,357447,358022,358721,359760,361114,362137,363328,364564,365611,366659,367708,368848,369907,370128,370551,371246,372092,372928,373624,374277,374915,376109,377180,378323,379055,380021,381090,382179,383242,384406,385422,386827,388007,389215,391051,393084,395089,396949,398992,401035,403069,405111,407145,409184,411219,413263,415311,417359,419407,421304,423352,423862,425040,426375,427150,427866,428853,430052],sizes:[1296,1303,964,1415,1377,1237,1210,1213,1154,1081,1056,1019,1114,1318,1205,1040,998,1031,960,937,933,915,951,1079,1794,1382,1286,1317,1437,859,1149,1145,1175,1085,1170,1240,1196,1258,1017,817,759,1045,1093,1209,1273,1012,1090,1280,1185,1005,1175,1185,950,1112,709,852,1476,1127,1111,1129,1093,1093,1305,1137,1022,1055,1300,1003,1113,1073,910,1375,1147,1247,932,1377,1468,1225,1389,1169,1209,1151,1205,1211,1313,1314,994,1309,1376,1261,1049,1186,1180,1189,1069,1209,1436,1284,1217,1082,951,1554,1166,1646,1184,1143,1504,1219,1584,1531,1505,1561,1578,1218,1503,1343,1455,1457,1347,1418,1295,1250,1539,1370,1428,1543,1409,1348,1504,1594,1391,1550,1478,1563,1389,1189,1482,1409,1437,1349,1606,1558,1544,1599,1404,1655,1076,1487,1450,1642,1547,1460,1527,1281,1323,947,1450,1317,1522,1186,1430,1259,1292,1351,1591,1727,1707,1670,1548,1524,1392,1525,1353,1632,1559,1495,1482,1437,1595,1427,1039,1683,1615,1630,1705,1601,1588,1661,1407,1643,1659,1413,1647,1536,1450,1073,1571,1273,1345,1369,1651,1668,1359,1488,1447,1206,1545,1625,1598,1588,1425,1590,1564,1448,1626,1398,1307,1357,1552,1539,1441,1076,1195,930,992,1533,1311,1254,1313,1283,1275,1147,1381,1361,1394,1575,1485,1570,1595,1576,1678,1642,1653,1603,1618,1547,1598,1553,1304,1630,1466,1584,1324,1241,1618,1660,1104,1566,1508,1595,1575,929,1258,909,1015,865,590,974,1032,684,575,699,1039,1354,1023,1191,1236,1047,1048,1049,1140,1059,221,423,695,846,836,696,653,638,1194,1071,1143,732,966,1069,1089,1063,1164,1016,1405,1180,1208,1836,2033,2005,1860,2043,2043,2034,2042,2034,2039,2035,2044,2048,2048,2048,1897,2048,510,1178,1335,775,716,987,1199,647],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_gmpy2.data")}Module["addRunDependency"]("datafile_gmpy2.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/gmpy2-2.0.8-py3.8.egg-info",start:0,end:1018,audio:0},{filename:"/lib/python3.8/site-packages/gmpy2.so",start:1018,end:670499,audio:0}],remote_package_size:434795,package_uuid:"f08646e8-a379-4095-94c3-98051e2a49bf"})})();