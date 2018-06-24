import React,{Component} from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import BackDrop from '../UI/Backdrop/Backdrop';

class Layout extends Component{

    state={
        showSideDrawer :true,
    }
    sideDrawerCloseHandelr=()=>{
        this.setState({
            showSideDrawer:false,
        })
    }
    sideDrawToggleHandler=()=>{
        this.setState((prevState)=>{
          return   {
                showSideDrawer : !prevState.showSideDrawer,
            }
        });
    }

    render(){
        return(
         <Aux>
            <Toolbar drawToggleClicked = {this.sideDrawToggleHandler}/>
            <SideDrawer open = {this.state.showSideDrawer}closed={this.sideDrawerCloseHandelr}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>

        );
    }
    
}

export default Layout;