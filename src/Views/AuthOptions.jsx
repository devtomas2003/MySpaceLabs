import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { useNavigate } from "react-router-native";

export default function AuthOptions(){

    const navigate = useNavigate();

    return (
        <View className="bg-primary-slabs flex items-center justify-center w-full h-full">
            <StatusBar />
            <View className="bg-primary-white flex p-4 rounded-lg">
                <Image
                    source={require("../../assets/small-logo.png")}
                    className="w-72 h-20"
                    resizeMode="contain"
                    resizeMethod="resize"
                />
                <Text className="text-xl text-center mt-4 mb-8 font-light text-zinc-700">Bem-vindo ao My SpaceLabs</Text>
                <View className="gap-2">
                    <TouchableHighlight className="bg-primary-slabs p-3 items-center rounded-md" underlayColor="#c43b2f" onPress={() => {}}>
                        <Text className="text-primary-white text-base">Auto Login via Rede</Text>
                    </TouchableHighlight>
                    <TouchableHighlight className="bg-primary-black p-3 items-center rounded-md" underlayColor="#222" onPress={() => {}}>
                        <Text className="text-primary-white text-base">Iniciar Sessão via SpaceLabs ID</Text>
                    </TouchableHighlight>
                    <TouchableHighlight className="border-primary-black border p-3 items-center rounded-md" underlayColor="#f0f0f0" onPress={() => { navigate("/create-id"); }}>
                        <Text className="text-primary-black text-base">Criar SpaceLabs ID</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <Text className="text-primary-white mt-2 text-base">{new Date().getFullYear()} © SpaceLabs</Text>
        </View>
    );
}