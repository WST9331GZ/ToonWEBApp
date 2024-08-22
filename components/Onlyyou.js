import React from "react";
import { Image, Text, View } from "react-native";

export default function Onlyyou() {
  return (
    <View style={{ flex: 1,backgroundColor:"black" }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 20 / 10 }}
          source={require("../assets/โปรเจคแอพ/ปก2.jpg")}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20,color:"white" }}>เว็บตูนของฉัน</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/โปรเจคแอพ/ชีวิตใหม่ในตระกูลมือสังหาร.jpg")}
          />
          <Text style={{ marginTop: 2,color:"white" }}>ชีวิตใหม่ในตระ...</Text>
          <Text style={{ marginTop: 2, color:"#808080" }}>อ่านทันแล้ว</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/โปรเจคแอพ/jungle juice.jpg")}
          />
          <Text style={{ marginTop: 2,color:"white" }}>Jungle Juice</Text>
          <Text style={{ marginTop: 2, color:"#808080" }}>อ่านทันแล้ว</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/โปรเจคแอพ/หนู น้อย ทรราช.jpg")}
          />
          <Text style={{ marginTop: 2,color:"white" }}>หนูน้อยทรราช</Text>
          <Text style={{ marginTop: 2, color:"#808080" }}>อ่านทันแล้ว</Text>
        </View>
      </View>
    </View>
  );
}