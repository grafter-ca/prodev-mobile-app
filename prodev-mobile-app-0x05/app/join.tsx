import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/_join";
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGOGREEN } from "@/constants";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Join() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}>
          {/* Navigation */}
            <View style={styles.iconsection}>
              <Ionicons
                name="arrow-back"
                size={25}
                onPress={() => router.back()}
              />
                <Image source={HEROLOGOGREEN} />
            </View>

          {/* Title */}
          <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Create Your Account</Text>
            <Text style={styles.subText}>Fill in the details below to join us</Text>
          </View>

          {/* Form */}
          <View style={styles.formGroup}>
            <View>
              <Text style={styles.formLabel}>Full Name</Text>
              <TextInput style={styles.formControl} placeholder="Enter your name" />
            </View>

            <View>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput style={styles.formControl} keyboardType="email-address" placeholder="Enter your email" />
            </View>

            <View>
              <Text style={styles.formLabel}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput style={styles.passwordControl} placeholder="Enter password" secureTextEntry />
              </View>
            </View>

            <View>
              <Text style={styles.formLabel}>Confirm Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput style={styles.passwordControl} placeholder="Confirm password" secureTextEntry />
              </View>
            </View>
          </View>

          {/* Join Button */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>

          {/* divider or block */}
          <View style={styles.dividerGroup}>
            <View style={styles.divider}></View>
            <Text style={styles.dividerText}>OR WITH</Text>
            <View style={styles.divider}></View>
          </View>

          {/* Social Buttons */}
          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={GOOGLELOGO} />
              <Text style={styles.secondaryButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <Image source={FACEBOOKLOGO} />
              <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Bottom text */}
          <View style={styles.buttonGroupSubText}>
            <Text style={styles.signupTitleText}>Already have an account? </Text>
            <Text
              style={styles.signupSubTitleText}
              onPress={() => router.push("/signin")}
            >
              Sign in
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
