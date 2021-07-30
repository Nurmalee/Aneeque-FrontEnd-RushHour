import { Dashboard, Description, LocalMall, People, Settings, Telegram } from "@material-ui/icons";

const leftBar = {
    menu: [
        {
            Icon: Dashboard,
            title: "overview",
        },
        {
            Icon: Description,
            title: "orders",
        },
        {
            Icon: LocalMall,
            title: "products",
        },
        {
            Icon: Settings,
            title: "settings",
        }   
    ],
    
    business: [
        {
            Icon: Telegram,
            title: "shipment",
        },
        {
            Icon: People,
            title: "employee",
        },   
    ]
}

export default leftBar