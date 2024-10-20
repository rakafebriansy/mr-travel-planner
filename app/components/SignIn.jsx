import { Colors } from "@/constants/Colors";
import { Dimensions, Image, StyleSheet, View, Text } from "react-native";

const { width, height } = Dimensions.get('window');

const SignIn = ({}) => {
  return (
    <View style={styles.body}>
      <Image
        source={require("../../assets/images/login-bg.jpg")}
        style={{
          width: width,
          height: 3*height/5,
        }}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <View style={{ 
          justifyContent:'center',
          gap:5
         }}>
          <Text style={{ 
            fontSize: 25,
            fontFamily:'outfit-bold',
            textAlign: 'center'
          }}>Mr. Travel Planner</Text>
          <Text style={{ 
            fontFamily:'outfit',
            textAlign:'center',
            fontSize:17,
            color: 'gray'
          }}>Temukan petualangan menarikmu selanjutnya dengan sekali klik. Traveling bijak dengan bantuan AI cerdas.</Text>
        </View>
        <View style={styles.button}>
          <Text style={{ 
            color: 'white',
            fontFamily: 'outfit',
            fontSize: 17,
            textAlign: 'center'
           }}>Sign In With Google</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor:'white',
    marginTop: '-10%',
    height:'100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    justifyContent:'space-between'
  },
  image: {
    width: "100%",
    height: 500,
  },
  button: {
    backgroundColor: Colors.primary.background,
    borderRadius: 99,
    padding: 15
  }
});

export default SignIn;
