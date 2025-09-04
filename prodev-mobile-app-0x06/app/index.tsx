import { useRouter } from "expo-router";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>

            {/* Title Section */}
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Find your favorite place here
              </Text>
              <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>
                  The best prices for over 2
                </Text>
                <Text style={styles.titleSubText}>
                  million properties worldwide
                </Text>
              </View>
            </View>

            {/* Buttons Section */}
            <View style={{ paddingHorizontal: 10, marginVertical: 40 }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.buttonPrimary}
                  onPress={() => router.push("/join")}
                >
                  <Text style={{ ...styles.buttonPrimaryText, color: "black" }}>
                    Join here
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonSecondary}
                  onPress={() => router.push("/signin")}
                >
                  <Text style={styles.buttonSecondaryText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonGroupSubText}>
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 20 ,fontSize:18}}
                  onPress={() => router.push("/(home)")}
                >
                  Continue to home <Text className="px-2">→</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
