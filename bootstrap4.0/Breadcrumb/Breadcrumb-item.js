/************************************************************************************************

Description : Bootstrap 4.0 Badge Breadcrumb for React JS

*************************************************************************************************/

class BreadcrumbItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {  

    const {children,href,active} = this.props;

    // Set child attribute 
    const childrenAttr = (href) ? <a href={href}> {children} </a> : children;

    const activeClass = (active) ? 'active' : '';

    const activeAria  = (activeClass != '') ? 'page' : '' ;

    return  <li className={"breadcrumb-item " + activeClass} aria-current={activeAria}>{childrenAttr}</li> 
  }
}