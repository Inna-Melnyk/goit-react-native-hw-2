import { React, useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Img from "../assets/images/user-photo.jpg";
import { ProfilePost } from "./components/ProfilePost";
import { data } from "./data";

export const PostsScreen = (props) => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.main}>
          <View style={styles.user}>
            <Image source={Img} style={styles.avatar} />
            <View>
              <Text style={{ fontWeight: 700 }}>Natali Romanova</Text>
              <Text>email@example.com</Text>
            </View>
          </View>

          <View>
            {data.map((i) => (
              <ProfilePost
                image={i.image}
                name={i.name}
                comments={i.comments}
                country={i.country}
                likes={i.likes}
                key={i.id}
                location = {i.location}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: { width: "100%", flex: 1 },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  scrollView: {
    // backgroundColor: "pink",
    // marginBottom: 80,
  },

  text: {
    position: "relative",
    padding: 11,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 22,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logout: {
    position: "absolute",
    top: 11,
    right: 11,
  },

  main: {
    marginHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 80,
  },
  avatar: {
    borderRadius: 16,
    marginRight: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },

  footer: {
    backgroundColor: "white",
    width: "100%",
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.3)",
    paddingTop: 12,
    paddingBottom: 22,
  },

  button: {
    width: 70,
    paddingVertical: 13.5,
    paddingHorizontal: 28.5,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
  },
});
