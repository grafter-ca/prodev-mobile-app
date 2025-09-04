import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  // 🔎 Search Section
  searchGroup: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
    flexDirection: "column",
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  searchButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  // 🎛 Filter Section
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 16,
  },
  filterContainer: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  // 🏘️ Property Listing Section
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },

  paginationContainer: {
    marginTop: 16,
    marginBottom: 40,
    alignItems: "center",
  },
  showMoreButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#000",
    borderRadius: 24,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
