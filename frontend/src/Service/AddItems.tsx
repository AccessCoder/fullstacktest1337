import {ChangeEvent, FormEvent, useState} from "react";
import {v4 as uuidv4} from "uuid";
import ShoppingListItem from "../Model/ShoppingListItem";

export default function AddItems({items, setItems}:{items:ShoppingListItem[], setItems:Function}) {

    const [userInput, setUserInput] = useState("");

    const add = (e: FormEvent<HTMLFormElement>) => {
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
        setItems([...items,newItem])
        setUserInput("")
    };

    const remove = (id: string) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const done = (id:string) => {
       const temp = [...items];
       let itemIndex = temp.findIndex(item => item.id === id);
        temp[itemIndex].done=!temp[itemIndex].done;
        setItems(temp)
    }

    const increase = (id:string) => {
        const temp = [...items];
        let itemIndex = temp.findIndex(item => item.id === id);
        temp[itemIndex].quant=temp[itemIndex].quant +1;
        setItems(temp)
    }
    const decrease = (id:string) => {
        const temp = [...items];
        let itemIndex = temp.findIndex(item => item.id === id);
        if (temp[itemIndex].quant>1){
        temp[itemIndex].quant=temp[itemIndex].quant -1;
            setItems(temp)
        }else {
            alert("You need 0 off that? Why do you put it on the list? ò_ó/°")
            setItems(temp)
            remove(id)
        }

    }

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
                    <div className="ObjectMaster">
                        <div style={item.done ?{textDecoration: "5px solid line-through red"}:{}} className="ObjectEKListe" key={item.id}>
                            <p>{item.quant} {item.name}</p>
                            <button onClick={() => increase(item.id)}>+</button><button onClick={() => decrease(item.id)}>-</button>
                            <button onClick={() => done(item.id)}>Done!</button>
                            <button onClick={() => remove(item.id)}>remove</button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}


