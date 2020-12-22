import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import * as roomActions from "../../store/actions/reservations";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import RoomList from "../HotelUicomponents/hotelList";
import CustomButton from "../HotelUicomponents/CuttomButton";

const AvailableListScreen = (props) => {
  const rooms = useSelector((state) => state.rooms.allRooms);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reservations);
  const CHECKIN = props.route.params.CHECKIN;
  const CHECKOUT = props.route.params.CHECKOUT;

  const SUBTOTAL = cart.subTotal;
  const VAT = parseFloat(cart.subTotal * 0.075).toFixed(2);
  const CONSUMPTION = parseFloat(cart.subTotal * 0.005).toFixed(2);
  const TOTALAMOUNT = parseFloat(
    cart.subTotal + (cart.subTotal * 0.075) + (cart.subTotal * 0.005)
  ).toFixed(2);
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <View>
            <RoomList
              title={itemData.item.title}
              price={itemData.item.price}
              image={itemData.item.imageUrl}
              quantity={itemData.item.quantity}
              crt={cart}
              onAddRoom={() =>
                dispatch(roomActions.makeReservation(itemData.item))
              }
              onRemoveRoom={() =>
                dispatch(roomActions.removeReservation(itemData.item.id))
              }
            />
          </View>
        )}
      />
      <View style={styles.bookDet}>
        <View style={{ width: "90%", alignSelf: "center", marginBottom: 20 }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              marginBottom: 10,
              alignSelf: "center",
            }}
          >
            Booking Details
          </Text>
          <Image
            source={require("../../assets/image/rm1.jpg")}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={{ color: Colors.third }}>
            * Dual adult occupancy incurs additional N5,000
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: "#f2f2f2",
              marginBottom: 15,
              marginTop: 15,
            }}
          ></View>

          <View>
            <View style={styles.opt}>
              <Text style={styles.textBold}>Check In</Text>
              <Text style={styles.textBold}>Check Out</Text>
            </View>
            <View>
              <View style={styles.opt}>
                <Text style={styles.textBold2}>{CHECKIN.toUTCString().slice(0, 17)}</Text>
                <Text style={styles.textBold2}>{CHECKOUT.toUTCString().slice(0, 17)}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#f2f2f2",
              marginBottom: 15,
              marginTop: 15,
            }}
          ></View>

          <View style={styles.opt}>
            <Text style={styles.textBold2}>Subtotal</Text>
            <Text style={styles.textBold2}>N{SUBTOTAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>
          </View>
          <View style={styles.opt}>
            <Text style={styles.textBold2}>VAT(7.5%)</Text>
            <Text style={styles.textBold2}>N{VAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>
          </View>
          <View style={styles.opt}>
            <Text style={styles.textBold2}>Consumption Tax(5%)</Text>
            <Text style={styles.textBold2}>N{CONSUMPTION.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>
          </View>
          <View style={styles.opt}>
            <Text style={styles.textBold}>TOTAL COST</Text>
            <Text style={{ ...styles.textBold, color: Colors.accent }}>
              N{TOTALAMOUNT.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
            </Text>
          </View>
          <CustomButton
            btnTitle="Make Payment"
            onPress={() =>
              props.navigation.navigate("Reservation", {
                total: TOTALAMOUNT.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
                sub: SUBTOTAL.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
                vat: VAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
                consumption: CONSUMPTION.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
                checkin: CHECKIN,
                checkout: CHECKOUT,
              })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AvailableListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  bookDet: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 30,
  },
  image: {
    height: 200,
    width: "100%",
    marginTop: 4,
    marginBottom: 15,
  },
  opt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  textBold: { fontWeight: "bold", color: Colors.grey, fontSize: 16 },
  textBold2: { fontWeight: "normal", color: Colors.grey, fontSize: 15 },
});
