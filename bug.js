```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run infinitely because it doesn't have a dependency array
    console.log('Effect running...');
    setCount(count + 1);
  }, []); // Missing dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```