import Header from "../Component/Header";
import Navigator from "../Component/Navigator";
import AddItems from "../Service/AddItems";
import ShoppingListItem from "../Model/IShoppingListItem";

export default function Einkaufsliste({items, setItems}:{items:ShoppingListItem[], setItems:Function}){
    return(
        <div>
            <Header/>
            <Navigator/>
            <AddItems items={items} setItems={setItems} />
        </div>
    )
}