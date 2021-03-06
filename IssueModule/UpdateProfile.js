import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

import firebase from "../firebase";

var userDatabase = firebase.firestore().collection("Users");
var vendingMachineDatabase = firebase.firestore().collection("Vending-Machine");

const UpdateProfile = ({ navigation }) => {
  const ldapCurrentUser = firebase
    .auth()
    .currentUser.email.toString()
    .split("@")[0];

  const [residence, setResidence] = useState("");
  const [phone, setPhone] = useState("");
  const [thing1, setThing1] = useState("");
  const [thing2, setThing2] = useState("");
  const [thing3, setThing3] = useState("");

  async function updateProfileItems() {

    await userDatabase.doc(ldapCurrentUser).update({
      Phone_Number: phone,
      Residence: residence
    });

    return await navigation.navigate("Profile");
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={{ padding: 10 }}>
          <TextInput
            label="Residence"
            mode="outlined"
            value={residence}
            onChangeText={residence => setResidence(residence)}
          />
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            label="Phone No."
            mode="outlined"
            value={phone}
            onChangeText={phone => setPhone(phone)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="update"
          mode="contained"
          onPress={updateProfileItems}
          color="#F3A916"
        >
          Update
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center"
  },
  infoContainer: {
    top: 20,
    justifyContent: "center",
    alignContent: "center",
    width: "85%",
    alignSelf: "center"
  },
  buttonContainer: {
    top: 100,
    width: "50%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "red",
    alignSelf: "center"
  }
});

export default UpdateProfile;
