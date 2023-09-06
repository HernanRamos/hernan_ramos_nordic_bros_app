export const ItemDetail = ({product}) => (
<div style= {{display: 'flex'}}>
    <h1 style={{ color: 'black' }}>{product.nombre}</h1>
    <img src={product.img}/>
    <div>{product.stockDisponible}</div>
</div>
)

