import React from 'react';
// tooltip componenet..
class Tooltip extends React.Component{
    classn=()=>{   
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                Thanks for hovering "{this.props.position}" position !!
            </div>
        )
    }
}


export default Tooltip;