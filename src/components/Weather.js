import React from "react";


class Weather extends React.Component {
    render() {
        return(
            //This statement is saying to only display if city and country are set.
        <div>
            {this.props.city && this.props.country &&  <p> Location:  {this.props.city}, {this.props.country}</p>}
           {this.props.temperature && <p>Teperature: {this.props.temperature}</p>}
           {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
         {this.props.description && <p> Conditions: {this.props.description}</p>}
        </div> 
        );
    }
}

export default Weather;