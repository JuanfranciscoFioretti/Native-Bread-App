/* eslint-disable import/namespace */
/* eslint-disable prettier/prettier */
import React, { useState, useReducer } from "react";

import { View, Button, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from "react-native";
import { useDispatch } from 'react-redux';

import { signIn, signUp } from "../../store/actions";
import { Input } from '../../components';


import { THEME } from "../../constants/theme";
import { styles } from "./styles";
import { UPDATE_FORM ,onInputChange } from "../../utils/form";

const initialState = {
    email: { value: '', error: '', touched: false, hasError: true},
    password: { value: '', error: '', touched: false, hasError: true},
    isFormValid: false,
};

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FORM: 
            const {name, value, hasError, error, touched, isFormValid} = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid,
            };
        default:
            return state;
    }
};

const Auth = ({ navigaton }) => {
    // const [ email, setEmail ] = useState('');

    // const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();
    
    const [ isLogin, setIsLogin] = useState(true);

    const [ formState, dispatchFormState ] = useReducer(formReducer, initialState);

    const title = isLogin ? 'Login' : 'Register';

    const message = isLogin ? 'Don\'t have an account?' : 'Already have an account?';

    const messageButton = isLogin ? 'Login' : 'Register';

    const handlerSubmit = () => {
        dispatch( 
            isLogin 
            ? signIn(formState.email.value, formState.password.value) 
            : signUp(formState.email.value, formState.password.value));
    }

    const handlerInputChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    }

    return (
        <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior={ Platform.OS === 'android' ? 'height' : 'padding'}
            enabled
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Input 
                    // style={styles.input} 
                    placeholder='Enter your email'
                    placeholderTextColor={THEME.colors.gray}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => handlerInputChange(text, 'email')}
                    value={formState.email.value}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                    label='Email'
                    labelStyle={styles.label}
                    />

                    <Input 
                    // style={styles.input} 
                    placeholder='Enter your password'
                    placeholderTextColor={THEME.colors.gray}
                    secureTextEntry
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => handlerInputChange(text, 'password')}
                    value={formState.password.value}
                    hasError={formState.password.hasError}
                    error={formState.password.error}
                    touched={formState.password.touched}
                    label='Password'
                    labelStyle={styles.label}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title={messageButton}
                            color={THEME.colors.primary}
                            onPress={handlerSubmit}
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