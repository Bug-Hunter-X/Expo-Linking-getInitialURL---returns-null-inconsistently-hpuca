This solution uses `Linking.addEventListener` to listen for URL changes, ensuring that even if `getInitialURL` initially returns null, the deep link URL is captured.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = (url) => {
      setInitialUrl(url);
    };

    Linking.getInitialURL().then(url => {
      if (url) {
          setInitialUrl(url);
      }
    });
    const subscription = Linking.addEventListener('url', handleUrlChange);

    return () => subscription.remove();
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>App launched with URL: {initialUrl}</Text>
      ) : (
        <Text>No initial URL found.</Text>
      )}
    </View>
  );
};

export default App;
```