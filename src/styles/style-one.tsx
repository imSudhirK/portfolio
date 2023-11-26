import styled from 'styled-components';
import { Button, Card } from "antd"
import { ThemeProps } from './style.interface';


export const StyledText = styled.p<ThemeProps>`
    display: ${props => props.d || ""};
    position: ${props => props.pos || ""};
    font-family: ${props => props.ff || "Lato"};
    color: ${props => props.c || "#000"};
    font-size: ${props => props.fs || "16px"};
    line-height: ${props => props.lh || "24px"};
    font-weight: ${props => props.fw || "500"};
    width: ${props => props.w || ""};
    max-width: ${props => props.maxw || ""};
    margin-top: ${props => props.mt || "0px"};
    margin-right: ${props => props.mr || "0px"};
    margin-left: ${props => props.ml || "0px"};
    text-align: ${props => props.ta || "center"};
    align-self: ${props => props.aself || ""};
    letter-spacing: ${props => props.ls || "0px"};
    margin: ${props => props.m || ""};
    margin-bottom: ${props => props.mb || "0px"};
    padding-left: ${props => props.pl || "0px"};
    padding-top: ${props => props.pt || "0px"};
    cursor: ${props => props.hoverable ? "pointer" : ""};
    ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`}
    opacity: ${props => props.opac || ""};
    left: ${props => props.left || ""};
    top: ${props => props.top || ""};
`;

export const StyledDiv = styled.div<ThemeProps>`
    display: ${props => props.d || ""};
    flex-direction: ${props => props.fd || ""};
    justify-content: ${props => props.jc || ""};
    align-items: ${props => props.ai || ""};
    position: ${props => props.pos || ""};
    margin-top: ${props => props.mt || ""};
    width: ${props => props.w || ""};
    min-width: ${props => props.minW || ""}
    margin-left: ${props => props.ml || ""};
    bottom: ${props => props.bottom || ""};
    background-image: ${props => props.bg || ""};
    background-color: ${props => props.bgc || ""};
    padding: ${props => props.p || ""};
    height: ${props => props.h || ""};
    margin : ${props => props.m || ""};
    border-radius: ${props => props.br || ""};
    box-shadow: ${props => props.bs || ""};
    min-height: ${props => props.minH || ""};
`;

export const StyledIcon = styled.img<ThemeProps>`
    display: ${props => props.d || ""};
    width: ${props => props.w || "32px"};
    height: ${props => props.h || "32px"};
    cursor: ${props => props.hoverable ? "pointer" : ""};
    margin-left: ${props => props.ml || ""};
    margin-right: ${props => props.mr || ""};
    margin-top: ${props => props.mt || ""};
    margin-bottom: ${props => props.mb || ""};
    color: ${props => props.c || ""};
    z-index: ${props => props.zi || ""};
    margin: ${props => props.m || ""};
    padding: ${props => props.p || ""};
    position: ${props => props.pos || ""};
    bottom: ${props => props.bottom || ""};
    top: ${props => props.top || ""};
    left: ${props => props.left || ""};
    right: ${props => props.right || ""};
`;

export const StyledImage = styled.img<ThemeProps>`
    position: ${props => props.pos || ""};
    right: ${props => props.right || ""};
    top: ${props => props.top || ""};
    width: ${props => props.w || ""};
    height: ${props => props.h || ""};
    align-self: ${props => props.aself || ""};
    margin: ${props => props.m || ""};
    display: ${(props) => (props.d || "block")};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${(props) => props.mb || "5%"};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    vertical-align: middle;
    margin-top: ${(props) => props.mt};
    cursor: ${props => props.hoverable ? "pointer" : ""};
`;

export const StyledButton = styled(Button) <ThemeProps>`
    display: ${props => props.d || ""};
    background: ${props => props.bgc || "#3766FE"};
    width: ${props => props.w || "100%"};
    height: ${props => props.h || "42px"};
    font-size: ${props => props.fs || "14px"};
    font-weight: ${props => props.fw || '700'};
    line-height: ${props => props.lh || '17px'};
    margin: ${props => props.m || ""};
    margin-right: ${props => props.mr || ""};
    border: ${props => props.b || "none"};
    border-radius: ${props => props.br || "4px"};
    color: ${props => props.c || "#FFF"}; 
    margin-bottom: ${props => props.mb || '20px'};
    margin-top: ${props => props.mt || ''};
    cursor: 'pointer';
    &:hover {
        background: ${props => props.bgc || "#3766FE"};
        color: ${props => props.c || "#FFF"} !important; 
        border: ${props => props.b || "none"} !important;
    }
    &:focus {
        background: ${props => props.bgc || "#3766FE"};
        color: ${props => props.c || "#FFF"} !important; 
        border: ${props => props.b || "none"} !important;
    }
`;

export const StyledStatCard = styled(Card) <ThemeProps>`
    width: ${props => props.w || "186px"};
    height: ${props => props.h || "79px"};
    background-color: ${props => props.bgc || "#3766FE"};
    color: ${props => props.c || "#FFF"};
    border-radius: ${props => props.br || "0px"};
    margin: ${props => props.m || ""};
    border: ${props => props.b || ""};
`;

export const HorizontalLine = styled.div<ThemeProps>`
	width: ${props => props.w || ""};
	max-width: ${props => props.maxW || ""};
    border: ${props => props.b || "1px solid rgba(0, 0, 0, 0.25)"};
    margin-bottom: ${props => props.mb || "38px"};
    margin-left: ${props => props.ml || ""};
    margin-right: ${props => props.mr || ""};
	margin: ${props => props.m || ""};
	flex: ${props => props.flex || ""};
`;