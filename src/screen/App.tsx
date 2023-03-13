/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {styles} from './styles';
import {Loan} from '../Loan/Loan';
import StatusComponent from '../screen/components/StatusBar/statusBar';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const teste = new Loan(
  '123',
  'Auto',
  new Date(2022, 4, 15),
  new Date(2022, 4, 15),
  new Date(2022, 4, 15),
  [],
  52,
);
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            <Text style={styles.highlight}>App.tsx {teste.id}</Text>
          </Section>
          <Section title="Step One">
            <Text style={styles.sectionTitle}>Loan {teste.type}</Text>
          </Section>
          <View style={styles.container}>
            <Text style={styles.title}>Status do Boleto</Text>
          </View>
          <StatusComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
