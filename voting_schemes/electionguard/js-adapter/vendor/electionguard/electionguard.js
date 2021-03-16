var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="electionguard.data";var REMOTE_PACKAGE_BASE="electionguard.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","electionguardtest",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","electionguard-1.1.15-py3.8.egg-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","electionguard",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:226955,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1131,2236,3009,4143,5091,6246,7392,8381,9182,10420,11429,12349,13446,14703,15941,16981,18195,19341,20530,21758,22920,23816,24866,25855,26968,28453,29712,30912,31700,32958,34204,35371,36200,37018,37707,38598,39647,40890,42189,43188,44138,45222,46215,47155,48117,49008,50046,51061,51965,52887,53917,54852,55837,56849,58243,59427,60370,61235,62005,62984,64035,65111,66251,67315,68432,69488,70577,71742,72982,74182,75154,75998,76793,77731,78718,79613,80641,81610,82610,83729,84927,86182,87378,88399,89370,91056,92977,93810,94683,95492,96205,96990,98143,99306,100244,101295,102244,103439,104698,105705,106765,108076,109435,110508,111293,112251,113427,114406,115277,116065,116957,117841,119049,120113,121059,122251,123304,124341,125385,126451,127327,128360,129595,130875,131810,132935,133685,134778,135560,136650,137523,138427,139550,140581,141671,142746,143992,145189,146414,147431,148639,149993,151121,152587,153785,154717,155602,156455,157304,158195,158966,160206,161118,162039,162988,164164,165100,165999,166878,167787,168654,169497,170394,171303,172205,173062,173959,174844,175707,176586,177521,178376,179261,180118,181049,181964,182842,183710,184565,185407,186286,187176,188034,188913,189765,190707,191588,192481,193374,194255,195418,196491,197498,198685,199695,200828,201829,203155,204535,205802,207083,208184,209414,210644,211704,212910,214126,215148,216370,217604,218684,219945,221121,222253,223394,224467,225761,226823],sizes:[1131,1105,773,1134,948,1155,1146,989,801,1238,1009,920,1097,1257,1238,1040,1214,1146,1189,1228,1162,896,1050,989,1113,1485,1259,1200,788,1258,1246,1167,829,818,689,891,1049,1243,1299,999,950,1084,993,940,962,891,1038,1015,904,922,1030,935,985,1012,1394,1184,943,865,770,979,1051,1076,1140,1064,1117,1056,1089,1165,1240,1200,972,844,795,938,987,895,1028,969,1e3,1119,1198,1255,1196,1021,971,1686,1921,833,873,809,713,785,1153,1163,938,1051,949,1195,1259,1007,1060,1311,1359,1073,785,958,1176,979,871,788,892,884,1208,1064,946,1192,1053,1037,1044,1066,876,1033,1235,1280,935,1125,750,1093,782,1090,873,904,1123,1031,1090,1075,1246,1197,1225,1017,1208,1354,1128,1466,1198,932,885,853,849,891,771,1240,912,921,949,1176,936,899,879,909,867,843,897,909,902,857,897,885,863,879,935,855,885,857,931,915,878,868,855,842,879,890,858,879,852,942,881,893,893,881,1163,1073,1007,1187,1010,1133,1001,1326,1380,1267,1281,1101,1230,1230,1060,1206,1216,1022,1222,1234,1080,1261,1176,1132,1141,1073,1294,1062,132],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_electionguard.data")}Module["addRunDependency"]("datafile_electionguard.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/electionguardtest/election_factory.py",start:0,end:10222,audio:0},{filename:"/lib/python3.8/site-packages/electionguardtest/__init__.py",start:10222,end:10222,audio:0},{filename:"/lib/python3.8/site-packages/electionguardtest/elgamal.py",start:10222,end:10857,audio:0},{filename:"/lib/python3.8/site-packages/electionguardtest/ballot_factory.py",start:10857,end:17089,audio:0},{filename:"/lib/python3.8/site-packages/electionguardtest/group.py",start:17089,end:18355,audio:0},{filename:"/lib/python3.8/site-packages/electionguardtest/election.py",start:18355,end:39861,audio:0},{filename:"/lib/python3.8/site-packages/electionguardtest/tally.py",start:39861,end:41083,audio:0},{filename:"/lib/python3.8/site-packages/electionguardtest/sample_generator.py",start:41083,end:46186,audio:0},{filename:"/lib/python3.8/site-packages/electionguard-1.1.15-py3.8.egg-info/SOURCES.txt",start:46186,end:48035,audio:0},{filename:"/lib/python3.8/site-packages/electionguard-1.1.15-py3.8.egg-info/not-zip-safe",start:48035,end:48036,audio:0},{filename:"/lib/python3.8/site-packages/electionguard-1.1.15-py3.8.egg-info/requires.txt",start:48036,end:48106,audio:0},{filename:"/lib/python3.8/site-packages/electionguard-1.1.15-py3.8.egg-info/PKG-INFO",start:48106,end:60104,audio:0},{filename:"/lib/python3.8/site-packages/electionguard-1.1.15-py3.8.egg-info/top_level.txt",start:60104,end:60136,audio:0},{filename:"/lib/python3.8/site-packages/electionguard-1.1.15-py3.8.egg-info/dependency_links.txt",start:60136,end:60137,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/rsa.py",start:60137,end:61912,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/singleton.py",start:61912,end:62328,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/decryption_share.py",start:62328,end:74868,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/election_builder.py",start:74868,end:76946,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/nonces.py",start:76946,end:79345,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/publish.py",start:79345,end:83500,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/decryption.py",start:83500,end:110182,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/dlog.py",start:110182,end:111976,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/auxiliary.py",start:111976,end:113121,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/logs.py",start:113121,end:118147,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/ballot_validator.py",start:118147,end:122229,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/ballot_box.py",start:122229,end:124840,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/decrypt_with_secrets.py",start:124840,end:138595,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/tracker.py",start:138595,end:140640,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/__init__.py",start:140640,end:140640,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/schema.py",start:140640,end:141582,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/guardian.py",start:141582,end:161871,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/elgamal.py",start:161871,end:166675,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/decrypt_with_shares.py",start:166675,end:174414,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/election_object_base.py",start:174414,end:174688,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/group.py",start:174688,end:188634,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/schnorr.py",start:188634,end:190907,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/key_ceremony.py",start:190907,end:200005,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/election.py",start:200005,end:236488,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/decryption_mediator.py",start:236488,end:249118,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/election_polynomial.py",start:249118,end:253432,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/data_store.py",start:253432,end:256212,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/chaum_pedersen.py",start:256212,end:274183,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/encrypt.py",start:274183,end:292337,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/hash.py",start:292337,end:295640,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/key_ceremony_mediator.py",start:295640,end:310319,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/serializable.py",start:310319,end:317880,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/words.py",start:317880,end:389366,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/tally.py",start:389366,end:404314,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/types.py",start:404314,end:404384,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/scheduler.py",start:404384,end:404799,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/ballot.py",start:404799,end:441186,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/utils.py",start:441186,end:443927,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/proof.py",start:443927,end:444580,audio:0},{filename:"/lib/python3.8/site-packages/electionguard/ballot_store.py",start:444580,end:446638,audio:0}],remote_package_size:231051,package_uuid:"ac3a0c64-ea24-4530-9ba3-e57b20058a60"})})();