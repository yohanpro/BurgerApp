import React,{Component} from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


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