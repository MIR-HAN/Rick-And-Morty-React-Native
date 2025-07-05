import { StyleSheet } from "react-native";
import Colors from "../theme/colors";

const characterDetailStyles = StyleSheet.create({

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.green,

  },
  name: {
    marginVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
  },

  aliveStatusContainer: {
    backgroundColor: Colors.green,
    borderRadius: 5,
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 40,
    borderWidth: 2,
    borderColor: Colors.white

  },
  deadStatusContainer: {
    backgroundColor: Colors.red,
    borderRadius: 5,
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 40,
    borderWidth: 2,
    borderColor: Colors.white

  },
  status: {
    color: Colors.white,
    margin: 5,
    fontSize: 16,
    fontWeight: "bold"
  },

  sectionTitle: {
    textAlign: "center",
    marginVertical: 10,
    color: Colors.brown
  },

  sectionContainer: {
    margin: 5,

  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5
  },
  infoContainer: {
    backgroundColor: "#e5ded1",
    padding: 10,
    flex: 1
  },
  infoBox: {
    backgroundColor: "#e5ded1",
    padding: 10,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  }

});

export { characterDetailStyles };
