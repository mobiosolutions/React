/************************************************************************************************

Description : Bootstrap 4.0 Alert component for React JS

Props List 

@bStyle : primary | secondary | success | danger | warning | info | light | dark
@dismiss : Boolnean - Default False   

Example : 

Without dismiss Props

<Alert bStyle="dark"> This is a primary alert—check it out! </Alert>

With dismiss Props

<Alert bStyle="dark" dismiss> This is a primary alert—check it out! </Alert>


*************************************************************************************************/

class Alert extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {  

    const { bStyle,dismiss,children } =  this.props;

    const dismissFlag =  (dismiss) ? true :false;

    return  <div className= {"alert alert-" + bStyle} role="alert">            
              {children}

              {dismissFlag  && 
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              }

            </div>;
  }
}