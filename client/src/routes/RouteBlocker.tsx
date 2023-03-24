import { Navigate, Outlet } from "react-router-dom"
import styled from "styled-components"
import Footer from "shared/containers/Footer"

import Header from "shared/containers/Header"
import { loginStore } from "../hooks/stores/login"
import { maxWidth, minWidth } from "../styles/theme"


export const RouteBlocker = () => {
    const isLogedIn = loginStore(state => state.isLogedIn)


    return isLogedIn
        ?
        <>
            <Container>
                <div>
                    <Header />
                    <Body>
                        <Outlet />
                    </Body>
                </div>
                <Footer />
            </Container>
        </>
        : <Navigate to="/login" replace />
}


export const Body = styled.div`
    padding: 40px 150px;
    
    ${maxWidth} {
        padding: 20px 20px;
        margin-top: 110px;
        min-height:91.2vh;
    }
    
    ${minWidth} {
        height:71vh;
        overflow: auto;
        overflow-x: hidden;
        /* width */
        ::-webkit-scrollbar {
            width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {

            border-radius: 0px;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.scrollBar}; 
            border-radius: 0px;
        }

        /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
            background: ${({ theme }) => theme.scrollBarHover}; 
        }

    }
`

const Container = styled.div`
${minWidth} {
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}

`