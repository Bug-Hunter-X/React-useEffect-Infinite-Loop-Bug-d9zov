```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect running...');
    // ... some logic
  }, []); // Empty dependency array, runs only once after initial render

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```