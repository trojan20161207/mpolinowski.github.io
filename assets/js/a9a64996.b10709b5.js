"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[23846],{929567:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(785893),a=n(603905);const o={sidebar_position:9020,slug:"2021-09-23",title:"Getting started with Go and React - PostgreSQL",authors:"mpolinowski",tags:["Go","Databases"]},i=void 0,s={id:"Development/Go/2021-09-23--golang-react-starter-part-iii/index",title:"Getting started with Go and React - PostgreSQL",description:"Shenzhen, China",source:"@site/docs/Development/Go/2021-09-23--golang-react-starter-part-iii/index.md",sourceDirName:"Development/Go/2021-09-23--golang-react-starter-part-iii",slug:"/Development/Go/2021-09-23--golang-react-starter-part-iii/2021-09-23",permalink:"/docs/Development/Go/2021-09-23--golang-react-starter-part-iii/2021-09-23",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2021-09-23--golang-react-starter-part-iii/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"},{label:"Databases",permalink:"/docs/tags/databases"}],version:"current",sidebarPosition:9020,frontMatter:{sidebar_position:9020,slug:"2021-09-23",title:"Getting started with Go and React - PostgreSQL",authors:"mpolinowski",tags:["Go","Databases"]},sidebar:"tutorialSidebar",previous:{title:"Getting started with Go and React - React & REST API's",permalink:"/docs/Development/Go/2021-09-24--golang-react-starter-part-iv/2021-09-24"},next:{title:"Getting started with Go and React - API Routes",permalink:"/docs/Development/Go/2021-09-22--golang-react-starter-part-ii/2021-09-22"}},l={},c=[{value:"Setting the Database",id:"setting-the-database",level:2},{value:"Setup",id:"setup",level:3},{value:"Create a Database for your Application",id:"create-a-database-for-your-application",level:3},{value:"Create Tables",id:"create-tables",level:3},{value:"Camera",id:"camera",level:4},{value:"Camera Model",id:"camera-model",level:4},{value:"Locations",id:"locations",level:4},{value:"Adding Data",id:"adding-data",level:3},{value:"Camera",id:"camera-1",level:4},{value:"Camera Model",id:"camera-model-1",level:4},{value:"Locations",id:"locations-1",level:4},{value:"Connecting your Application",id:"connecting-your-application",level:2},{value:"Postgres Driver",id:"postgres-driver",level:3},{value:"Connecting",id:"connecting",level:3},{value:"Add Database to Route Handler",id:"add-database-to-route-handler",level:3},{value:"Query Single Camera",id:"query-single-camera",level:4},{value:"Add Location to Camera Query",id:"add-location-to-camera-query",level:4},{value:"Query All Cameras",id:"query-all-cameras",level:4}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Shenzhen, China",src:n(648723).Z+"",width:"1500",height:"441"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Creating an REST API backend in Go and connecting it to a React.js frontend."}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#",children:"Part I - Webservice, Routing and Status Log"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#",children:"Part II - API Routes"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#",children:"Part III - PostgreSQL"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["I want to prototype a Go backend for a ",(0,t.jsx)(r.strong,{children:"Weather Cam"})," tool. The backend should hold all the information related to all cameras and serve them on different routes. The backend then needs to be connected to a React.js frontend that displays the JSON data that is being served as well as to allow to add / delete cameras."]}),"\n",(0,t.jsx)(r.h2,{id:"setting-the-database",children:"Setting the Database"}),"\n",(0,t.jsx)(r.h3,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(r.p,{children:"I am going to use the official Docker image to set up the SQL Database on a Debian Bullseye server:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker run -d --rm \\\r\n    --name postgres \\\r\n    -e POSTGRES_PASSWORD=secretpassword \\\r\n    -p 5432:5432 \\\r\n    postgres:14\n"})}),"\n",(0,t.jsx)(r.p,{children:"I can now access the container and connect to the Postgres CLI:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'docker exec -ti -u postgres postgres psql\r\n\r\npsql (14.0 (Debian 14.0-1.pgdg110+1))\r\nType "help" for help.\r\n\r\npostgres=#\n'})}),"\n",(0,t.jsx)(r.h3,{id:"create-a-database-for-your-application",children:"Create a Database for your Application"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"CREATE DATABASE gocam;\n"})}),"\n",(0,t.jsx)(r.p,{children:"Switch to using the new message_boards table instead of the default postgres:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'\\connect gocam;\r\nYou are now connected to database "gocam" as user "postgres".\n'})}),"\n",(0,t.jsx)(r.h3,{id:"create-tables",children:"Create Tables"}),"\n",(0,t.jsx)(r.p,{children:"We build 3 models that for the data that our app should handle:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./models/models.go"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Camera"}),"\n",(0,t.jsx)(r.li,{children:"CameraModel"}),"\n",(0,t.jsx)(r.li,{children:"Locations"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"We now need 3 tables in our database that can hold this data."}),"\n",(0,t.jsx)(r.h4,{id:"camera",children:"Camera"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE camera (\r\n    id INTEGER PRIMARY KEY UNIQUE GENERATED ALWAYS AS IDENTITY,\r\n    name VARCHAR ( 25 ) UNIQUE NOT NULL,\r\n    usr VARCHAR ( 25 ) NOT NULL,\r\n    pass VARCHAR ( 25 ) NOT NULL,\r\n    ip VARCHAR ( 50 ) UNIQUE NOT NULL,\r\n    created TIMESTAMP NOT NULL,\r\n    updated TIMESTAMP,\r\n    rating INT,\r\n    location VARCHAR ( 50 ) NOT NULL\r\n);\n"})}),"\n",(0,t.jsx)(r.h4,{id:"camera-model",children:"Camera Model"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE camera_model (\r\n    id INT REFERENCES camera(id) ON DELETE CASCADE,\r\n    model VARCHAR ( 25 ) NOT NULL,\r\n    lense VARCHAR ( 25 ) NOT NULL,\r\n    res VARCHAR ( 10 ) NOT NULL,\r\n    created TIMESTAMP NOT NULL,\r\n    updated TIMESTAMP\r\n);\n"})}),"\n",(0,t.jsx)(r.h4,{id:"locations",children:"Locations"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE camera_locations (\r\n    id INT REFERENCES camera(id) ON DELETE CASCADE,\r\n    location VARCHAR ( 50 ),\r\n    cid VARCHAR ( 15 ),\r\n    lid VARCHAR ( 15 ),\r\n    created TIMESTAMP NOT NULL,\r\n    updated TIMESTAMP\r\n);\n"})}),"\n",(0,t.jsx)(r.h3,{id:"adding-data",children:"Adding Data"}),"\n",(0,t.jsx)(r.h4,{id:"camera-1",children:"Camera"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"INSERT INTO camera\r\n  (name, usr, pass, ip, created, updated, rating, location)\r\nVALUES\r\n  ('Mountain View', 'admin', 'instar', '192.168.2.10', NOW() - interval '123 days', NOW(), 3, 'HK'),\r\n  ('Harbour East', 'admin', 'instar', '192.168.2.19', NOW() - interval '143 days', NOW(), 5, 'HK'),\r\n  ('Harbour West', 'admin', 'instar', '192.168.2.24', NOW() - interval '156 days', NOW(), 3, 'HK'),\r\n  ('Beachfront', 'admin', 'instar', '192.168.2.117', NOW() - interval '32 days', NOW(), 2, 'HK'),\r\n  ('Downtown', 'admin', 'instar', '192.168.178.70', NOW() - interval '467 days', NOW(), 4, 'HK'),\r\n  ('Central Park', 'admin', 'instar', '192.168.178.42', NOW() - interval '435 days', NOW(), 2, 'HK'),\r\n  ('Terminal', 'admin', 'instar', '192.168.178.52', NOW() - interval '213 days', NOW(), 2, 'HK'),\r\n  ('Skyline', 'admin', 'instar', '192.168.178.67', NOW() - interval '234 days', NOW(), 5, 'HK'),\r\n  ('Plaza', 'admin', 'instar', '192.168.178.249', NOW() - interval '7 days', NOW(), 3, 'HK');\n"})}),"\n",(0,t.jsx)(r.h4,{id:"camera-model-1",children:"Camera Model"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"INSERT INTO camera_model\r\n  (id, model, lense, res, created, updated)\r\nVALUES\r\n  ( 1, 'IN-9020', '4.2mm', '1080p', NOW() - interval '53 days', NOW() ),\r\n  ( 2, 'IN-9008', '4.2mm', '1080p', NOW() - interval '84 days', NOW() ),\r\n  ( 3, 'IN-9008', '4.2mm', '1080p', NOW() - interval '89 days', NOW() ),\r\n  ( 4, 'IN-9408', '4.2mm', '1440p', NOW() - interval '97 days', NOW() ),\r\n  ( 5, 'IN-9020', '4.2mm', '1080p', NOW() - interval '69 days', NOW() ),\r\n  ( 6, 'IN-9008', '4.2mm', '1080p', NOW() - interval '76 days', NOW() ),\r\n  ( 7, 'IN-9408', '4.2mm', '1440p', NOW() - interval '78 days', NOW() ),\r\n  ( 8, 'IN-9020', '4.2mm', '1080p', NOW() - interval '56 days', NOW() ),\r\n  ( 9, 'IN-9408', '4.2mm', '1440p', NOW() - interval '87 days', NOW() );\n"})}),"\n",(0,t.jsx)(r.h4,{id:"locations-1",children:"Locations"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"INSERT INTO camera_locations\r\n  (id, location, cid, lid, created, updated)\r\nVALUES\r\n  ( 1, 'Mountain View', 'INSTAR-0001', 'HK-0001', NOW() - interval '32 days', NOW() ),\r\n  ( 2, 'Harbour East', 'INSTAR-0002', 'HK-0001', NOW() - interval '23 days', NOW() ),\r\n  ( 3, 'Harbour West', 'INSTAR-0003', 'HK-0001', NOW() - interval '43 days', NOW() ),\r\n  ( 4, 'Beachfront', 'INSTAR-0001', 'HK-0002', NOW() - interval '12 days', NOW() ),\r\n  ( 5, 'Downtown', 'INSTAR-0005', 'HK-0003', NOW() - interval '54 days', NOW() ),\r\n  ( 6, 'Central Park', 'INSTAR-0001', 'HK-0003', NOW() - interval '213 days', NOW() ),\r\n  ( 7, 'Terminal', 'INSTAR-0002', 'HK-0003', NOW() - interval '33 days', NOW() ),\r\n  ( 8, 'Skyline', 'INSTAR-0003', 'HK-0003', NOW() - interval '65 days', NOW() ),\r\n  ( 9, 'Plaza', 'INSTAR-0004', 'HK-0003', NOW() - interval '45 days', NOW() );\n"})}),"\n",(0,t.jsx)(r.h2,{id:"connecting-your-application",children:"Connecting your Application"}),"\n",(0,t.jsx)(r.h3,{id:"postgres-driver",children:"Postgres Driver"}),"\n",(0,t.jsxs)(r.p,{children:["First we need to ",(0,t.jsx)(r.a,{href:"https://github.com/lib/pq",children:"install a driver"})," that allows us to establish a connection with our database:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"go get -u github.com/lib/pq\n"})}),"\n",(0,t.jsx)(r.h3,{id:"connecting",children:"Connecting"}),"\n",(0,t.jsxs)(r.p,{children:["And import the following packages to ",(0,t.jsx)(r.code,{children:"main.go"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'import (\r\n\t"context"\r\n\t"database/sql"\r\n\t...\r\n\r\n\t_ "github.com/lib/pq"\r\n)\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Now open a connection with - add your own Postgres connection string ",(0,t.jsx)(r.code,{children:"pgURL"}),":"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./src/api/main.go"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'// PG Database\r\nconst pgURL = "postgres://postgres:secretpassword@192.168.2.111/gocam?sslmode=disable"\r\n\r\n\r\nfunc main() {\r\n  ...\r\n\tflag.StringVar(&cfg.db.dsn, "dsn", pgURL, "Postgres connection string")\r\n  ...\r\n\t// Call database and crash if not successful\r\n\tdb, err := connectDB(cfg)\r\n\tif err !=nil {\r\n\t\tlogger.Fatal(err)\r\n\t}\r\n\tdefer db.Close()\r\n  ...\r\n}\r\n\r\n\r\nfunc connectDB(cfg config) (*sql.DB, error) {\r\n\tdb, err := sql.Open("postgres", cfg.db.dsn)\r\n\tif err != nil {\r\n\t\treturn nil, err\r\n\t}\r\n\r\n\tctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)\r\n\tdefer cancel()\r\n\r\n\terr = db.PingContext(ctx)\r\n\tif err != nil {\r\n\t\treturn nil, err\r\n\t}\r\n\r\n\treturn db, nil\r\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"add-database-to-route-handler",children:"Add Database to Route Handler"}),"\n",(0,t.jsx)(r.p,{children:"Create the database model:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./models/models.go"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:"// Database wrapper\r\ntype Models struct {\r\n\tDB DBModel\r\n}\r\n// Return models with db pool\r\nfunc NewModels(db *sql.DB) Models {\r\n\treturn Models {\r\n\t\tDB: DBModel{DB: db},\r\n\t}\r\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"And the database type:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./models/gocamDB.go"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package models\r\n\r\nimport "database/sql"\r\n\r\ntype DBModel struct {\r\n\tDB *sql.DB\r\n}\r\n// Return one camera or error\r\nfunc(m *DBModel) Get(id int) (*Camera, error) {\r\n\treturn nil, nil\r\n}\r\n// Return all cameras or error\r\nfunc(m *DBModel) All(id int) ([]*Camera, error) {\r\n\treturn nil, nil\r\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"Now I want to fill those methods with SQL queries that either fetch one specific camera (identified by ID) or a collection of all cameras. The SQL queries for this are:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT id, name, usr, pass, ip, updated, rating, location FROM camera WHERE id = 1;\r\n\r\n id |     name      |  usr  |  pass  |      ip      |          updated           | rating | location\r\n----+---------------+-------+--------+--------------+----------------------------+--------+----------\r\n  1 | Mountain View | admin | instar | 192.168.2.10 | 2021-10-15 03:46:36.603446 |      3 | HK\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT id, name, usr, pass, ip, updated, rating, location FROM camera;\r\n\r\n id |     name      |  usr  |  pass  |       ip        |          updated           | rating | location\r\n----+---------------+-------+--------+-----------------+----------------------------+--------+----------\r\n  1 | Mountain View | admin | instar | 192.168.2.10    | 2021-10-15 03:46:36.603446 |      3 | HK\r\n  2 | Harbour East  | admin | instar | 192.168.2.19    | 2021-10-15 03:46:36.603446 |      5 | HK\r\n  3 | Harbour West  | admin | instar | 192.168.2.24    | 2021-10-15 03:46:36.603446 |      3 | HK\r\n  4 | Beachfront    | admin | instar | 192.168.2.117   | 2021-10-15 03:46:36.603446 |      2 | HK\r\n  5 | Downtown      | admin | instar | 192.168.178.70  | 2021-10-15 03:46:36.603446 |      4 | HK\r\n  6 | Central Park  | admin | instar | 192.168.178.42  | 2021-10-15 03:46:36.603446 |      2 | HK\r\n  7 | Terminal      | admin | instar | 192.168.178.52  | 2021-10-15 03:46:36.603446 |      2 | HK\r\n  8 | Skyline       | admin | instar | 192.168.178.67  | 2021-10-15 03:46:36.603446 |      5 | HK\r\n  9 | Plaza         | admin | instar | 192.168.178.249 | 2021-10-15 03:46:36.603446 |      3 | HK\n"})}),"\n",(0,t.jsx)(r.h4,{id:"query-single-camera",children:"Query Single Camera"}),"\n",(0,t.jsx)(r.p,{children:"The function for a single camera looks like this:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./models/gocamDB.go"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'// Return one camera or error\r\nfunc(m *DBModel) Get(id int) (*Camera, error) {\r\n\tctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)\r\n\tdefer cancel()\r\n\t// SQL query to get one camera by id\r\n\tquery := `SELECT "id", "name", "usr", "pass", "ip", "updated", "created", "rating" FROM camera WHERE "id"= $1`\r\n\t// Expect a single row in return from Receiver\r\n\trow := m.DB.QueryRowContext(ctx, query, id)\r\n\t// Create variable of type camera\r\n\tvar camera Camera\r\n\t// And add the row that was returned from receiver to it\r\n\terr := row.Scan(\r\n\t\t&camera.ID,\r\n\t\t&camera.Name,\r\n\t\t&camera.Username,\r\n\t\t&camera.Password,\r\n\t\t&camera.Address,\r\n\t\t&camera.Created,\r\n\t\t&camera.Updated,\r\n\t\t&camera.Rating,\r\n\t)\r\n\tif err != nil {\r\n\t\treturn nil, err\r\n\t}\r\n\r\n\treturn &camera, nil\r\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Now we have a function to connect to Postgres and fetch data from our database tables. Now we need to add a function to our ",(0,t.jsx)(r.strong,{children:"Receiver"})," that provide our route handlers with access to this data."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./src/api/main.go"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:"...\r\ntype application struct {\r\n\tconfig config\r\n\tlogger *log.Logger\r\n\tmodels models.Models\r\n}\r\n...\r\nfunc main() {\r\n  ...\r\n\tapp := &application {\r\n\t\tconfig: cfg,\r\n\t\tlogger: logger,\r\n\t\tmodels: models.NewModels(db),\r\n\t}\r\n  ...\r\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"And now all we need is to replace our placeholder dummy data from the camera route handler with an call to this function:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./models/gocamDB.go"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'// Hardcode a camera to get started\r\n// camera := models.Camera {\r\n// \tID: id,\r\n// \tName: "Mountain View",\r\n// \tUsername: "admin",\r\n// \tPassword: "instar",\r\n// \tAddress: "192.168.2.19",\r\n// \tRating: 5,\r\n// \tLocation: "Hongkong",\r\n// \tCreated: time.Date(2021, 9, 22, 0, 0, 0, 0, time.Local),\r\n// \tUpdated: time.Now(),\r\n// }\r\ncamera, err := app.models.DB.Get(id)\n'})}),"\n",(0,t.jsx)(r.p,{children:"And we now successfully retrieve our data from Postgres:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'curl http://localhost:4000/v1/camera/6\r\n\r\n{"camera":{"id":6,"name":"Central Park","usr":"admin","pass":"instar","ip":"192.168.178.42","installed":"2021-10-16T08:16:15.363764Z","inspected":"2020-08-07T08:16:15.363764Z","rating":2}}\n'})}),"\n",(0,t.jsx)(r.h4,{id:"add-location-to-camera-query",children:"Add Location to Camera Query"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./src/api/cameraHandler.go"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:"// Get camera location\r\n\tquery = `SELECT\r\n\t\t\t\tcamera_locations.id,\r\n\t\t\t\tcamera_locations.location,\r\n\t\t\t\tcamera_locations.cid,\r\n\t\t\t\tcamera_locations.lid,\r\n\t\t\t\tcamera_model.model,\r\n\t\t\t\tcamera_model.lense,\r\n\t\t\t\tcamera_model.res\r\n\t\t\tFROM\r\n\t\t\t\tcamera_locations\r\n\t\t\tINNER JOIN\r\n\t\t\t\tcamera_model\r\n\t\t\tON\r\n\t\t\t\tcamera_locations.id = camera_model.id\r\n\t\t\tWHERE\r\n\t\t\t\tcamera_locations.id=$1;`\r\n\r\n\trows, _ := m.DB.QueryContext(ctx, query, id)\r\n\tdefer rows.Close()\r\n\r\n\tvar locations []Location\r\n\tfor rows.Next() {\r\n\t\tvar loc Location\r\n\t\terr := rows.Scan(\r\n\t\t\t&loc.ID,\r\n\t\t\t&loc.LocationName,\r\n\t\t\t&loc.CameraID,\r\n\t\t\t&loc.LocationID,\r\n\t\t\t// The following are of type CameraModel not Location\r\n\t\t\t// I now added them to the Location type in models.go\r\n\t\t\t// Not sure how to mix up types here. #TODO\r\n\t\t\t&loc.Model,\r\n\t\t\t&loc.Lense,\r\n\t\t\t&loc.Resolution,\r\n\t\t)\r\n\t\tif err != nil {\r\n\t\t\treturn nil, err\r\n\t\t}\r\n\t\tlocations = append(locations, loc)\r\n\t}\r\n\r\n\tcamera.Location = locations\n"})}),"\n",(0,t.jsx)(r.p,{children:"Update the Camera Type to display the location content:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./models/models.go"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'// BEFORE\r\nLocation\t\t\t[]Location\t`json:"-"`\r\n// AFTER\r\nLocation\t\t\t[]Location\t`json:"location"`\n'})}),"\n",(0,t.jsx)(r.p,{children:"The response from Postgres now also includes the location block:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'curl http://localhost:4000/v1/camera/6\r\n\r\n{\r\n    "camera": {\r\n        "id": 6,\r\n        "name": "Central Park",\r\n        "usr": "admin",\r\n        "pass": "instar",\r\n        "ip": "192.168.178.42",\r\n        "installed": "2021-10-17T11:06:37.946572Z",\r\n        "inspected": "2020-08-08T11:06:37.946572Z",\r\n        "rating": 2,\r\n        "location": [\r\n            {\r\n                "location": "Central Park",\r\n                "cid": "INSTAR-0001",\r\n                "lid": "HK-0003",\r\n                "model": "IN-9008",\r\n                "lense": "4.2mm",\r\n                "res": "1080p"\r\n            }\r\n        ]\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(r.h4,{id:"query-all-cameras",children:"Query All Cameras"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./models/gocamDB.go"})}),"\n",(0,t.jsx)(r.p,{children:"This is mostly duplicated code - compared to the get-one-camera function and should be cleaned up a bit:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'// Return all cameras\r\nfunc(m *DBModel) All() ([]*Camera, error) {\r\n\tctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)\r\n\tdefer cancel()\r\n\r\n\t// SQL query to get all cameras\r\n\tquery := `SELECT\r\n\t\t\t\t"id", "name", "usr", "pass", "ip", "updated", "created", "rating"\r\n\t\t\tFROM camera ORDER BY created ASC`\r\n\r\n\trows, err := m.DB.QueryContext(ctx, query)\r\n\tif err != nil {\r\n\t\treturn nil, err\r\n\t}\r\n\r\n\tdefer rows.Close()\r\n\r\n\tvar cameras []*Camera\r\n\r\n\tfor rows.Next(){\r\n\t\tvar camera Camera\r\n\t\terr := rows.Scan(\r\n\t\t\t&camera.ID,\r\n\t\t\t&camera.Name,\r\n\t\t\t&camera.Username,\r\n\t\t\t&camera.Password,\r\n\t\t\t&camera.Address,\r\n\t\t\t&camera.Created,\r\n\t\t\t&camera.Updated,\r\n\t\t\t&camera.Rating,\r\n\t\t)\r\n\t\tif err != nil{\r\n\t\t\treturn nil, err\r\n\t\t}\r\n\r\n\t\t// Get camera location\r\n\t\tquery = `SELECT\r\n\t\t\t\t\tcamera_locations.id,\r\n\t\t\t\t\tcamera_locations.location,\r\n\t\t\t\t\tcamera_locations.cid,\r\n\t\t\t\t\tcamera_locations.lid,\r\n\t\t\t\t\tcamera_model.model,\r\n\t\t\t\t\tcamera_model.lense,\r\n\t\t\t\t\tcamera_model.res\r\n\t\t\t\tFROM\r\n\t\t\t\t\tcamera_locations\r\n\t\t\t\tINNER JOIN\r\n\t\t\t\t\tcamera_model\r\n\t\t\t\tON\r\n\t\t\t\t\tcamera_locations.id = camera_model.id\r\n\t\t\t\tWHERE\r\n\t\t\t\t\tcamera_locations.id=$1;`\r\n\r\n\t\trows, _ := m.DB.QueryContext(ctx, query, camera.ID)\r\n\r\n\t\tvar locations []Location\r\n\t\tfor rows.Next() {\r\n\t\tvar loc Location\r\n\t\terr := rows.Scan(\r\n\t\t\t&loc.ID,\r\n\t\t\t&loc.LocationName,\r\n\t\t\t&loc.CameraID,\r\n\t\t\t&loc.LocationID,\r\n\t\t\t// The following are of type CameraModel not Location\r\n\t\t\t// I now added them to the Location type in models.go\r\n\t\t\t// Not sure how to mix up types here.\r\n\t\t\t&loc.Model,\r\n\t\t\t&loc.Lense,\r\n\t\t\t&loc.Resolution,\r\n\t\t)\r\n\t\tif err != nil {\r\n\t\t\treturn nil, err\r\n\t\t}\r\n\t\tlocations = append(locations, loc)\r\n\t\t}\r\n\t\tdefer rows.Close()\r\n\r\n\t\tcamera.Location = locations\r\n\t\tcameras = append(cameras, &camera)\r\n\t}\r\n\r\n\treturn cameras, nil\r\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"We now need to prepare our route handler to use this function:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"./src/api/cameraHandler.go"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'func (app *application) getAllCameras(w http.ResponseWriter, r *http.Request) {\r\n\tcameras, err := app.models.DB.All()\r\n\tif err != nil {\r\n\t\tapp.errorJSON(w, err)\r\n\t\treturn\r\n\t}\r\n\r\n\terr = app.writeJSON(w, http.StatusOK, cameras, "cameras")\r\n\tif err != nil {\r\n\t\tapp.errorJSON(w, err)\r\n\t\treturn\r\n\t}\r\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["We now have a response from Postgres on our ",(0,t.jsx)(r.code,{children:"/cameras"})," route:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'curl http://localhost:4000/v1/cameras\r\n\r\n{\r\n    "cameras": [\r\n        {\r\n            "id": 5,\r\n            "name": "Downtown",\r\n            "usr": "admin",\r\n            "pass": "instar",\r\n            "ip": "192.168.178.70",\r\n            "install": "2021-10-17T11:06:37.946572Z",\r\n            "inspect": "2020-07-07T11:06:37.946572Z",\r\n            "rating": 4,\r\n            "location": [\r\n                {\r\n                    "location": "Downtown",\r\n                    "cid": "INSTAR-0005",\r\n                    "lid": "HK-0003",\r\n                    "model": "IN-9020",\r\n                    "lense": "4.2mm",\r\n                    "res": "1080p"\r\n                }\r\n            ]\r\n        },\r\n...\n'})})]})}function m(e={}){const{wrapper:r}={...(0,a.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},603905:(e,r,n)=>{n.d(r,{ah:()=>c});var t=n(667294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,u=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?t.createElement(u,i(i({ref:r},m),{},{components:n})):t.createElement(u,i({ref:r},m))}));m.displayName="MDXCreateElement"},648723:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f4a66dcdd4723b20f63751871edc4e36.jpg"}}]);