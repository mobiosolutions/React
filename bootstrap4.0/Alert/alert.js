/************************************************************************************************

Description : Bootstrap 4.0 Alert component for React JS

Props List 

@bStyle : primary | secondary | success | danger | warning | info | light | dark
@dismiss : Boolnean - Default False   
@onDismiss : Function - This event is fired when the alert has been closed (will wait for CSS transitions to complete).

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

  componentDidMount() {
    
    const { onDismiss } =  this.props;

    $('.alert').off('closed.bs.alert').on('closed.bs.alert', function () {
      
      if(typeof onDismiss == "function") {
        onDismiss();
      } 

    });
  }

  render() {  

    const { bStyle,dismiss,children,onDismiss } =  this.props;

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