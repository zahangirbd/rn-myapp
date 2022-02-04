import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import NetworkManager from '../network/network-manager';
import { APIConst } from '../network/api-constant';
import { Headers } from '../network/api-header-constant';
import { showTwoButtonAlert } from './AlertMsgBoxes';

export const Login = ({navigation}) => {
  const [isNotSubmitted, setIsNotSubmitted] = useState(true);  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const clearInputFields = () => {
    setUserName('');
    setPassword('');
  };

  const handleLogin = () => {
    setIsNotSubmitted(false);  
    const loginUrl = APIConst.BaseURL + APIConst.URLConst.users + APIConst.URLConst.login;
    console.log(`MZA-handleLogin: loginUrl:${loginUrl}, userName: ${userName}, password:${password}`);

    const reqBody = { 
        username: userName,
        password, 
        loginstrategy: 'username',
    };

    NetworkManager.requestPOST(loginUrl, reqBody, Headers)
      .then((data) => {
          console.log(`MZA: login response SUCCESSFUL: status: ${data && data.status ? data.status : null}`);
          setIsNotSubmitted(true);
          if (data && data.status >= 200 &&  data.status < 300) {
            // showTwoButtonAlert('Success', 'User Login Successful');
            clearInputFields();
            navigation.navigate('Home');
          } else {
            showTwoButtonAlert('Failed', 'User Login Failed');
          } 
      })
      .catch((err) => {
          setIsNotSubmitted(true);
          console.log("MZA: login response FAILED:", err.message);
          showTwoButtonAlert('Error', err.message);
      });
  };

  return (
    <View>
      <TextInput
        style={{height: 40}}
        placeholder="User Name"
        onChangeText={newUserName => setUserName(newUserName)}
        defaultValue={userName}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
      />
      <Button
        onPress={() => {
          handleLogin();
        }}
        disabled={!isNotSubmitted}
        title={isNotSubmitted ? "Login" : "Submitted - Thanks."}
      />
    </View>
  );
}
