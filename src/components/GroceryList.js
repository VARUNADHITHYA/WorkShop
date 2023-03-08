import  Button  from "@mui/material/Button";
function GroceryList(){
    const items =[ 
        {id: 1, name:'biscuit'},
        {id:2, name: 'chips'},
        {id:3, name: 'eggs'},
    ];
    return(
        <>
        <h1>GroceryList</h1>
        <u1> 
            {items.map((item)=> <li
            key={item.id}>{item.name}</li>)}
            <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
        </u1>
        </>
    )

};
export default GroceryList;