import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Dimensions } from "react-native";
import { Icon, Button } from "react-native-elements";
// import { Button } from "react-native-elements/dist/buttons/Button";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SuccessBox_Return from "./SuccessBox_Return";

const width = Dimensions.get("screen").width;

const Success_Return = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.success}> Success </Text>
      </View>
      <View style={styles.subheading}>
        <Text style={styles.borrow}> Return Details </Text>
      </View>
      <SuccessBox_Return
        stype={route.params.stype}
        sdata={route.params.sdata}
      />
      <View style={styles.homebutton}>
        <Button
          title="Home"
          type="solid"
          icon={<Icon name="home" type="feather" size={15} color="black" />}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "teal",
  },
  heading: {
    flex: 0.1,
    padding: 25, // make it 35 after removing top shit saying Success
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  success: {
    fontSize: RFPercentage(5),
    color: `black`,
    fontWeight: "bold",
  },
  subheading: {
    flex: 0.1,
    padding: 20,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  borrow: {
    fontSize: RFPercentage(4),
    color: `#ffdead`,
    fontWeight: "bold",
  },
  homebutton: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    // backgroundColor: "red",
  },
});

export default Success_Return;