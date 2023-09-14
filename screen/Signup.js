import { View, ImageBackground, StyleSheet } from "react-native";
import {
  Box,
  Center,
  Text,
  FormControl,
  VStack,
  Input,
  KeyboardAvoidingView,
  Pressable,
  Icon,
  Button,
} from "native-base";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from 'yup';

const image = {
  uri: "https://w0.peakpx.com/wallpaper/51/383/HD-wallpaper-background-blur-dark-galaxy-lock-pink-screen.jpg",
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Please enter email'),
  password:Yup.string().min(3, 'Password should be more than 2 characters').required('Please enter password'),
  confirmPassword:Yup.string().min(3, 'Password should be more than 2 characters').required('Please enter password').oneOf([Yup.ref("password"), null], "Password must match")
 
});

export const Signup = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  toggleShowConfirmPassword=()=>{
    setShowConfirmPassword(!showConfirmPassword)
  }

  submitAction = () => {

  };


  navigateToLoginPage=()=>{
    navigation.navigate('login')
  }




  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Center>
          <KeyboardAvoidingView
            h={{
              base: "400px",
              lg: "auto",
            }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ alignItems: "center" }}>
              <Text color="white" fontSize="30" fontWeight="bold">
                Login
              </Text>
              <Text color="white" fontSize="15" fontWeight="bold" mt="4">
                Please login to continue
              </Text>

              <Formik
                initialValues={{ email: "",password:""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={loginSchema}
              >
                {({ handleChange, handleBlur, handleSubmit, values,errors, touched,isValid }) => (
                  <Box
                    border="1"
                    borderRadius="md"
                    backgroundColor="#ffff"
                    mt="3"
                    pb="8"
                    pt="4"
                    width="380"
                  >
                    <VStack width="95%" mx="8" space="4" maxW="300px">
                      <View>
                        <FormControl
                          isRequired
                          isInvalid={errors.email && touched.email}
                        >
                          <FormControl.Label
                            _text={{
                              bold: true,
                              paddingRight: 1,
                            }}
                          >
                            Email
                          </FormControl.Label>
                          <Input
                            placeholder="abc@gmail.com"
                            onChangeText={handleChange('email')}
                            variant="rounded"
                            value={values.email}
                            onBlur={handleBlur('email')}

                          />

                          <FormControl.ErrorMessage>
                            {errors?.email}{" "}
                          </FormControl.ErrorMessage>
                        </FormControl>
                      </View>
                      <View>
                        <FormControl
                          isRequired
                          isInvalid={errors?.password && touched?.password}
                        >
                          <FormControl.Label
                            _text={{
                              bold: true,
                              paddingRight: 1,
                            }}
                          >
                            Password
                          </FormControl.Label>
                          <Input
                            placeholder="********"
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            type={showPassword ? "text" : "password"}
                            variant="rounded"
                            InputRightElement={
                              <Pressable
                                onPress={() => setShowPassword(!showPassword)}
                              >
                                <Icon
                                  as={
                                    <MaterialIcons
                                      name={
                                        showPassword
                                          ? "visibility"
                                          : "visibility-off"
                                      }
                                    />
                                  }
                                  size={5}
                                  mr="2"
                                  color="muted.400"
                                />
                              </Pressable>
                            }
                          />
                          <FormControl.ErrorMessage>
                            {errors?.password}{" "}
                          </FormControl.ErrorMessage>
                        </FormControl>
                      </View>

                      <View>
                        <FormControl
                          isRequired
                          isInvalid={errors.confirmPassword && touched.confirmPassword}
                        >
                          <FormControl.Label
                            _text={{
                              bold: true,
                              paddingRight: 1,
                            }}
                          >
                            Confirm Password
                          </FormControl.Label>

                          <Input
                            placeholder="********"
                            value={values.confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            type={showConfirmPassword ? "text" : "password"}
                            variant="rounded"
                            InputRightElement={
                              <Pressable
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                <Icon
                                  as={
                                    <MaterialIcons
                                      name={
                                        showPassword
                                          ? "visibility"
                                          : "visibility-off"
                                      }
                                    />
                                  }
                                  size={5}
                                  mr="2"
                                  color="muted.400"
                                />
                              </Pressable>
                            }
                          />
                       
                          <FormControl.ErrorMessage>
                            {errors?.confirmPassword}{" "}
                          </FormControl.ErrorMessage>
                        </FormControl>
                      </View>
                      <Button
                        onPress={handleSubmit}
                        colorScheme="secondary"
                        mt="6"
                        size="lg"
                        isDisabled={!isValid}
                      >
                        Signup
                      </Button>

                    </VStack>
                  </Box>
                )}
              </Formik>
              <Text color="white" fontSize="15" fontWeight="bold" mt="4">
                Already have account
              </Text>
              <Pressable onPress={()=>{navigateToLoginPage()}}>
              <Text color="white" fontSize="18" fontWeight="bold" mt="2">
                Log In
              </Text>
              </Pressable>


            </View>
          </KeyboardAvoidingView>
        </Center>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
});
