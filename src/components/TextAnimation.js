import React from "react";

import styled, { keyframes } from "styled-components";

export default function TextAnimation() {
    return <Wrapper> Fashion Award Show 2022 Fashion Award Show 2022 Fashion Award Show 2022 Fashion Award Show 2022
        Fashion Award Show 2022 Fashion Award Show 2022 Fashion Award Show 2022 
    </Wrapper>
}

const animation = keyframes`
    0% {transform: translateX(-300px)}
    100% {transform: translateX(1500px)}
`

const Wrapper = styled.span`
    display:inline-block;
    animation-name: ${animation};
    animation-duration: 18s;
    animation-iteration-count: infinite;
    color:#ffffff;

    `