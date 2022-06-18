import { Text, StyleSheet } from 'react-native';
import { Platform } from 'react-native-web';



function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}
export default Title;


const styles= StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 0, android: 2}),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})