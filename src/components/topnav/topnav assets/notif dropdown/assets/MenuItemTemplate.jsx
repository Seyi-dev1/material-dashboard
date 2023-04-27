import './menuItemTemplate.scss'


const MenuItemTemplate = ({image, title, message, time })=>{


    return(
        <div className="template">
        <div className="image">
        <img src={image} alt="person" />
        </div>
        <div className="text">
            <h4>{title}</h4>
            <p>{message}</p>
        </div>
        <div className="time-stamp"><p>{time}</p></div>
           
        </div>
    )
}

export default MenuItemTemplate