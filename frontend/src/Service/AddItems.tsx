import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import ShoppingListItem from "../Model/IShoppingListItem";
import {deleteItem, getAllItems, getUser, putItem} from "./ShoppinhItem-Service";

export default function AddItems({items, setItems}:{items:ShoppingListItem[], setItems:Function}) {

    const [userInput, setUserInput] = useState("");

    useEffect(() => {
        getAllItems()
            .then(items => setItems(items))
            .catch(error => console.error(error))
    }, [])

    const add = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
            if (!userInput) {
                return;
            }
            const newItem: ShoppingListItem = {
                id: uuidv4(),
                name: userInput,
                done:false,
                quant:1,
            }
        putItem(newItem)
            .catch(error => console.error(error))
        setItems([...items,newItem])
            setUserInput("")
        };

    const getName = () =>{
        getUser()
            .catch(error => console.log(error))
    }

    const remove = (id:String) =>
        deleteItem(id)
            .then(() => getAllItems())
            .then(todos => setItems(todos))
            .catch(error => console.error(error))

    return (<div>
            <form onSubmit={add}>
                <fieldset>
                    <label>Artikel </label>
                    <input value={userInput} onChange={(e) => setUserInput(e.target.value)} maxLength={50}/>
                </fieldset>
                <button type="submit">Artikel hinzufügen</button>
            </form>
            {items.map((item) => {
                return (
                    <div className="ObjectMaster" key={item.id}>
                        <div style={item.done ?{textDecoration: "5px solid line-through red"}:{}} className="ObjectEKListe" key={item.id}>
                            <p>{item.quant} {item.name}</p>
                            {/*<button onClick={() => increase(item.id)}>+</button><button onClick={() => decrease(item.id)}>-</button>*/}
                            {/*<button onClick={() => done(item.id)}>Done!</button>*/}
                            <button onClick={() => remove(item.id)}>remove</button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}


