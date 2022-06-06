import { StatusBar } from 'expo-status-bar';
import react, {useState} from 'react';
import { StyleSheet, Text, View , TextInput ,TouchableOpacity , ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Searchbar } from 'react-native-paper';



export default function App() {
  
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
  const [ categoryIndex , setCategoryIndex ] = useState(0)
  
  
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.scndContainer}>
        
        <Text style={styles.mainTxt}>Welcome To</Text>
        <Text style={styles.mainTxt1}>Book-Shop</Text>

        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                              {/* SearchBar */}

        <View style={{flexDirection: "row" , marginTop: "8%"}}>
          <Searchbar
            placeholder="Search"
            style={styles.searchBar}
          />
          <TouchableOpacity style={styles.filterBtn}>
            <Icon name="sort" size={28} color={"#fff"}/>
          </TouchableOpacity>
        </View>
        
        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                              {/* Categories */}

        <View style={styles.categoryContainer}>
          {      
            categories.map(( item , index) => {
              return(
                <TouchableOpacity key={index} onPress={() => setCategoryIndex(index) }>  
                  <Text style={[styles.categoryTxt , categoryIndex == index && styles.categoryTxtSelected  ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
          <View style={{borderBottomColor: "#000" , borderBottomWidth: 1}}></View>
        </View>







      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: "5%",
  },
  scndContainer: {
    paddingTop: 35,
  },
  mainTxt: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 5
  },
  mainTxt1: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#02c77b",
    lineHeight: 30
  },
  searchBar: {
    paddingLeft:3 ,
    fontSize: 16, 
    width: "85%",
    backgroundColor: "#f0f0f0",
    borderRadius: 8

  },
  filterBtn: {
    backgroundColor: "#02c77b" , 
    width: 40 , 
    alignItems: "center", 
    justifyContent: "center",
    borderRadius: 8,
    marginLeft: "3%",
    borderColor: "black",
    elevation: 15,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between"
  },
  categoryTxt: {
    fontSize: 14,
    fontWeight: "bold",
    color: "grey"
  },
  categoryTxtSelected: {
    color: "#02c77b",
    borderColor: "#02c77b",
    paddingBottom: 5,
    borderBottomWidth: 2,
  },
});
















  {/* <Icon name="search-outline" size={22} color="#b3b3b3" style={{paddingTop:10}} />         */}
{/* <View style={styles.SearchBar} > */}
  {/* <TextInput
    style={{
      paddingLeft:3 ,
      fontSize: 16, 
      width: "90%" , 
      height: 43, 
      backgroundColor: "yellow",
      paddingVertical: 5

    }}
    placeholder="Search"
    // value={name}
    // onChangeText={text => setName(text)}
  /> */}
{/* </View> */}