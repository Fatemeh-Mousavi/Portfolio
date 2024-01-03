import "./CardServices.css"
function CardServices(props){
    return(
        <div className="col-4">
        <div className="service-box">
          <div className="service-icon">
            <i className={props.icon}></i>
          </div>
          <div className="service-content">
            <h3 className="service-title">{props.title}</h3>
            <p className="service-info">
                {props.info}
            </p>
          </div>
        </div>
      </div>
    )
}
export default CardServices;