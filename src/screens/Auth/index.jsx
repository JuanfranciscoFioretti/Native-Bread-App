import React, { useState } from "react";

import { View, TextInput, Button, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from "react-native";

import { THEME } from "../../constants/theme";

import { styles } from "./styles";

const Auth = ({ navigaton }) => {
    
    const [ isLogin, setIsLogin] = useState(true);

    const title = isLogin ? 'Login' : 'Register';

    const message = isLogin ? 'Don\'t have an account?' : 'Already have an account?';

    const messageButton = isLogin ? 'Login' : 'Register';

    return (
        <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior={ Platform.OS === 'android' ? 'height' : 'padding'}
            enabled
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder='Enter your email'
                    placeholderTextColor={THEME.colors.gray}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder='Enter your password'
                    placeholderTextColor={THEME.colors.gray}
                    secureTextEntry
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title={messageButton}
                            color={THEME.colors.primary}
                            onPress={() => {}}
                        />

                        <View style={styles.prompt}>
                            <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                                <Text style={styles.promptMessage}>{message}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
};

export default Auth;