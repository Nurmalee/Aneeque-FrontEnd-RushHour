import styled from 'styled-components'
import {useState} from 'react'

const MenuPrint = ({title, data}) => {

    const active = {
        color: "rgb(54, 156, 224)",
        borderRight: "4px solid rgb(54, 156, 224)"
    }

    const normal = {
        color: "rgb(159, 183, 199)",
        borderRight: "none"
    }

    const [traceIdx, setTraceIdx] = useState(0)
    const monitorSetIdx = (id) => setTraceIdx(id)

    return (
        <MenuData>
                <h2>{title}</h2>

                <MenuList>
                    {
                        data.map((menu, idx) => {
                            const {Icon, title} = menu

                            let tabStyle = {};
                            if(idx === traceIdx){
                                tabStyle = active
                            } else {
                                tabStyle = normal
                            }

                            return (
                                <MenuItem key={idx} onClick={() => monitorSetIdx(idx)} style={tabStyle}>
                                    <Icon  />
                                    <p>{title}</p>
                                </MenuItem>
                            )
                        })
                    }
                </MenuList>
        </MenuData>
    )
}

export default MenuPrint

const MenuData = styled.div`

    > h2 {
        text-transform: capitalize;
        font-size: 15px;
        font-weight: 700;
        margin-top: 35px;
        color: rgb(83, 105, 120);
    }

`

const MenuList = styled.ul`
    list-style-type: none;
`

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    /* padding: 5px 0; */
    padding-right: 20px;
    margin: 25px 0;
    cursor: pointer;

    .MuiSvgIcon-root {
        /* color: rgba(0, 0, 70, 0.5); */
    }

    > p {
        padding-left: 10px;
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 600;
        /* color: #999; */
    }
`
