# Description



## Routes

- ### List all users

[GET ](http://localhost:3000/api/user)

Request:

Response:

```json
{
    "error": false,
    "status": 200,
    "body": [
        {
            "id": "1",
            "name": "carlos"
        }
    ]
}
```

- Detail user

[GET](http://localhost:3000/api/user/1)

Request:

Response:

```json
{
    "error": false,
    "status": 201,
    "body": {
        "id": "1",
        "name": "carlos"
    }
}
```

- Create new user

  [POST](http://localhost:3000/api/user/)

Request:

```json
{
    "id":"2",
    "name":"AngelRicardo",
    "username":"wabngel",
    "password":"123"
}
```

Response:

```json
{
    "error": false,
    "status": 200,
    "body": {
        "user": [
            {
                "id": "1",
                "name": "carlos"
            },
            {
                "name": "AngelRicardo",
                "username": "wabngel",
                "id": "2"
            }
        ],
        "auth": [
            {
                "id": "2",
                "username": "wabngel",
                "password": "$2b$05$bD9nHDy/USgU46G.8hjyoeOdcX3E0ZTNyrnszNoI55chVPPXhL5hS"
            }
        ]
    }
}
```

- Login

  [POST](http://localhost:3000/api/auth/login)

  Request

  ```json
  {
      "username":"wabngel",
      "password":"123"
  }
  ```

  Response

```json
{
    "error": false,
    "status": 200,
    "body": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJ1c2VybmFtZSI6IndhYm5nZWwiLCJwYXNzd29yZCI6IiQyYiQwNSRiRDluSER5L1VTZ1U0NkcuOGhqeW9lT2RjWDNFMFpUTnlybnN6Tm9JNTVjaFZQUFhoTDVoUyIsImlhdCI6MTY1Njg3Njg3M30._JVDmLHwzKSXS3sanmWjO0LOBA5LGePE2fCAkd2TImU"
}
```

- Update user 

  Request

  ```
  {
      "id":"2",
      "name":"AngelRicardo",
      "username":"wabngel",
      "password":"123"
  }
  ```

  Using Bearer token:

  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJ1c2VybmFtZSI6IndhYm5nZWwiLCJwYXNzd29yZCI6IiQyYiQwNSRiRDluSER5L1VTZ1U0NkcuOGhqeW9lT2RjWDNFMFpUTnlybnN6Tm9JNTVjaFZQUFhoTDVoUyIsImlhdCI6MTY1Njg3Njg3M30._JVDmLHwzKSXS3sanmWjO0LOBA5LGePE2fCAkd2TImU
  ```

  

  Response

  

  

  