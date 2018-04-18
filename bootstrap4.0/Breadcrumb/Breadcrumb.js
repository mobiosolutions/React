/************************************************************************************************

Description : Bootstrap 4.0 Badge Breadcrumb for React JS

*************************************************************************************************/

class Breadcrumb extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {  
    
    const {children} = this.props;

    return <nav aria-label="breadcrumb"> 
              <ol className="breadcrumb">   
                  {children}
              </ol>    
           </nav>   
  }
}