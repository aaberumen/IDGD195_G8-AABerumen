import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableHighlight } from 'react-native';

const getTitle = (title) => {
  return title;
}

const getAuthor = (firstName, lastName) => {
  return firstName + " " + lastName;
}

const BookCard = (props) => {
  return (
    <>
    <Image
          source={{
            uri:'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
     <Text style={styles.text}> {props.title}</Text>
     <Text style={styles.text}> {props.author}</Text>
     <Text style={styles.text}> {props.year}</Text>
    </>
  );
}

export default function App() {
  return (

  <SafeAreaView  style={styles.container}>
      <View style={styles.header}>

      <Text style={styles.h1}>Home</Text>
      <Image
            source={{
              uri:'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 50, height: 50 }}
          />
      </View>
     <ScrollView>
     <View style={styles.quoteCard}>
     <Text style={styles.text}>Daily Quote</Text>
     <Text style={styles.text}>"Be yourself, everyone else is already taken."</Text>
     <Text style={styles.text}>Oscar Wilde, 1983</Text>
     </View>

     <Text style={styles.h2}>Recommended</Text>
    <BookCard title="Maru" author="Jonathan Pageau" year="1850" />
   <BookCard title="Maru" author="Jonathan Pageau" year="1850" />
  <BookCard title="Maru" author="Jonathan Pageau" year="1850" />
   <BookCard title="Maru" author="Jonathan Pageau" year="1850" />
      </ScrollView>
      <StatusBar style="auto" />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:10,
  },
  h1: {
    fontSize:25,
  },
    body: {
      flex: 8,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
  quoteCard: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignSelf: 'center',
    padding:20,
    borderRadius:20,
    borderWidth:3,

  },
    scroll: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  h2: {
    fontSize:20,
    fontWeight:"bold",
    paddingTop:10,
    paddingBottom:20,
  },
text: {
  fontSize:14,
  alignItems: 'center',
  justifyContent: 'center',
},
  logo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
  },
});
