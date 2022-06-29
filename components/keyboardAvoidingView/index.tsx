import styled from "@emotion/native";
import * as React from "react";
import { Platform } from "react-native";

export const KeyboardAvoidingView: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  return (
    <Container behavior={Platform.OS == "ios" ? 'padding' : undefined}>
      <ScrollView>{children}</ScrollView>
    </Container>
  );
};

const Container = styled.KeyboardAvoidingView({
  flex: 1,
  backgroundColor:'#fff'
});
const ScrollView = styled.ScrollView({
  flex: 1,
  height: '100%'
});
