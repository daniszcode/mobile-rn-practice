import React, {useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import {styles} from './styles';

// const STYLES = ['default', 'dark-content', 'light-content'] as const;

export default function StatusComponent() {
  const [hidden, setHidden] = useState(false);
  //   const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
  // STYLES[0],
  //   );

  //   const changeStatusBarStyle = () => {
  //     const styleId = STYLES.indexOf(statusBarStyle) + 1;
  //     if (styleId === STYLES.length) {
  //       setStatusBarStyle(STYLES[0]);
  //     } else {
  //       setStatusBarStyle(STYLES[styleId]);
  //     }
  //   };

  const changeStatusBarVisibility = () => setHidden(!hidden);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Pagar" onPress={changeStatusBarVisibility} />
      </View>
    </SafeAreaView>
  );
}
