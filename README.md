# API

## In nodejs

```javascript
import toggley from 'toggle-js';

const isEnabled = await toggley.isEnabled('featureABC', 'user123'); // true
```

## In browser

```html
<script src="http://toggley.educalleja.es/toggley.js?key=a1234" ></script>
<script>
     const result = await window.Toggley.isEnabled('feature1', 'user123'); // true
</script>
```
