import React from "react";
import { Image, Text, View } from "react-native";

export default function Onlyyou1() {
  return (
    <View style={{ flex: 1 ,padding: 10,justifyContent:'space-around'}}>
        
        <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20,color:"white" }}>
          ถ้าชอบ ชีวิตใหม่ในตระกูลมือสังหาร ขอแนะนำ
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View  style={{ flex : 0 , flexDirection : 'row',justifyContent:'space-between'}}>  
         <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/โปรเจคแอพ/ชีวิตใหม่ในตระกูลมือสังหาร.jpg")}
          />
          <Text style={{ marginTop: 2,color:"white" }}>ชีวิตใหม่ในตระ...</Text>
          
         </View>

         <View style={{ alignItems: "center",marginLeft: 30}}>
         <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/โปรเจคแอพ/jungle juice.jpg")}
          />
          <Text style={{ marginTop: 2,color:"white" }}>Jungle Juice</Text>
         </View>

         <View style={{ alignItems: "center",marginLeft: 30}}>
         <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/โปรเจคแอพ/หนู น้อย ทรราช.jpg")}
          />
          <Text style={{ marginTop: 2,color:"white" }}>หนูน้อยทรราช</Text>
          
        </View>

        
     </View>
        <View  style={{ flex : 0 , flexDirection : 'row',justifyContent:'space-between'}}>  
         <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/โปรเจคแอพ/เปลี่ยนบทร้ายใหเป็นบทรัก.jpg")}
          />
          <Text style={{ marginTop: 2,color:"white" }}>เปลี่ยนบทร้ายให้..</Text>
          
         </View>

         <View style={{ alignItems: "center",marginLeft: 30}}>
         <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/โปรเจคแอพ/บุตรสาวของดยุ.jpg")}
          />
          <Text style={{ marginTop: 2,color:"white" }}>บุตรสาวของดยุ</Text>
         </View>

         <View style={{ alignItems: "center",marginLeft: 30}}>
         <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/โปรเจคแอพ/จักพรรดิคลั่งรัก.jpg")}
          />
          <Text style={{ marginTop: 2,color:"white" }}>จักพรรดิคลั่งรัก</Text>
          
        </View>

        
     </View>
    </View>
    </View>
  );
}