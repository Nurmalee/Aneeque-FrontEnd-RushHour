import { IconButton } from '@material-ui/core'
import { DonutLarge } from '@material-ui/icons'
import styled from 'styled-components'
import menu_data from '../data/menuLinks'
import MenuPrint from './MenuPrint'

const LeftBar = () => {
    return (
        <LeftBarContainer>
            <AppLogo>
                <IconButton>
                    <DonutLarge />
                </IconButton>

                <h2>tumbas</h2>
            </AppLogo>

            <Menus>
                <MenuPrint title={Object.keys(menu_data)[0]} data={menu_data.menu}/>

                <MenuPrint title={Object.keys(menu_data)[1]} data={menu_data.business}/>
            </Menus>
            
            <Footer>
                <h2> &copy; Tumbas. 2020 </h2>
                <p>Platform for solution of all types of business to be more advanced</p>
            </Footer>
            
        </LeftBarContainer>
    )
}

export default LeftBar

const LeftBarContainer = styled.div`
    flex: 0.2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 3px solid whitesmoke;
    height: 100%;
    /* padding-right: 25px; */
`

const AppLogo = styled.div`
    display: flex;
    align-items: center;

    .MuiIconButton-root {
        background-color: rgb(54, 156, 224);
        padding: 9px;
    }

    .MuiSvgIcon-root {
        color: white;
    }

    > h2 {
        margin-left: 10px;
        font-size: 17px;
        text-transform: capitalize;
        color: rgb(54, 156, 224);
    }
`

const Menus = styled.div``

const Footer =  styled.div`
    margin-top: auto;
    padding-right: 20px;
    

    > h2 {
        font-size: 14px;
        margin-bottom: 10px;
        color: rgb(83, 105, 120);
    }

    > p {
        font-size: 12px;
        font-weight: 500;
        color: rgb(159, 183, 199);
    }

`
