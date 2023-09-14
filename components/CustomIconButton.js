import { Pressable,Text } from "react-native";
import { IconButton,Box,Icon,StatusBar, } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const CustomIconButton=({name,onPress})=>{
    return <Pressable onPress={onPress}>

    <IconButton icon={<Icon as={MaterialIcons} name={name} size="md" color="white" />}  />

    </Pressable>
    
}

export default CustomIconButton;