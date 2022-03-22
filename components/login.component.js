import { View } from 'native-base';
import React, { Component } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.log(screenWidth)
export class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    props: {
        backButtonEnabled: boolean,
        titleHeader: string,
        description: string,
    };
    render() {
        let imgSource = this.props.imgSource
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={require("../assets/logo.png")}
                />
                {this.props.backButtonEnabled ?
                    <TouchableOpacity style={styles.backButtonContainer}
                        onPress={() => this.props.navigation.navigate("Login")}

                    >
                        <Ionicons
                            name="arrow-back"
                            size={20}
                            color={"#67308c"}
                            style={{ paddingLeft: screenWidth * 0.042 }}
                        />
                        <Text
                            style={{ color: "#67308c", fontWeight: 'bold', fontSize: screenWidth * 0.042 }}
                        >
                            Back
                        </Text>
                    </TouchableOpacity>
                    : null
                }
                {this.props.titleHeader != null ? <Text style={styles.titleHeaderStyle}>{this.props.titleHeader}</Text> : null}
                {this.props.description != null ? <Text style={styles.descriptionStyle}>{this.props.description}</Text> : null}
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    imageStyle: {
        alignSelf: 'center',
        resizeMode: 'contain',
        height: screenWidth * 0.7,
        width: screenWidth * 0.8,
    },
    titleHeaderStyle: {
        fontWeight: 'bold',
        fontSize: screenWidth * 0.07,
        paddingLeft: screenWidth * 0.04,
        marginTop: screenWidth * 0.055
    },
    descriptionStyle: {
        fontSize: screenWidth * 0.037,
        paddingLeft: screenWidth * 0.04,
    },
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: screenWidth * 0.04,
        marginTop: screenWidth * 0.1,
        width: screenWidth * 0.24,
        height: screenWidth * 0.1,
        backgroundColor: "rgba(103, 48, 140, 0.1)",
        // borderRadius: screenWidth * 0.021,

    }
})

