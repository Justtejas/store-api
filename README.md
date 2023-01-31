# Store API
A RESTful API to get access to the data in store database.

### Clone the Github repository.
```
git clone https://github.com/Justtejas/store-api.git
```

### To install dependencies 

```
npm install
```

### To run the server

```
npm start
Open your browser and set up localhost:port
```

### Get all items (original limit of items per page = 5)

```
localhost:5000//api/v1/products
```

## Sorting/Searching through API

### By name (Ascending Alphabetically)

```
/api/v1/products?sort=name
```

### By name (Descending Alphabetically)

```
/api/v1/products?sort=-name
```
### By price

```
/api/v1/products?sort=price
```

### Searching By company

```
/api/v1/products?company=ikea
```
### Searching By name (Includes the alphabet)

```
/api/v1/products?name=e
```
### By featured

```
/api/v1/products?featured=false
```

## Common query parameters

```
limit : /api/v1/products?limit=10

page : /api/v1/products?limit=5&page=2

fields : /api/v1/products?fields=price,name

numericFilters : /api/v1/products?numericFilters=price>=40,rating=4
```
