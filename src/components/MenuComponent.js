import React, { Component } from 'react';
//import {'*.module.css'} from 'reactstrap';
import { Media, Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);
    }
    render() {

        const menu = this.props.dishes.map((dish) => {
            return (

                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>                       
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText className="d-none">{dish.description}</CardText>
                        </CardImgOverlay>
                    </Card>
                </div>

            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>

        );
    }

}

export default Menu;