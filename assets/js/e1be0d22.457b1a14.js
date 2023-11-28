"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[19073],{27686:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=n(785893),i=n(603905);const c={sidebar_position:6070,slug:"2021-12-06",title:"OpenCV Object Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},a=void 0,o={id:"IoT-and-Machine-Learning/ML/2021-12-06--opencv-object-tracking/index",title:"OpenCV Object Tracking",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-12-06--opencv-object-tracking/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-12-06--opencv-object-tracking",slug:"/IoT-and-Machine-Learning/ML/2021-12-06--opencv-object-tracking/2021-12-06",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-06--opencv-object-tracking/2021-12-06",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-12-06--opencv-object-tracking/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"OpenCV",permalink:"/docs/tags/open-cv"}],version:"current",sidebarPosition:6070,frontMatter:{sidebar_position:6070,slug:"2021-12-06",title:"OpenCV Object Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},sidebar:"tutorialSidebar",previous:{title:"OpenCV Object Detection and Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-07--opencv-detection-and-tracking/2021-12-07"},next:{title:"OpenCV Face Detection and Privacy",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-05--opencv-face-detection/2021-12-05"}},s={},l=[{value:"Setting up OpenCV",id:"setting-up-opencv",level:2},{value:"Single Track",id:"single-track",level:2},{value:"Select Tracking Algorithm",id:"select-tracking-algorithm",level:3},{value:"BOOSTING vs KCF",id:"boosting-vs-kcf",level:4},{value:"MOSSE vs CSRT",id:"mosse-vs-csrt",level:4},{value:"Load Video File",id:"load-video-file",level:3},{value:"Select Object to Track",id:"select-object-to-track",level:3},{value:"Track the Object",id:"track-the-object",level:3},{value:"Record the Output Video",id:"record-the-output-video",level:3},{value:"User Input by Arguments",id:"user-input-by-arguments",level:3},{value:"Multitrack and GOTURN",id:"multitrack-and-goturn",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Shenzhen, China",src:n(26016).Z+"",width:"2385",height:"919"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#setting-up-opencv",children:"Setting up OpenCV"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#single-track",children:"Single Track"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#select-tracking-algorithm",children:"Select Tracking Algorithm"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#boosting-vs-kcf",children:"BOOSTING vs KCF"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#mosse-vs-csrt",children:"MOSSE vs CSRT"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#load-video-file",children:"Load Video File"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#select-object-to-track",children:"Select Object to Track"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#track-the-object",children:"Track the Object"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#record-the-output-video",children:"Record the Output Video"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#user-input-by-arguments",children:"User Input by Arguments"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#multitrack-and-goturn",children:"Multitrack and GOTURN"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Tracking Objects in videos with OpenCV - see also ",(0,t.jsx)(r.a,{href:"https://www.pyimagesearch.com/2018/07/30/opencv-object-tracking/",children:"pyimagesearch"}),". And on ",(0,t.jsx)(r.a,{href:"https://github.com/mpolinowski/opencv-object-tracking",children:"Github"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"setting-up-opencv",children:"Setting up OpenCV"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"python -m venv .env\r\nsource .env/bin/activate\r\npython -m pip install --upgrade pip\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Add a file ",(0,t.jsx)(r.code,{children:"dependencies.txt"})," with all project ",(0,t.jsx)(r.strong,{children:"pip dependencies"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"opencv-python\r\nopencv-contrib-python\n"})}),"\n",(0,t.jsx)(r.p,{children:"Install all dependencies with:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pip install -r dependencies.txt\n"})}),"\n",(0,t.jsx)(r.p,{children:"Test installation of OpenCV by running the following Python script:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import cv2\r\nprint(cv2.__version__)\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"python scripts/main.py\r\n4.5.5\n"})}),"\n",(0,t.jsx)(r.h2,{id:"single-track",children:"Single Track"}),"\n",(0,t.jsx)(r.h3,{id:"select-tracking-algorithm",children:"Select Tracking Algorithm"}),"\n",(0,t.jsx)(r.p,{children:"OpenCV includes 7 separate legacy object tracking implementations:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"BOOSTING Tracker"}),": Based on the same algorithm used by Haar cascades (AdaBoost). Slow and doesn\u2019t work very well."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"MIL Tracker"}),": Better accuracy than BOOSTING tracker."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"KCF Tracker"}),": Kernelized Correlation Filters. Faster than BOOSTING and MIL. Similar to MIL and KCF, does not handle full occlusion well."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"TLD Tracker"}),": ?"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"MedianFlow Tracker"}),": Does a nice job reporting failures; doesn't handle big changes in motion / lighting very well."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"MOSSE Tracker"}),": Not as accurate as CSRT or KCF. Good choice for speed."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"CSRT Tracker"}),": Discriminative Correlation Filter (with Channel and Spatial Reliability). More accurate than KCF but slightly slower."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["In the following video (downloaded free stock from ",(0,t.jsx)(r.a,{href:"https://www.pexels.com/videos/",children:"pexels.com"}),") I am selecting the woman in the brown coat in the background to the right. All algorithms do well to the point where she is blocked from view - non of them reacquire her:"]}),"\n",(0,t.jsx)(r.h4,{id:"boosting-vs-kcf",children:"BOOSTING vs KCF"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"OpenCV - Select Tracking Algorithm",src:n(611555).Z+"",width:"838",height:"233"})}),"\n",(0,t.jsx)(r.h4,{id:"mosse-vs-csrt",children:"MOSSE vs CSRT"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"OpenCV - Select Tracking Algorithm",src:n(822052).Z+"",width:"838",height:"233"})}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"CSRT"}),": high tracking accuracy but slower FPS throughput."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"KCF"}),": the FPS I am getting are slightly higher but accuracy is supposed to be slightly worse than CSRT."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"MOSSE"}),": for easy to track objects - only speed matters."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Interesting - the ",(0,t.jsx)(r.strong,{children:"MOSSE"})," algorithm seems to keeps the ROI size constant. Which must make it more difficult to recognize the object if it moves towards or away from the camera:"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"OpenCV - Select Tracking Algorithm",src:n(633347).Z+"",width:"844",height:"234"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import cv2\r\n\r\ntracker_types = ['BOOSTING', 'MIL', 'KCF', 'TLD', 'MEDIANFLOW', 'MOSSE', 'CSRT']\r\ntracker_type = tracker_types[4]\r\n\r\nif tracker_type == 'BOOSTING':\r\n    tracker = cv2.legacy.TrackerBoosting_create()\r\nelif tracker_type == 'MIL':\r\n    tracker = cv2.legacy.TrackerMIL_create()\r\nelif tracker_type == 'KCF':\r\n    tracker = cv2.legacy.TrackerKCF_create()\r\nelif tracker_type == 'TLD':\r\n    tracker = cv2.legacy.TrackerTLD_create()\r\nelif tracker_type == 'MEDIANFLOW':\r\n    tracker = cv2.legacy.TrackerMedianFlow_create()\r\nelif tracker_type == 'MOSSE':\r\n    tracker = cv2.legacy.TrackerMOSSE_create()\r\nelif tracker_type == 'CSRT':\r\n    tracker = cv2.legacy.TrackerCSRT_create()\r\n\r\n# Change tracker_type index to check if objects are created:\r\nprint(tracker)\n"})}),"\n",(0,t.jsx)(r.h3,{id:"load-video-file",children:"Load Video File"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"video = cv2.VideoCapture('resources/car_race_02.mp4')\r\n# load video\r\nif not video.isOpened():\r\n    print('[ERROR] video file not loaded')\r\n    sys.exit()\r\n# capture first frame\r\nok, frame = video.read()\r\nif not ok:\r\n    print('[ERROR] no frame captured')\r\n    sys.exit()\r\nprint('[INFO] video loaded and frame capture started')\n"})}),"\n",(0,t.jsx)(r.h3,{id:"select-object-to-track",children:"Select Object to Track"}),"\n",(0,t.jsx)(r.p,{children:"Load the first frame from your video file and use the OpenCV Region of Interest selector to mark your object:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"bbox = cv2.selectROI(frame)\r\nprint('[INFO] select ROI and press ENTER or SPACE')\r\nprint('[INFO] cancel selection by pressing C')\r\nprint(bbox)\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"OpenCV Object Tracking",src:n(265551).Z+"",width:"1024",height:"480"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"bbox"})," variable returns the corner point of the ",(0,t.jsx)(r.strong,{children:"Bounding Box"})," selected with the ROI Selector:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"(1028, 190, 84, 76)\n"})}),"\n",(0,t.jsx)(r.h3,{id:"track-the-object",children:"Track the Object"}),"\n",(0,t.jsx)(r.p,{children:"Now we can start the object tracking based on our selected region of interest."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"ok = tracker.init(frame, bbox)\r\nif not ok:\r\n    print('[ERROR] tracker not initialized')\r\n    sys.exit()\r\nprint('[INFO] tracker was initialized on ROI')\r\n# random generate a colour for bounding box\r\ncolours = (randint(0, 255), randint(0, 255), randint(0, 255))\r\n# loop through all frames of video file\r\nwhile True:\r\n    ok, frame = video.read()\r\n    if not ok:\r\n        print('[INFO] end of video file reached')\r\n        break\r\n    # update position of ROI based on tracker prediction\r\n    ok, bbox = tracker.update(frame)\r\n    # test print coordinates of predicted bounding box for all frames\r\n    print(ok, bbox)\n"})}),"\n",(0,t.jsx)(r.p,{children:"This will loop through every frame of our video file and update the position of our bounding box based on the tracker prediction until the end of file is reached:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"[INFO] select ROI and press ENTER or SPACE\r\n[INFO] cancel selection by pressing C\r\n[INFO] tracker was initialized on ROI\r\nTrue (1013.0, 196.0, 89.0, 72.0)\r\nTrue (1000.0, 201.0, 91.0, 74.0)\r\nTrue (986.0, 205.0, 92.0, 75.0)\r\n\r\n...\r\n\r\nTrue (76.0, 1034.0, 67.0, 55.0)\r\n[INFO] end of video file reached\n"})}),"\n",(0,t.jsx)(r.p,{children:"Now we can use the predicted position of our bounding box to draw a rectangle around our tracked object:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"    if ok == True:\r\n        (x, y, w, h) = [int(v) for v in bbox]\r\n        # use predicted bounding box coordinates to draw a rectangle\r\n        cv2.rectangle(frame, (x, y), (x+w, y+h), colours, 3)\r\n        cv2.putText(frame, str(tracker_type), (10, 30), cv2.QT_FONT_NORMAL, 1, (255, 255, 255))\r\n\r\n    else:\r\n        # if prediction failed and no bounding box coordinates are available\r\n        cv2.putText(frame, 'No Track', (10, 30), cv2.QT_FONT_NORMAL, 1, (0, 0, 255))\r\n\r\n    # display object track\r\n    cv2.imshow('Single Track', frame)\r\n    # press 'q' to break loop and close window\r\n    if cv2.waitKey(1) & 0xFF == ord('q'):\r\n        break\n"})}),"\n",(0,t.jsx)(r.h3,{id:"record-the-output-video",children:"Record the Output Video"}),"\n",(0,t.jsx)(r.p,{children:"Set recording parameter:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"frame_width = int(video.get(cv2.CAP_PROP_FRAME_WIDTH))\r\nframe_height = int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))\r\nfps = int(video.get(cv2.CAP_PROP_FPS))\r\nvideo_codec = cv2.VideoWriter_fourcc('m', 'p', '4', 'v')\r\nprefix = 'recording/'+datetime.datetime.now().strftime(\"%y%m%d_%H%M%S\")\r\nbasename = \"object_track.mp4\"\r\nvideo_output = cv2.VideoWriter(\"_\".join([prefix, basename]), video_codec, fps, (frame_width, frame_height))\n"})}),"\n",(0,t.jsxs)(r.p,{children:["And trigger the recording inside the ",(0,t.jsx)(r.strong,{children:"While Loop"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"video_output.write(frame)\n"})}),"\n",(0,t.jsx)(r.h3,{id:"user-input-by-arguments",children:"User Input by Arguments"}),"\n",(0,t.jsx)(r.p,{children:"Parse arguments to select the tracking algorithm and video file:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import argparse\r\n\r\n...\r\n\r\nap = argparse.ArgumentParser()\r\nap.add_argument("-v", "--video", type=str, default=\'resources/group_of_people_01.mp4\', help="path to input video file")\r\nap.add_argument("-t", "--tracker", type=int, default=6, help="Select tracker [0-6]: boosting, mil, kcf, "\r\n                                                                 "tld, mediaflow, mosse, csrt")\r\nargs = vars(ap.parse_args())\r\n\r\ntracker_types = [\'BOOSTING\', \'MIL\', \'KCF\', \'TLD\', \'MEDIANFLOW\', \'MOSSE\', \'CSRT\']\r\ntracker_type = tracker_types[args["tracker"]]\r\n\r\n\r\n...\r\n\r\n\r\nvideo = cv2.VideoCapture(args["video"])\n'})}),"\n",(0,t.jsx)(r.h2,{id:"multitrack-and-goturn",children:"Multitrack and GOTURN"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/mpolinowski/opencv-object-tracking/blob/master/scripts/multi_tracking.py",children:"scripts/multi_tracking.py"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/mpolinowski/opencv-object-tracking/blob/master/scripts/goturn_tracking.py",children:"goturn_tracking.py"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"OpenCV Object Tracking",src:n(632215).Z+"",width:"844",height:"235"})})]})}function h(e={}){const{wrapper:r}={...(0,i.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,r,n)=>{n.d(r,{ah:()=>l});var t=n(667294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,u=p["".concat(s,".").concat(g)]||p[g]||d[g]||c;return n?t.createElement(u,a(a({ref:r},h),{},{components:n})):t.createElement(u,a({ref:r},h))}));h.displayName="MDXCreateElement"},611555:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/BOOSTING_vs_KCF-9abbde7c0ac8e3a5e1022aa0b64ec60d.gif"},632215:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/CSRT_Multi_vs_GOTURN-a9e0b70229395861916b7bd65162ae65.gif"},822052:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/MOSSE_vs_CSRT-66fa93080e7c4805c94fbc7dcc1b5dcf.gif"},633347:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/MOSSE_vs_CSRT2-7ec9d136c5e2febdf8b4bc142a43f6f8.gif"},265551:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/OpenCV_Object_Tracking_01-2135bb6f4650f288d2d27958d3c5a8d7.png"},26016:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5a0b68587d9242bbb46a1f1aaab44216.jpg"}}]);