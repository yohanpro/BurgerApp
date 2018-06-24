import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classses from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';



const sideDrawer =(props)=>{
    let attachedClasses=[classses.SideDrawer, classses.Close];
    if(props.open){
        attachedClasses= [classses.SideDrawer, classses.Open];
    }
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classses.Logo}>
                    <Logo/>
                </div>
                <nav>
                <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
