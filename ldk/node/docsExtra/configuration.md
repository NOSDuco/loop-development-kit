# Configuration

The host object provided to the plugin through `Start` provides the plugin with methods it can use for storing configuration.

## Applications

* Storing credentials provided by the user.
* Keeping track of data across restarts.

## Methods

A method for removing the value of a key.

```javascript
configurationDelete(key) => Promise
```

A method for removing the values of all documented keys.

```javascript
configurationDeleteAll() => Promise
```

A method for checking if a value has been set for a key.

```javascript
configurationHasKey(key) => Promise
```

A method for listing all documented keys.

```javascript
configurationKeys() => Promise
```

A method for getting the value of a key.

```javascript
configurationRead(key) => Promise
```

A method for getting the values of all documented keys.

```javascript
configurationReadAll() => Promise
```

A method for setting the value of a key.

```javascript
configurationWrite(key, value) => Promise
```
