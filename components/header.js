import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
    StatusBar,
    SafeAreaView,
} from "react-native";
import { View } from "native-base";
// import { HEADER_MARGIN } from "../constants";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export class HeaderComponent extends React.Component<{
    leftComponent: any,
    centerComponent: any,
    rightComponent: any,
    hasMenu: Boolean,
}> {
    static defaultProps = {
        hasMenu: true,
    };

    render() {
        return (
            <SafeAreaView style={styles.header}>
                <StatusBar backgroundColor="#F4891F" />
                {this.props.leftComponent && (
                    <View style={styles.leftComponent}>{this.props.leftComponent}</View>
                )}
                {this.props.centerComponent && (
                    <View style={styles.centerComponent}>
                        {this.props.centerComponent}
                    </View>
                )}
                {this.props.rightComponent ? (
                    <View style={styles.rightComponent}>{this.props.rightComponent}</View>
                ) : (
                    <TouchableOpacity
                        style={styles.rightComponent}
                        onPress={() => {
                            this.props.navigation.navigate("Settings");
                        }}
                    >
                        {this.props.hasMenu && (
                            <Image source={require("../assets/user-img.png")} />
                        )}
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        // position: "absolute",
        top: 0,
        width: screenWidth,
        height: screenWidth * 0.2,
        backgroundColor: "#F4891F",
        flexDirection: "row",
        paddingHorizontal: "5%",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rightComponent: {},
    leftComponent: {
        flex: 1,
    },
    centerComponent: {
        flex: 1,
    },
});
