import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "@/src/constants/imagePath";
import { verticalScale, moderateScale } from "react-native-size-matters";
import { router } from "expo-router";

const AuthIndex = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navigate_to_welcome = () => {
    router.push("/terms_agree");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      setTimeout(() => {
        navigate_to_welcome();
      }, 3000);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image style={styles.logo} source={imagePath.logo} />
        <Text style={styles.app_name}>AntIntern</Text>
      </View>
      <View style={styles.footer}>
        <>
          {isLoading ? (
            <>
              <ActivityIndicator size={moderateScale(30)} color={"orange"} />
              <Text style={styles.loading_text}>Loading...</Text>
            </>
          ) : (
            <>
              <Text style={styles.from_text}>from</Text>
              <Text style={styles.facebook_text}>AntIntern</Text>
            </>
          )}
        </>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(80),
  },
  header: {},
  body: {
    alignItems: "center",
    justifyContent: "center",
    gap: verticalScale(10),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent: "flex-end",
  },
  from_text: {
    fontSize: moderateScale(14),
    color: "gray",
  },
  facebook_text: {
    fontSize: moderateScale(20),
  },
  logo: {
    resizeMode: "contain",
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(20),
  },
  app_name: {
    fontSize: moderateScale(25),
  },
  loading_text: {
    fontSize: moderateScale(14),
    color: "gray",
    marginTop: verticalScale(10),
    alignItems: "center",
  },
});

export default AuthIndex;
