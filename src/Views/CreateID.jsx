import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StatusBar as StatusMetrics, Text, TouchableHighlight, View } from "react-native";
import WebView from "react-native-webview";
import { useNavigate } from "react-router-native";

export default function CreateID(){

    const navigate = useNavigate();

    return (
        <Fragment>
            <StatusBar />
            <View className="p-3 items-center flex-row justify-between border-b border-[#f0f0f0]" style={{ marginTop: StatusMetrics.currentHeight }}>
                <TouchableHighlight onPress={() => { navigate("/"); }} underlayColor="#fff">
                    <Ionicons name="arrow-back" size={26} color="black" />
                </TouchableHighlight>
                <Text className="text-base">SpaceLabs ID</Text>
            </View>
            <WebView
                source={{ uri: 'https://sapo.pt/' }}
                className="w-full h-full"
            />
        </Fragment>
    );
}