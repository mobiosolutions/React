/************************************************************************************************

Description : Bootstrap 4.0 Badge component for React JS

Props List 

@bStyle : primary | secondary | success | danger | warning | info | light | dark
@bPill  : Boolnean - Default False
.badge-pill modifier class to make badges more rounded (with a larger border-radius and additional horizontal padding).

@bLink : Add link to created actionable badges 

Example : 

Without bPill Props

<Badge bStyle="light">10</Badge>

With bPill & bLink Props

<Badge bStyle="light" bPill bLink="http://google.com" >10</Badge>


*************************************************************************************************/

class Badge extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {  

    const { bStyle,bPill,bLink,children } =  this.props;

    // Check for badge-pill class condition . Default will be blank 
    const bPillClass =  (bPill) ? ' badge-pill' : '';

    // Set class names
    const classAttr = "badge badge-" + bStyle + bPillClass;

    if(!bLink){
      return <span className = {classAttr}> {children} </span>
    }else{
      return <a href={bLink} className = {classAttr}> {children} </a>
    }
    
  }
}