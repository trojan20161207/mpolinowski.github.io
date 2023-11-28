"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[14331],{581097:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(785893),r=s(603905);const i={sidebar_position:4074,slug:"2023-11-19",title:"Gazebo & ROS2 Basic Installation",authors:"mpolinowski",tags:["Linux","Robotics","Simulation","Gazebo","ROS"],description:"Gazebo brings a fresh approach to simulation with a complete toolbox of development libraries and cloud services to make simulation easy."},a=void 0,o={id:"Automation_and_Robotics/Robotics_Simulation/2023-11-19--ros2-gazebo-installation/index",title:"Gazebo & ROS2 Basic Installation",description:"Gazebo brings a fresh approach to simulation with a complete toolbox of development libraries and cloud services to make simulation easy.",source:"@site/docs/Automation_and_Robotics/Robotics_Simulation/2023-11-19--ros2-gazebo-installation/index.md",sourceDirName:"Automation_and_Robotics/Robotics_Simulation/2023-11-19--ros2-gazebo-installation",slug:"/Automation_and_Robotics/Robotics_Simulation/2023-11-19--ros2-gazebo-installation/2023-11-19",permalink:"/docs/Automation_and_Robotics/Robotics_Simulation/2023-11-19--ros2-gazebo-installation/2023-11-19",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Robotics_Simulation/2023-11-19--ros2-gazebo-installation/index.md",tags:[{label:"Linux",permalink:"/docs/tags/linux"},{label:"Robotics",permalink:"/docs/tags/robotics"},{label:"Simulation",permalink:"/docs/tags/simulation"},{label:"Gazebo",permalink:"/docs/tags/gazebo"},{label:"ROS",permalink:"/docs/tags/ros"}],version:"current",sidebarPosition:4074,frontMatter:{sidebar_position:4074,slug:"2023-11-19",title:"Gazebo & ROS2 Basic Installation",authors:"mpolinowski",tags:["Linux","Robotics","Simulation","Gazebo","ROS"],description:"Gazebo brings a fresh approach to simulation with a complete toolbox of development libraries and cloud services to make simulation easy."},sidebar:"tutorialSidebar",previous:{title:"ROS2 Graph Concepts",permalink:"/docs/Automation_and_Robotics/Robotics_Simulation/2023-11-24--ros2-graph/2023-11-24"}},l={},c=[{value:"Setup",id:"setup",level:2},{value:"Install ROS2",id:"install-ros2",level:3},{value:"Environment Variables",id:"environment-variables",level:4},{value:"ROS Dependencies",id:"ros-dependencies",level:4},{value:"API Test",id:"api-test",level:4},{value:"Turtlesim Hello World",id:"turtlesim-hello-world",level:4},{value:"Gazebo",id:"gazebo",level:3},{value:"Installing Gazebo with ROS",id:"installing-gazebo-with-ros",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"TST, Hongkong",src:s(1746).Z+"",width:"1500",height:"620"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#install-ros2",children:"Install ROS2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#environment-variables",children:"Environment Variables"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ros-dependencies",children:"ROS Dependencies"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#api-test",children:"API Test"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#turtlesim-hello-world",children:"Turtlesim Hello World"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#gazebo",children:"Gazebo"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#installing-gazebo-with-ros",children:"Installing Gazebo with ROS"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.h3,{id:"install-ros2",children:"Install ROS2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.ros.org/en/iron/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Iron on Ubuntu 22.04 Jammy"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you have a locale which supports ",(0,t.jsx)(n.code,{children:"UTF-8"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && sudo apt install locales\nsudo locale-gen en_US en_US.UTF-8\nsudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8\nexport LANG=en_US.UTF-8\n"})}),"\n",(0,t.jsx)(n.p,{children:"First ensure that the Ubuntu Universe repository is enabled."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install software-properties-common\nsudo add-apt-repository universe\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now add the ROS 2 GPG key with apt."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && sudo apt install curl -y\nsudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then add the repository to your sources list."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null\n'})}),"\n",(0,t.jsx)(n.p,{children:"Update your apt repository caches after setting up the repositories."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,t.jsx)(n.p,{children:"ROS 2 packages are built on frequently updated Ubuntu systems. It is always recommended that you ensure your system is up to date before installing new packages."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt upgrade\n"})}),"\n",(0,t.jsx)(n.p,{children:"Desktop Install (Recommended): ROS, RViz, demos, tutorials."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install ros-iron-desktop-full\n"})}),"\n",(0,t.jsx)(n.h4,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsx)(n.p,{children:"Set up your environment by sourcing the following file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Replace ".bash" with your shell if you\'re not using bash\n# Possible values are: setup.bash, setup.sh, setup.zsh\necho "source /opt/ros/iron/setup.bash" >> ~/.bashrc\nsource ~/.bashrc\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sourcing ROS 2 setup files will set several environment variables necessary for operating ROS 2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"printenv | grep -i ROS\n\nROS_VERSION=2\nROS_PYTHON_VERSION=3\nROS_DISTRO=iron\n...\n"})}),"\n",(0,t.jsx)(n.p,{children:"The default middleware that ROS 2 uses for communication is DDS. In DDS, the primary mechanism for having different logical networks share a physical network is known as the Domain ID. ROS 2 nodes on the same domain can freely discover and send messages to each other, while ROS 2 nodes on different domains cannot. All ROS 2 nodes use domain ID 0 by default. To avoid interference between different groups of computers running ROS 2 on the same network, a different domain ID should be set for each group. To skip that background and just choose a safe number, simply choose a domain ID between 0 and 101, inclusive."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "export ROS_DOMAIN_ID=88" >> ~/.bashrc\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ros-dependencies",children:"ROS Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Before using ROS, you have to initialize ",(0,t.jsx)(n.code,{children:"rosdep"}),", which enables you to easily install system dependencies for sources you want to compile, and also is required to run some core components in ROS:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo rosdep init\nrosdep update\n"})}),"\n",(0,t.jsx)(n.h4,{id:"api-test",children:"API Test"}),"\n",(0,t.jsx)(n.p,{children:"In one terminal, source the setup file and then run a C++ talker:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source /opt/ros/iron/setup.bash\nros2 run demo_nodes_cpp talker\n"})}),"\n",(0,t.jsx)(n.p,{children:"In another terminal source the setup file and then run a Python listener:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source /opt/ros/iron/setup.bash\nros2 run demo_nodes_py listener\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see the talker saying that it\u2019s Publishing messages and the listener saying I heard those messages. This verifies both the C++ and Python APIs are working properly."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gazebo Ignition ROS2",src:s(647747).Z+"",width:"1356",height:"412"})}),"\n",(0,t.jsx)(n.h4,{id:"turtlesim-hello-world",children:"Turtlesim Hello World"}),"\n",(0,t.jsx)(n.p,{children:"Install the turtlesim package for your ROS 2 distro::"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install ros-iron-turtlesim\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ros2 run turtlesim turtlesim_node\nros2 run turtlesim turtle_teleop_key\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At this point you should have three windows open: a terminal running ",(0,t.jsx)(n.code,{children:"turtlesim_node"}),", a terminal running ",(0,t.jsx)(n.code,{children:"turtle_teleop_key"})," and the ",(0,t.jsx)(n.code,{children:"turtlesim"})," window. Arrange these windows so that you can see the ",(0,t.jsx)(n.code,{children:"turtlesim"})," window, but also have the ",(0,t.jsx)(n.code,{children:"terminal"})," running ",(0,t.jsx)(n.code,{children:"turtle_teleop_key"})," active so that you can control the turtle in ",(0,t.jsx)(n.code,{children:"turtlesim"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gazebo Ignition ROS2",src:s(919808).Z+"",width:"1230",height:"383"})}),"\n",(0,t.jsx)(n.p,{children:"Open a new terminal to install rqt and its plugins:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install ~nros-iron-rqt*\n"})}),"\n",(0,t.jsx)(n.p,{children:"To run rqt:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rqt --force-discover\n"})}),"\n",(0,t.jsx)(n.p,{children:"When running rqt for the first time, the window will be blank. No worries; just select Plugins > Services > Service Caller from the menu bar at the top."}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s use ",(0,t.jsx)(n.code,{children:"rqt"})," to call the ",(0,t.jsx)(n.code,{children:"/spawn"})," service. You can guess from its name that ",(0,t.jsx)(n.code,{children:"/spawn"})," will create another turtle in the turtlesim window. Give the new turtle a unique name like ",(0,t.jsx)(n.code,{children:"hero_turtle"})," and enter some valid coordinates at which to spawn the new turtle, like ",(0,t.jsx)(n.code,{children:"x = 1.0"})," and ",(0,t.jsx)(n.code,{children:"y = 1.0"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gazebo Ignition ROS2",src:s(966926).Z+"",width:"1263",height:"531"})}),"\n",(0,t.jsx)(n.p,{children:"Now let\u2019s give turtle1 a unique pen using the /set_pen service:"}),"\n",(0,t.jsxs)(n.p,{children:["Start another ",(0,t.jsx)(n.code,{children:"teleop"})," node and remap the ",(0,t.jsx)(n.code,{children:"cmd_vel"})," topic to take control of the second turtle:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ros2 run turtlesim turtle_teleop_key --ros-args --remap turtle1/cmd_vel:=hero_turtle/cmd_vel\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gazebo Ignition ROS2",src:s(614371).Z+"",width:"1263",height:"531"})}),"\n",(0,t.jsx)(n.h3,{id:"gazebo",children:"Gazebo"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://gazebosim.org/docs/fortress/install_ubuntu",children:"Gazebo Fortress (Ignition)"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"First install some necessary tools:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install lsb-release wget gnupg\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then install Ignition Fortress:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo wget https://packages.osrfoundation.org/gazebo.gpg -O /usr/share/keyrings/pkgs-osrf-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/pkgs-osrf-archive-keyring.gpg] http://packages.osrfoundation.org/gazebo/ubuntu-stable $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/gazebo-stable.list > /dev/null\nsudo apt-get update\nsudo apt-get install ignition-fortress\n'})}),"\n",(0,t.jsxs)(n.p,{children:["All libraries should be ready to use and the ",(0,t.jsx)(n.code,{children:"ign gazebo"})," app ready to be executed."]}),"\n",(0,t.jsx)(n.h3,{id:"installing-gazebo-with-ros",children:"Installing Gazebo with ROS"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://gazebosim.org/docs/fortress/ros_installation",children:"ROS2 Iron with Gazebo Fortress"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ros-iron-ros-gz\n"})}),"\n",(0,t.jsx)(n.p,{children:"After installing Gazebo in Step 1, you can launch Gazebo Sim, a 3D robotics simulator, from a terminal. This command will launch both the Sim server and Sim GUI with a world that contains three simple shapes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ign gazebo sim shapes.sdf -v 4\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gazebo Ignition ROS2",src:s(379545).Z+"",width:"1843",height:"1010"})}),"\n",(0,t.jsxs)(n.p,{children:["There are a wide variety of simulation resources at your disposal on ",(0,t.jsx)(n.a,{href:"https://app.gazebosim.org/fuel",children:"https://app.gazebosim.org/fuel"}),". Further Tutorial => ",(0,t.jsx)(n.a,{href:"https://gazebosim.org/docs/fortress/tutorials",children:"gazebosim.org"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,n,s)=>{s.d(n,{ah:()=>c});var t=s(667294);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function i(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?i(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function o(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):a(a({},n),e)),s},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=c(s),p=r,g=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return s?t.createElement(g,a(a({ref:n},h),{},{components:s})):t.createElement(g,a({ref:n},h))}));h.displayName="MDXCreateElement"},647747:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Gazebo_ROS2_01-c59ebdd659c3f8613bf8e9519dbad3b3.webp"},919808:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Gazebo_ROS2_02-cc03178b53e9b55d2986d0861f54536b.webp"},966926:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Gazebo_ROS2_03-02552caa46633bea84225c946db013b1.webp"},614371:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Gazebo_ROS2_04-7dbc906109e734f3dcf0ca482c6d4cd5.webp"},379545:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Gazebo_ROS2_05-9813ddf7461037494e8a66e9a9fccfcc.webp"},1746:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-252551beac0b36b4ba53ccd380897f8e.jpg"}}]);