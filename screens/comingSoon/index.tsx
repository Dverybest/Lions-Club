import styled from "@emotion/native"
import { BaseMediumText } from "../../components"

export const ComingSoon = ()=>{
    return(
        <Container>
            <BaseMediumText>Coming Soon</BaseMediumText>
        </Container>
    )
}

const Container = styled.View(({theme})=>({
    flex: 1,
    backgroundColor:theme.colors.white,
    justifyContent:'center',
    alignItems:'center'
}))