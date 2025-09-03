import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from "@/constants";
import { styles } from "@/styles/_join";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Sign() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            {/* Navigation */}
            <View style={styles.iconsection}>
              <Ionicons
                name="arrow-back"
                size={25}
                onPress={() => router.back()}
              />
              <Image source={HEROLOGOGREEN} />
            </View>

            {/* Headings */}
            <View style={styles.titleTextGroup}>
              <Text style={styles.titleText}>Sign in to your Account</Text>
              <Text style={styles.subText}>
                Enter your email and password to sign in.
              </Text>
            </View>

            {/* Form */}
            <View style={styles.formGroup}>
              {/* Email */}
              <View>
                <Text style={styles.formLabel}>Email</Text>
                <TextInput
                  keyboardType="email-address"
                  style={styles.formControl}
                />
              </View>

              {/* Password */}
              <View>
                <Text style={styles.formLabel}>Password</Text>
                <View style={styles.passwordControl}>
                  <TextInput style={styles.formControl} secureTextEntry />
                </View>
              </View>

              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </View>

            {/* Submit */}
            <TouchableOpacity>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerGroup}>
              <View style={styles.divider}></View>
              <Text style={styles.dividerText}>OR WITH</Text>
              <View style={styles.divider}></View>
            </View>

            {/* Social logins */}
            <View style={styles.socialMediaButtonGroup}>
              <TouchableOpacity>
                <View style={styles.socialMediaButton}>
                  <Image source={GOOGLELOGO} style={{marginRight:5}}/>
                  <Text style={styles.socialMediaButtonText}>
                    Continue with Google
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.socialMediaButton}>
                  <Image source={FACEBOOKLOGO} style={{marginRight:5}}/>
                  <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Join prompt */}
            <View style={{marginVertical:20}}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity  onPress={() => router.push("/join")}>
                <Text style={{color:"green", fontWeight:600,fontSize:18}}>Join now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
