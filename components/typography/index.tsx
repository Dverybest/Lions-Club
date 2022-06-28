import styled from "@emotion/native";

export const BaseRegularText = styled.Text<{ color?: string }>(({ color, theme }) => ({
    color: color ?? theme.colors.gun_metal,
    fontFamily: theme.fonts.regular
  }));
  
export const BaseMediumText = styled.Text<{ color?: string }>(({ color, theme }) => ({
    color: color ?? theme.colors.gun_metal,
    fontFamily: theme.fonts.medium
  }));

export const BaseBoldText = styled.Text<{ color?: string }>(({ color, theme }) => ({
    color: color ?? theme.colors.gun_metal,
    fontFamily: theme.fonts.bold
}));