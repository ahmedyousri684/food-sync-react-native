import React, { Component } from "react";
import {
    Container,
    Text,
    View,
    Button,
    Toast,
} from "native-base";
import {
    StyleSheet,
    Image,
    ActivityIndicator,
    Dimensions,
    TextInput,
} from "react-native";
import { Entypo } from '@expo/vector-icons';

import { LoginComponent } from "../components/login.component";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            error: "",
            showPassword: true,
            loading: false,
        };
    }


    toggleSwitch() {
        this.setState({
            showPassword: !this.state.showPassword,
        });
    }

    // handleLogin = async () => {
    //     setUser(null);
    //     this.setState({ loading: true });
    //     // TODO: check with backend API
    //     const user = await login(this.state);
    //     if (user instanceof Error) {
    //         this.setState({ error: "Invalid Credentials" });
    //         this.setState({ loading: false });
    //         return;
    //     }
    //     await setUser(user);
    //     const units = await listUnitsAndSubUnits(user.UserId);
    //     console.log("New", units)
    //     if (units instanceof Error) {
    //         Toast.show({
    //             text: "Error Happened",
    //         });
    //         this.setState({ loading: false });
    //     }
    //     await setUserUnitsSubUnits(units);

    //     this.setState({ loading: false });

    //     this.props.navigation.reset({
    //         index: 0,
    //         routes: [{ name: "Home" }],
    //     });
    // };
    renderWelcome = () => {
        return <Text style={styles.text}></Text>;
    };

    render() {
        const { navigation } = this.props;
        return (
            <KeyboardAwareScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={styles.main}>
                    <LoginComponent
                        navigation={navigation}
                        backButtonEnabled={false}
                        titleHeader={"Login to Food Sync"}
                    />
                    <View
                        style={{ backgroundColor: "white", paddingTop: screenWidth * 0.07 }}
                    >
                        <TextInput
                            value={this.state.username}
                            onChangeText={(text) => this.setState({ username: text })}
                            placeholder={"Username"}
                            placeholderTextColor="#828282"
                            style={styles.input}
                        />
                        <View style={styles.passwordContainer}>
                            <TextInput
                                secure
                                value={this.state.password}
                                onChangeText={(text) => this.setState({ password: text })}
                                placeholder={"Password"}
                                placeholderTextColor="#828282"
                                secureTextEntry={this.state.showPassword}
                                style={{ flex: 1 }}
                            />
                            <Entypo
                                size={24}
                                name={
                                    this.state.showPassword ? "eye" : "eye-with-line"
                                }
                                onPress={() => this.toggleSwitch()}
                                style={styles.showHideIcon}
                            />
                        </View>
                        {this.state.error == "Invalid Credentials" ? (
                            <Text style={{ color: "red", padding: 5, textAlign: "center" }}>
                                The username or password you have entered is invalid.
                            </Text>
                        ) : null}

                        {this.state.loading ? (
                            <ActivityIndicator
                                color={"#67308c"}
                                size={"large"}
                                style={{ margin: 20, alignSelf: "center" }}
                            />
                        ) : (
                            <Button
                                primary
                                block
                                style={styles.button}
                                onPress={this.handleLogin}
                            >
                                <Text style={{ fontWeight: "bold" }}>Login</Text>
                            </Button>
                        )}
                        <Button
                            style={{ backgroundColor: 'white' }}
                            onPress={() => this.props.navigation.navigate("ForgetPassword")}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "black",
                                    paddingBottom: 8,
                                }}
                            >
                                Forgot password?
                            </Text>
                        </Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>

        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "green",
    },
    test: {
        fontWeight: "500",
    },
    input: {
        alignSelf: "center",
        height: screenWidth * 0.14,
        width: screenWidth * 0.91,
        margin: 7,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#e6e6e6",
        backgroundColor: "#fcfcfd",
    },
    button: {
        alignSelf: "center",
        width: screenWidth * 0.91,
        height: screenWidth * 0.14,
        backgroundColor: "#F4891F",
        borderRadius: 8,
    },
    text: {
        color: "gray",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.5,
        lineHeight: 49,
        textAlign: "center",
    },
    Item: {
        alignSelf: "center",
    },
    passwordContainer: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        height: screenWidth * 0.14,
        width: screenWidth * 0.91,
        margin: 7,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#e6e6e6",
        backgroundColor: "#fcfcfd",
    },
    showHideIcon: {
        color: "black",
    },
});
