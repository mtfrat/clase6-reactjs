import { Card } from "react-bootstrap"
import Button from "@restart/ui/esm/Button"

//Muestro los items listados

const Item = ({producto}) => {
    return (
        <Card key={producto.id} style={{ width: '30rem'}}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.marca} {producto.modelo}</Card.Title>
                <Card.Text>
                {producto.año}
                </Card.Text>
                <Card.Text>
                {producto.precio}
                </Card.Text>
                <Button className="btn btn-dark" variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
}

export default Item

