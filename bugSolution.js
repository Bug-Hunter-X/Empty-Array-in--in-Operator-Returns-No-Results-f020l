```javascript
function findDocuments(field, array) {
  if (array === null || array.length === 0) {
    return db.collection('myCollection').find({}); // Return all documents
  } else {
    return db.collection('myCollection').find({ field: { $in: array } });
  }
}
```