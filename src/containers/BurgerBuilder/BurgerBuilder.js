import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modals/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE={
    salad:0.5,
    cheese:0.7,
    bacon :1,
    meat:1,
}
class BurgerBuilder extends React.Component {
    state ={
        ingredients:{
            cheese:0,
            bacon:0,
            meat:0,
            salad:0
        },
        totalPrice:4,
        purchaseable:false,
        purchasing:true,
    }
    purchaseHandler=()=>{
        this.setState({
            purchaseable:true
        });
    }
    updatePurchaseState=(ingredients)=>{
        const sum = Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{return sum+el;},0);
        this.setState({purchaseable: sum>0})
    }
    addIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        const upDateCount = oldCount+1;
        const upDateIngredient ={
            ...this.state.ingredients
        };
        upDateIngredient[type]=upDateCount;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({
           totalPrice: newPrice,
           ingredients:upDateIngredient,
        });
        this.updatePurchaseState(upDateIngredient);
    };
    deleteIngredientHandler=(type)=>{
        const oldCount= this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const upDateCount= oldCount-1;
        const upDateIngredient= {
            ...this.state.ingredients
        };
        upDateIngredient[type]= upDateCount;
        const priceDeduction= INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients:upDateIngredient,
         });
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients= {this.state.ingredients}/>
                <BuildControls 
                ingredientsAdd = {this.addIngredientHandler}
                ingredientsRemove = {this.deleteIngredientHandler}         
                disabled= {disabledInfo}
                price={this.state.totalPrice}
                purchaseable={this.state.purchaseable}
                ordered = {this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder ;