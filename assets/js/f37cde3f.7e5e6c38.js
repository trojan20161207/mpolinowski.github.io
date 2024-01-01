"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[41208],{77425:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=a(785893),i=a(603905);const s={sidebar_position:9060,slug:"2022-09-17",title:"Python - Video Processing with OpenCV",authors:"mpolinowski",tags:["Python"]},r=void 0,c={id:"Development/Python/2022-09-17-python-video-processing/index",title:"Python - Video Processing with OpenCV",description:"Sham Sui Po, Hong Kong",source:"@site/docs/Development/Python/2022-09-17-python-video-processing/index.md",sourceDirName:"Development/Python/2022-09-17-python-video-processing",slug:"/Development/Python/2022-09-17-python-video-processing/2022-09-17",permalink:"/docs/Development/Python/2022-09-17-python-video-processing/2022-09-17",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-09-17-python-video-processing/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2022-09-17",title:"Python - Video Processing with OpenCV",authors:"mpolinowski",tags:["Python"]},sidebar:"tutorialSidebar",previous:{title:"Python - Text Processing with",permalink:"/docs/Development/Python/2022-10-05-python-text-processing/2022-10-05"},next:{title:"Web Scraping Essentials with Python",permalink:"/docs/Development/Python/2022-06-27-python-web-scraping/2022-06-27"}},o={},d=[{value:"Basic Video Operations",id:"basic-video-operations",level:2},{value:"Getting Video Information",id:"getting-video-information",level:3},{value:"Extracting Frames",id:"extracting-frames",level:2},{value:"Extract Frame at Timestamp",id:"extract-frame-at-timestamp",level:3},{value:"Detect Faces using OpenCV Cascades &amp; Alarm Recordings",id:"detect-faces-using-opencv-cascades--alarm-recordings",level:2},{value:"Still Images",id:"still-images",level:3},{value:"Videos",id:"videos",level:3},{value:"IP Camera Streams",id:"ip-camera-streams",level:3},{value:"Continuous Video Display with Face Detection",id:"continuous-video-display-with-face-detection",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sham Sui Po, Hong Kong",src:a(911278).Z+"",width:"1500",height:"548"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#basic-video-operations",children:"Basic Video Operations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#getting-video-information",children:"Getting Video Information"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#extracting-frames",children:"Extracting Frames"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#extract-frame-at-timestamp",children:"Extract Frame at Timestamp"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#detect-faces-using-opencv-cascades--alarm-recordings",children:"Detect Faces using OpenCV Cascades & Alarm Recordings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#still-images",children:"Still Images"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#videos",children:"Videos"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ip-camera-streams",children:"IP Camera Streams"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#continuous-video-display-with-face-detection",children:"Continuous Video Display with Face Detection"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["see ",(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/opencv-video-processing",children:"Git Repository"})," for source code."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"basic-video-operations",children:"Basic Video Operations"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install opencv-python\nRequirement already satisfied: opencv-python in /usr/lib/python3.10/site-packages (4.5.5.62)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"getting-video-information",children:"Getting Video Information"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"import cv2\n\nvideo = cv2.VideoCapture('security_cam.mp4')\n\nwidth = int(video.get(cv2.CAP_PROP_FRAME_WIDTH))\nheight = int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))\nframes = int(video.get(cv2.CAP_PROP_FRAME_COUNT))\nfps = int(video.get(cv2.CAP_PROP_FPS))\n\nprint(width, height, frames, fps)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The security camera footage has a ",(0,t.jsx)(n.code,{children:"1440p"})," resolution and consists of ",(0,t.jsx)(n.code,{children:"451"})," frames that are displayed at a frame rate of ",(0,t.jsx)(n.code,{children:"30 fps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python main.py\n2560 1440 451 30\n"})}),"\n",(0,t.jsx)(n.h2,{id:"extracting-frames",children:"Extracting Frames"}),"\n",(0,t.jsxs)(n.p,{children:["The OpenCV ",(0,t.jsx)(n.code,{children:"read()"})," function allows you to grab a single frame from the video file in from of a Numpy array:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"print(video.read())\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python main.py\n(True, array([[[ 45,  45,  45],\n        [ 47,  47,  47],\n        [ 39,  39,  39],\n        ...,\n        [122, 122, 122],\n        [126, 126, 126],\n        [140, 140, 140]]], dtype=uint8))\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Repeated calls will return the consecutive frames until the last, after which the function will return a ",(0,t.jsx)(n.strong,{children:"False, None"}),". To extract all frames into a folder ",(0,t.jsx)(n.code,{children:"images"})," we can run a while loop:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# get the first frame and see if successful\nsuccess, frame = video.read()\n# initiate count\ncount = 1\n# keep extracting frames as long as success is True\nwhile success:\n    cv2.imwrite(f'images/{count}.jpg', frame)\n    success, frame = video.read()\n    count += 1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"extract-frame-at-timestamp",children:"Extract Frame at Timestamp"}),"\n",(0,t.jsxs)(n.p,{children:["This way I now ended up with ",(0,t.jsx)(n.strong,{children:"450"}),", mostly useless, images from my cameras alarm video. The next step has to be to specify a timestamp from where a frame should be extracted - e.g. given by an ",(0,t.jsx)(n.strong,{children:"Object Detection"})," algorithm:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# get frame at a specific timestamp\ntimestamp = '00:00:03.00'\nhours, minutes, seconds = [float(i) for i in timestamp.split(':')]\n# print(hours, minutes, seconds)\n\n# get number of frames up to timestamp\ntrigger_frame = hours * 3600 * fps + minutes * 60 * fps + seconds * fps\nprint(frames, trigger_frame)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The total amount of frames in the video file is represented by ",(0,t.jsx)(n.code,{children:"frames"})," and the number of fames up to the specified timestamp are represented by ",(0,t.jsx)(n.code,{children:"trigger_frame"})," - in this example it is frame number ",(0,t.jsx)(n.code,{children:"90"})," we want to take a look at:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python main.py\n451 90.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now we can select this frame and store it inside the ",(0,t.jsx)(n.code,{children:"images"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# Go to frame selected by timestamp\nvideo.set(1, trigger_frame)\nsuccess, frame = video.read()\n\n# save the frame into an image file\nif success:\n    cv2.imwrite(f'images/{filename}_{hours}-{minutes}-{seconds}.jpg', frame)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"security_cam_0.0-0.0-4.25.jpg"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Python - Video Editing with OpenCV",src:a(617602).Z+"",width:"2560",height:"1440"})}),"\n",(0,t.jsx)(n.h2,{id:"detect-faces-using-opencv-cascades--alarm-recordings",children:"Detect Faces using OpenCV Cascades & Alarm Recordings"}),"\n",(0,t.jsx)(n.h3,{id:"still-images",children:"Still Images"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"import cv2\n\n# load image file & frontal face cascade\nimage = cv2.imread('images/faces.jpg', 1)\nface_cascade = cv2.CascadeClassifier('cascades/adaboost_frontal_face_detector.xml')\n\n# use cascade to detect frontal faces\nfaces = face_cascade.detectMultiScale(image, 1.1, 4)\n# print(faces)\n\n# use returned coordinates to draw a frame\nfor (x, y, w, h) in faces:\n    cv2.rectangle(image, (x, y), (x+w, y+h), (30,211,198), 3)\n\n# save edited image to file\ncv2.imwrite('images/faces_detected.jpg', image)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"faces_detected.jpg"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Python - Video Editing with OpenCV",src:a(938136).Z+"",width:"422",height:"585"})}),"\n",(0,t.jsx)(n.h3,{id:"videos",children:"Videos"}),"\n",(0,t.jsx)(n.p,{children:"Using a Harr Cascade to detect faces in a video file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"import cv2\n\n# load video file & frontal face cascade\nvideo = cv2.VideoCapture('videos/faces_01.mp4')\nface_cascade = cv2.CascadeClassifier('cascades/adaboost_frontal_face_detector.xml')\n\n# read first frame of the video\nsuccess, frame = video.read()\n\n# get video fps of input video\nfps = int(video.get(cv2.CAP_PROP_FPS))\n\n# prepare empty video file\noutput = cv2.VideoWriter('videos/output.avi', cv2.VideoWriter_fourcc(*'DIVX'), fps, (1280, 720))\n\nwhile success:\n    resize = cv2.resize(frame, (1280, 720))\n    # use cascade to detect frontal faces\n    faces = face_cascade.detectMultiScale(resize, 1.4, 4)\n\n    # use returned coordinates to draw a frame\n    for (x, y, w, h) in faces:\n        cv2.rectangle(resize, (x, y), (x+w, y+h), (30,211,198), 3)\n\n    # write frame to empty output\n    output.write(resize)\n\n    # read next frame to start the loop\n    success, frame = video.read()\n\n# generate video when you reached end of file\noutput.release()\n"})}),"\n",(0,t.jsx)(n.p,{children:"This code will detect faces, and use the detected coordinates to draw a bounding box around them. These edited frames are then stashed in a new video file:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Python - Video Editing with OpenCV",src:a(232121).Z+"",width:"935",height:"572"})}),"\n",(0,t.jsxs)(n.p,{children:["To issues with this code - the ",(0,t.jsx)(n.code,{children:"detectMultiScale"})," function is struggling with my source video. Setting the scale factor to ",(0,t.jsx)(n.code,{children:"1.4"})," and minimum neighbors to ",(0,t.jsx)(n.code,{children:"4"})," still gives me false positives on background objects. I hope to improve this by turning the image grayscale."]}),"\n",(0,t.jsxs)(n.p,{children:["And secondly, I am returning the entire video. By moving the ",(0,t.jsx)(n.code,{children:"write()"})," function into the for-loop I would get an output video that only contains frames with detected faces. But I can also simply save every frame into a jpg file instead:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"import cv2\n\n# load video file & frontal face cascade\nvideo = cv2.VideoCapture('videos/faces_01.mp4')\nface_cascade = cv2.CascadeClassifier('cascades/adaboost_frontal_face_detector.xml')\n\n# read first frame of the video\nsuccess, frame = video.read()\ncount = 1\n\nwhile success:\n    # convert image to grayscale and resize\n    resize = cv2.resize(frame, (1280, 720))\n    gray_image = cv2.cvtColor(resize, cv2.COLOR_BGR2GRAY)\n    # use cascade to detect frontal faces on grayscale frame\n    faces = face_cascade.detectMultiScale(gray_image, scaleFactor=1.4, minNeighbors=4)\n\n    # use returned coordinates to draw bounding box on colour frame\n    for (x, y, w, h) in faces:\n        cv2.rectangle(resize, (x, y), (x+w, y+h), (198,211,30), thickness=3)\n        cv2.imwrite(f'images/face_detection_{count}.jpg', resize)\n        count += 1\n\n    # read next frame to start the loop\n    success, frame = video.read()\n"})}),"\n",(0,t.jsx)(n.p,{children:"This time I am still seeing a few false positives but the detection rate in general has much improved. And I end up with a collection of images that I can process further:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Python - Video Editing with OpenCV",src:a(276404).Z+"",width:"2216",height:"915"})}),"\n",(0,t.jsx)(n.h3,{id:"ip-camera-streams",children:"IP Camera Streams"}),"\n",(0,t.jsxs)(n.p,{children:["Now that I am able to handle local video files I now want to use an RTSP stream from my INSTAR 2k+ WQHD camera as input source. I ",(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/opencv-with-videos",children:"already looked at how to process RTSP streams with OpenCV"}),". So now I just have to merge those codes to get an ",(0,t.jsx)(n.strong,{children:"Alarm Snapshot"})," function that will record a single JPG image whenever a face is detected:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"import cv2\nimport os\n\nface_cascade = cv2.CascadeClassifier('cascades/adaboost_frontal_face_detector.xml')\nRTSP_URL = 'rtsp://admin:instar@192.168.2.120/livestream/12'\n\n# use tcp instead of udp if stream is unstable\nos.environ['OPENCV_FFMPEG_CAPTURE_OPTIONS'] = 'rtsp_transport;udp'\n# start the stream and verify\ncap = cv2.VideoCapture(RTSP_URL, cv2.CAP_FFMPEG)\n\nif not cap.isOpened():\n    print(\"ERROR :: Cannot open RTSP stream\")\n    exit(-1)\n\n\n# start reading frames\nsuccess, frame = cap.read()\ncount = 0\n\nwhile success:\n    # resize frame and convert to grayscale\n    resize = cv2.resize(frame, (1280, 720))\n    gray_image = cv2.cvtColor(resize, cv2.COLOR_BGR2GRAY)\n\n    # use cascade to detect frontal faces on grayscale frame\n    faces = face_cascade.detectMultiScale(gray_image, scaleFactor=1.4, minNeighbors=4)\n\n    # use returned coordinates to draw bounding box on colour frame\n    for (x, y, w, h) in faces:\n        cv2.rectangle(resize, (x, y), (x+w, y+h), (198,211,30), thickness=3)\n        cv2.imwrite(f'images/face_detection_{count}.jpg', resize)\n    \n    count += 1\n    success, frame = cap.read()\n"})}),"\n",(0,t.jsx)(n.p,{children:"So now I have a piece of code that systematically ignores James May. But rigorously triggers whenever Richard Hammond or Jeremy Clarkson walk in - fair enough:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Python - Video Editing with OpenCV",src:a(32662).Z+"",width:"2081",height:"876"})}),"\n",(0,t.jsx)(n.p,{children:"And with a minor change I am also able to record every frame - with a successful face detection - into a video file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# prepare empty video file\noutput = cv2.VideoWriter('videos/face_detection.avi', cv2.VideoWriter_fourcc(*'DIVX'), 15, (1280, 720))\n\n\n# start reading frames\nsuccess, frame = cap.read()\ncount = 0\n\nwhile success:\n    # resize frame and convert to grayscale\n    resize = cv2.resize(frame, (1280, 720))\n    gray_image = cv2.cvtColor(resize, cv2.COLOR_BGR2GRAY)\n\n    # use cascade to detect frontal faces on grayscale frame\n    faces = face_cascade.detectMultiScale(gray_image, scaleFactor=1.4, minNeighbors=4)\n\n    # use returned coordinates to draw bounding box on colour frame\n    for (x, y, w, h) in faces:\n        cv2.rectangle(resize, (x, y), (x+w, y+h), (198,211,30), thickness=3)\n        output.write(resize)\n    \n    count += 1\n    success, frame = cap.read()\n\noutput.release()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"continuous-video-display-with-face-detection",children:"Continuous Video Display with Face Detection"}),"\n",(0,t.jsx)(n.p,{children:"To be able to monitor the live video while recording with face detection use the following code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"import cv2\nimport os\n\nface_cascade = cv2.CascadeClassifier('cascades/adaboost_frontal_face_detector.xml')\nRTSP_URL = 'rtsp://admin:instar@192.168.2.120/livestream/12'\n\nos.environ['OPENCV_FFMPEG_CAPTURE_OPTIONS'] = 'rtsp_transport;udp' # Use tcp instead of udp if stream is unstable\n\ncap = cv2.VideoCapture(RTSP_URL, cv2.CAP_FFMPEG)\n\nif not cap.isOpened():\n    print('Cannot open RTSP stream')\n    exit(-1)\n\nframe_width = int(cap.get(3))\nframe_height = int(cap.get(4))\nfps = 15\n\nvideo_codec = cv2.VideoWriter_fourcc(*'DIVX')\n# video_output = cv2.VideoWriter('videos/captured_video.avi', video_codec, fps, (frame_width, frame_height))\nvideo_output = cv2.VideoWriter('videos/captured_video.avi', video_codec, 15, (1280, 720))\n\nwhile True:\n    success, frame = cap.read()\n\n    if success:\n        # resize frame and convert to grayscale\n        resize = cv2.resize(frame, (1280, 720))\n        gray_image = cv2.cvtColor(resize, cv2.COLOR_BGR2GRAY)\n\n        # use cascade to detect frontal faces on grayscale frame\n        faces = face_cascade.detectMultiScale(gray_image, scaleFactor=1.4, minNeighbors=4)\n\n        # use returned coordinates to draw bounding box on colour frame\n        for (x, y, w, h) in faces:\n            cv2.rectangle(resize, (x, y), (x+w, y+h), (198,211,30), thickness=3)\n\n        cv2.imshow(\"Video Recording\", resize)\n        video_output.write(resize)\n\n        if cv2.waitKey(1) & 0xFF == ord('q'):\n            cap.release()\n            video_output.release()\n            cv2.destroyAllWindows()\n            print('INFO :: Video was saved.')\n            break\n\n    else:\n        cap.release()\n        video_output.release()\n        cv2.destroyAllWindows()\n        print('ERROR :: Video recording aborted!')\n        break\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},603905:(e,n,a)=>{a.d(n,{ah:()=>d});var t=a(667294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,f=m["".concat(o,".").concat(p)]||m[p]||l[p]||s;return a?t.createElement(f,r(r({ref:n},h),{},{components:a})):t.createElement(f,r({ref:n},h))}));h.displayName="MDXCreateElement"},232121:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/cascade_face_detection_01-49e1a3020b72b826b9ba4eebb5bb5e7a.png"},276404:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/cascade_face_detection_02-c95275cd044d93168ce2aed17f03b5b2.png"},32662:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/cascade_face_detection_03-c48baa256ca97e9cc571c8586bad501d.png"},938136:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/faces_detected-4a414a36b4b683fbf27bfab66c615848.jpg"},911278:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"},617602:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/security_cam_0.0-0.0-4.25-abc766dcce0ee0615f473f1fcf0de4cc.jpg"}}]);