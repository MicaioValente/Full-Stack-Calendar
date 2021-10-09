import styled from "styled-components"

export const Calendar = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 30px;
    #input{

    }
    
    .line{
        height: 100px;
    }
    a{
        text-decoration: none;
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 600;
        &:hover{
            box-shadow: 0 0 1px pink;
            color: #f5f5f5;
            
        }
    }
    button{
        
    }
`
export const Day = styled.div`
    width: calc(100% / 7);
    height: 167px;
    display: inline-block;
    cursor: pointer;
    &:hover{
        background-color: rgb(148,119,187);

    }
    
    
    .before{
        background-color: rgba(0.3, 0.3, 0.3, 0.1);
        width: 100%;
        height: 100%;
        display: inline-block;
        margin: 0;
    &:hover{
        background-color: rgba(0.3, 0.3, 0.3, 0.5);
    }
    }
    .selected{
            display: revert;
        background-color: #916BBF;
        width: 100%;
        height: 100%;
        display: inline-block;
        margin: 0;

    }
    .today{
        margin: 0;
        background-color: #3D2C8D;
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    

`
export const Body = styled.div`
    height: 100%;

`
export const DayNames = styled.div`
    background-color: transparent;

`
export const Week = styled.div`
    margin: 0;
    color: #f5f5f5;
    width: calc(100% / 7);
    height: 100px;
    display: inline-block;
`


export const Header = styled.div`
    color: #f5f5f5;
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 600;

`
export const Previous = styled.div`

`
export const Current = styled.div`

`
export const Next = styled.div`

`
export const Modal = styled.div`
	z-index: auto;
	display: ${({ show }) => (show ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.6);
`;
export const InputDiv = styled.div`
    

`
export const Model = styled.div`
	z-index: auto;
	display: ${({ show }) => (show ? 'flex' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    
`;
export const ContentModal = styled.div`
	width: 270px;
    height: 350px;
    border-radius: 36px;
    background-color: #f5f5f5;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: initial;
    
`;
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 230px;
    right: 0px;
`;
export const BotonClose = styled.button`
	background-color: red;
    border: none;
    border-radius: 30px;
    color: white;
    height: 30px;
    width: 100px; 
    cursor: pointer;

`;
export const BotonSave = styled.button`
    border: none;
    border-radius: 30px;
	background-color: blue;
    color: white;
    height: 30px;
    width: 100px;
    cursor: pointer;

`;
export const DivEvent = styled.div`
    
`;
