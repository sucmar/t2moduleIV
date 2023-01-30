# t2moduleIV 
## products, users, auth, shoppingCart API
This project contains a products and users requests `CRUD` and has been created using the following stacks `nodejs`, `javascript`, `mongoose`, `mongo altas` 
## authors
 * Marco Antonio Baltazar Santos, mabsbaltazar@gmail.com, 60717546
 * Juan Alberto Canqui Ticona, juan.alberto.canqui.ticona@gmail.com, 75277803
 * Franz Alejandro Castellon Arancibia, gnfranz@gmail.com, 68642473

### github Repository
branch name: `main` 
```sh
https://github.com/sucmar/t2moduleIV
```
### Set up and Installation
In order to run app, please execute the following scripts: 
```sh
git clone https://github.com/sucmar/t2moduleIV.git
cd t2moduleIV
yarn install
yarn dev
```
## t2moduleIV products_endpoints
### GET 
```sh
/api/v1/products
```
```json
{
   "status": "ok",
   "data": [
       {
           "_id": "63c60913e80445a7a5a110d1",
           "inventory": 200,
           "name": "tv",
           "price": 45,
           "unit": "unidad",
           "__v": 0
       }
   ]
}
```
### POST
```sh
/api/v1/products
```
`req.body` to send
```json
{
   "name":"platano",
   "price":45,
   "unit":"unidad",
   "inventory":200
}
```
json response
```json
{
   "status": "ok",
   "dataInserted": {
       "inventory": 200,
       "_id": "63cc2bc314b9b6cc0d04e5e2",
       "name": "tv",
       "price": 45,
       "unit": "unidad",
       "__v": 0
   }
}
```
### GET BY ID
```sh
/api/v1/products/:id
```
send `req.params.id` to get a response 
```json
{
   "status": "ok",
   "data": {
       "_id": "63cc2bc314b9b6cc0d04e5e2",
       "inventory": 200,
       "name": "tv",
       "price": 45,
       "unit": "unidad",
       "__v": 0
   }
}
```

### PUT
```sh
/api/v1/products/:id
```
send `req.params.id` to get a response and `req.body` to update correctly
```json
{
   "name":"platano 2",
   "price":45,
   "unit":"unidad",
   "inventory":200
}
```
json response
```json
{
   "status": "ok",
   "data": {
       "_id": "63c60913e80445a7a5a110d1",
       "inventory": 200,
       "name": "platano 2",
       "price": 45,
       "unit": "unidad",
       "__v": 0
   }
}
```

### DELETE
```sh
/api/v1/products/:id
```
send `req.params.id` to get a response 
```json
{
   "status": "ok",
   "message": "platano 2 has been deleted"
}
```
## t2moduleIV users_endpoints
### GET 
```sh
/api/v1/users
```
```json
{
   "status": "ok",
   "data": [
        {
            "_id": "63cbdffac6f6cfae5bdd067a",
            "firstName": "messi",
            "email": "messi@gmail.com",
            "password": "123",
            "lastName": "test2",
            "__v": 0
        }
   ]
}
```
### POST
 ```sh
 /api/v1/users
```
`req.body` to send 
```json
{
   "email":"prueba@gmail.com",
   "password":"123456",
   "firstName":"juan",
   "lastName":"canqui"
}
```
json response
```json
{
   "status": "ok",
   "dataInserted": {
       "_id": "63cc2740c00d51a8f16d4297",
       "email": "prueba@gmail.com",
       "password": "123456",
       "firstName": "juan",
       "lastName": "canqui",
       "__v": 0
   }
}
```
### GET BY ID
```sh
/api/v1/users/:id
```
send `req.params.id` to get a response 
```json
{
   "status": "ok",
   "data": {
       "_id": "63cc2740c00d51a8f16d4297",
       "email": "locoto@gmail.com",
       "password": "platano123",
       "firstName": "Miguel",
       "lastName": "Picasso",
       "__v": 0
   }
}
```

### PUT
```sh
/api/v1/users/:id
```
send `req.params.id` to get a response and `req.body` to update correctly
```json
{
  "email":"prueba@gmail.com",
  "password":"123456",
  "firstName":"juan",
  "lastName":"canqui"
}
```
json response
```json
{
   "status": "ok",
   "data": {
       "_id": "63cc2740c00d51a8f16d4297",
       "email": "prueba@gmail.com",
       "password": "123456",
       "firstName": "juan",
       "lastName": "canqui",
       "__v": 0
   }
}
```
### DELETE
```sh
/api/v1/products/:id
```
send `req.params.id` to get a response 
```json
{
   "status": "ok",
   "message": "juan has been deleted"
}

```

### AUTHENTICATION ENDPOINTS
### LOGIN


```sh
 /api/v1/auth/login
```
send `req.params.id` to get a response and `req.body` to update correctly
```json
{
 "email":"prueba4@gmail.com",
 "password":"123456"
}

```
json response
```json
{
   "status": "OK",
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDZjOTViMTliOWRhZGJjZWM2YzdmMiIsImVtYWlsIjoicHJ1ZWJhNEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJqdWFuNCIsImxhc3ROYW1lIjoiY2FucXVpNCIsImlhdCI6MTY3NTA0MzgzMSwiZXhwIjoxNjc1MTMwMjMxfQ.PqkSr378edMyGdc-OJj4leYOuO_aDWmrdSlO2Ljd9Zw"
}
```
### REGISTER


```sh
 /api/v1/auth/register
```
send `req.params.id` to get a response and `req.body` to update correctly
```json
{
 "email":"prueba5@gmail.com",
 "password":"123456",
 "firstName":"juan5",
 "lastName":"canqui5"
}


```
json response
```json
{
   "status": "OK",
   "message": "User Created"
}
```
### SHOPPING CART ENDPOINTS
### RUTAS
### POST
```sh
   /api/v1/cart/products 
```
send `req.params.id` to get a response and `req.body` to update correctly
```json
{
 "invoiceNumber": "prueba4@gmail.com",
 "status": " PENDING ",
 "totalAmount": "5",
 "user": "63d6c95b19b9dadbcec6c7f2",
 "products": [
   {
     "productId": "63d6c95b19b9dadbcec6c7f2",
     "quantity": "5",
     "price": "5"
   }
 ]
}


```
json response
```json
{
   "status": "ok",
   "message": "cart found",
   "dataUpdated": {
       "status": "PENDING",
       "_id": "63d70e862267c18b5edf068d",
       "products": [
           {
               "productId": "63d6c95b19b9dadbcec6c7f2",
               "quantity": 5,
               "price": 5,
               "_id": "63d70e862267c18b5edf068e"
           }
                ],
       "invoiceNumber": "prueba4@gmail.com",
       "totalAmount": 5,
       "user": "63d6c95b19b9dadbcec6c7f2",
       "__v": 0
   }
}

```
### DELETE
```sh
  /api/v1/cart/products/:id 
```

json response
```json
	{
   "status": "ok",
   "message": "books have been deleted from the list of carts"
}

```
### POST (PAY)

```sh
  /api/v1/cart/pay/:id 
```

json response
```json
{
   "status": "ok",
   "result": {
 "invoiceNumber": "prueba4@gmail.com",
 "status": "PAID",
 "totalAmount": "5",
 "user": "63d6c95b19b9dadbcec6c7f2",
 "products": [
   {
     "productId": "63d6c95b19b9dadbcec6c7f2",
     "quantity": "5",
     "price": "5"
   }
 ]
},
   "message": "the cart has been paid"

}