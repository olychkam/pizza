import React from 'react';
import {Categories} from "../components/Categories/Categories";
import {PizzaBlock, PizzaBlockType} from "../components/PizzaBlock/PizzaBlock";

type HomePropsType = {
    items: []
}

export function Home(props: HomePropsType) {
    console.log(props.items)

    // @ts-ignore
    return (
        <div className="container">
            <Categories onClick={(it) => {
                console.log(it)
            }} items={
                ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    props.items.map((obj:PizzaBlockType) =>
                        // @ts-ignore
                        <PizzaBlock key={obj.id} {...obj}/>
                    )
                }
            </div>
        </div>
    )
}