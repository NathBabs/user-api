# Getting Started

* Ensure Docker is up and running

### Run
```
$ npm install
```
  
Create a dev.env file in the config folder and set
```
DB_PASSWORD=<youradminpassword>
PORT=5000
```
### Start Server
```
$ docker-compose up
```

### Troubleshooting
In case you get 
```
$ docker-compose up
Pulling db (postgres:)...
ERROR: Get https://registry-1.docker.io/v2/library/postgres/manifests/latest: unauthorized: incorrect username or password
```

Try this:
```
$ docker login
Authenticating with existing credentials...
Stored credentials invalid or expired
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username (xyz@gmail.com): xyz
Password: *******
Login Succeeded
```
Then docker-compose should work

The host i used is ```host.docker.internal``` so if you want to test the endpoint you will have to write the following docker commands to get the host of the VM runnin the container.
```
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES  
0d0af23496f4        noguile/user-api    "docker-entrypoint.s…"   13 minutes ago      Up 13 minutes       0.0.0.0:5000->5000/tcp   user-api_api_1
e4e4c019a779        postgres            "docker-entrypoint.s…"   35 minutes ago      Up 13 minutes                                user-api_db_1
```

The host here is ```0.0.0.0``` , it may be different for you.
