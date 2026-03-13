# Web API Practice

## APIs Used

For this practice, the public testing API **DummyJSON** was used.

Base URL: https://dummyjson.com

### 1. Get All Posts

**Request**

```
GET /posts
```

**Example**

```
GET https://dummyjson.com/posts
```

**Response**

Status: `200 OK`

Returns a list of posts.

---

### 2. Get Post by ID

**Request**

```
GET /posts/{id}
```

Example:

```
GET https://dummyjson.com/posts/1
```

**Response**

Status: `200 OK`

Returns a single post object.

---

### 3. Create Post

**Request**

```
POST /posts/add
```

Example:

```
POST https://dummyjson.com/posts/add
```

Body

```json
{
  "title": "test",
  "body": "hello world",
  "userId": 1
}
```

Response: `201 Created`

---

### 4. Update Post

**Request**

```
PATCH /posts/{id}
```

Example

```
PATCH https://dummyjson.com/posts/1
```

Body

```json
{
  "title": "I think I should shift to the moon"
}
```

Response: `200 OK`

Updates selected fields.

---

### 5. Delete Post

**Request**

```
DELETE /posts/{id}
```

Example

```
DELETE https://dummyjson.com/posts/1
```

Response: `200 OK`

Marks the post as deleted.

---

# What Was Tested

The following scenarios were tested:

### Successful Requests

* Fetch all posts
* Fetch a single post
* Create a new post
* Update a post using PATCH
* Delete a post

### Error Scenarios

* Request with invalid post ID
* Missing required fields
* Empty request body
* Wrong HTTP method

---

# Errors Observed

### 1. Invalid Post ID

Tested with:

```
GET /posts/11111111
PATCH /posts/11111111
DELETE /posts/11111111
```

Response:

Status: `404 Not Found`

```json
{
  "message": "Post with id '11111111' not found"
}
```

Observation:

The API correctly returns **404 when a resource does not exist**.

---

### 2. Missing Required Field in POST

Request:

```json
{
  "title": "test"
}
```

Response:

Status: `400 Bad Request`

```json
{
  "message": "User id is required"
}
```

Observation:

The API validates input and requires **userId** to create a post.

---

### 3. Empty Request Body

Request:

```json
{}
```

Response:

Status: `400 Bad Request`

```json
{
  "message": "User id is required"
}
```

Observation:

The API requires **userId** even if other fields are empty.

---

### 4. Wrong HTTP Method

Example:

```
POST /posts/1
```

Response:

Status: `404 Not Found`

```
Cannot POST /posts/1
```

Observation:

The endpoint only supports specific HTTP methods.

---

### 5. Invalid Data During Update

When sending incorrect values in PATCH:

* The API returned `200 OK`
* But the value was not updated.

Observation:

The API does not strictly validate update payloads.

---

# Learnings

Through this exercise the following concepts were learned:

* How REST APIs use different HTTP methods.
* How status codes indicate request success or failure.
* Status codes: `200`, `201`, `500`, `400`, and `404`.
* Importance of request validation.
* Testing APIs using Postman collections.
* How APIs respond to invalid inputs.

---

# Tools Used

* Postman
* DummyJSON API
* REST API concepts
