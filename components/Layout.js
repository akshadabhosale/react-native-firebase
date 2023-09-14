import { HStack } from "native-base";
import { IconButton,Box,Icon,StatusBar,Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import CustomIconButton from "./CustomIconButton";


const Layout=()=>{
    return <><StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="red.600" />
    <HStack bg="red.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="450">
      <HStack alignItems="center">
        <IconButton icon={<Icon size="md" as={MaterialIcons} name="menu" color="white" />} />
        <Text color="white" fontSize="20" fontWeight="bold">
          Home
        </Text>
      </HStack>

      <HStack>
      <CustomIconButton name="favorite" onPress={callBtnPressed}></CustomIconButton>
      <CustomIconButton name="search" onPress={callBtnPressed}></CustomIconButton>
      <CustomIconButton name="account-circle" onPress={callBtnPressed}></CustomIconButton>

      
      </HStack>
    </HStack>
    </>
}


export default Layout;