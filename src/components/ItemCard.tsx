type ItemCardProps = {
    itemName: string
    damage: number
}

function ItemCard(props: ItemCardProps){
    return <div>
        <h2>Weapon: {props.itemName}</h2>
        <p>P.atak: {props.damage}</p>
    </div>
}

export default ItemCard