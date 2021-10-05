import styled from "styled-components"

export const Calendar = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    .line{
        height: 170px;
    }
    a{
        text-decoration: none;
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 600;
        &:hover{
            box-shadow: 0 0 1px pink
            color: white;
        }
    }
`
export const Day = styled.div`
    width: calc(100% / 7);
    height: 167px;
    display: inline-block;
    cursor: pointer;
    
    
    .before{
        background-color: rgba(0.3, 0.3, 0.3, 0.1);
        width: 100%;
        height: 100%;
        display: inline-block;
        margin: 0;

    }
    .selected{
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
export const DayNames= styled.div`
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