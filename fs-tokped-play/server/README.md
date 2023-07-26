# Tokopedia Play API

`This API is a back-end service for a Tokopedia Play platform. It uses a MongoDB database to store video, product, and comment data. It utilizes Express.js for request routing, and socket.io for real-time updates of comments.`

## Database Structure

The database consists of three collections, each represented by a Mongoose schema:

- **Video**: Stores details about each video, including a URL image, a thumbnail, and a unique video ID.

- **Product**: Stores details about products associated with a video, such as a link to the product, the product's title, its price, and a reference to the associated video ID.

- **Comment**: Stores comments made on a video. Each comment includes a username, the comment text, a timestamp of when the comment was made, and a reference to the associated video ID.

## API Structure

`The API is a RESTful API with endpoints for creating, retrieving, updating, and deleting Videos, Products, and Comments.`

## API Request and Response

### Videos

**GET /videos**
`Get all videos.`

**Response**

```
[
    {
        "urlImage": "string",
        "thumbnail": "string",
        "_id": "ObjectId",
    },
    ...
]
```

**POST /videos**
`Create a new video.`

**Request**

```
{
    "urlImage": "string",
    "thumbnail": "string",
}
```

**Response**

```
{
    "message": "Success"
}
```

**PUT /videos/:id**
`Updates a video.`

**Request**

```
{
    "urlImage": "string",
    "thumbnail": "string",
}
```

**Response**

```
{
    "message": "Success",
    "video": {
        "urlImage": "string",
        "thumbnail": "string",
        "_id": "ObjectId",
    }
}
```

**DELETE /videos/:id**
`Deletes a video.`

**Response**

```
{
    "message": "Success"
}
```

### Products

**GET /products/:videoID**
`Gets all products associated with a video.`

**Response**

```
[
    {
        "linkProduct": "string",
        "title": "string",
        "price": 0,
        "videoID": "ObjectId",
    },
    ...
]
```

**POST /products**
`Creates a new product.`

**Request**

```
{
    "linkProduct": "string",
    "title": "string",
    "price": 0,
    "videoID": "ObjectId",
}
```

**Response**

```
{
    "message": "Success"
}
```

**PUT /products/:id**
`Updates a product.`

**Request**

```
{
    "linkProduct": "string",
    "title": "string",
    "price": 0,
    "videoID": "ObjectId",
}
```

**Response**

```
{
    "message": "Success",
    "product": {
        "linkProduct": "string",
        "title": "string",
        "price": 0,
        "videoID": "ObjectId",
    }
}
```

**DELETE /products/:id**
`Deletes a product.`

**Response**

```
{
    "message": "Success"
}
```

### Comments

**GET /comments/:videoID**
`Gets all comments for a video.`

**Response**

```
[
    {
        "username": "string",
        "comment": "string",
        "timestamp": "date",
        "videoID": "ObjectId",
    },
    ...
]
```

**POST /comments**
`Creates a new comment.`

**Request**

```
{
    "username": "string",
    "comment": "string",
    "videoID": "ObjectId",
}
```

**Response**

```
{
    "message": "Success"
}
```

**PUT /comments/:id**
`Updates a comment.`

**Request**

```
{
    "username": "string",
    "comment": "string",
}
```

**Response**

```
{
    "message": "Success",
    "comment": {
        "username": "string",
        "comment": "string",
        "timestamp": "date",
        "videoID": "ObjectId",
    }
}
```

**DELETE /comments/:id**
`Deletes a comment.`

**Response**

```
{
    "message": "Success"
}
```

## How to Run Locally

Follow these steps to run this API locally:

1. Clone this repository to your local machine.
2. Navigate into the project directory:

```
cd project-directory
```

3. Install the necessary dependencies:

```
npm install
```

4. Setup environment variables by creating a .env file in the root directory. It should contain the following:

```
PORT=5000
MONGO_URL=your_mongodb_url
```

5. Replace your_mongodb_url with your actual MongoDB connection URL.
6. Run the server:

```
npm start
```

The server should now be running on:

```
http://localhost:5000.
```
