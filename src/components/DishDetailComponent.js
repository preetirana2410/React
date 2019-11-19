import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {

            const items = dish.comments.map((item) => {
                return (
                    <div key={item.id} className="list-unstyled mb-4">
                        <li className="mb-1">{item.comment}</li>
                        <li className="ml-2">--{item.author} , {item.date}</li>
                    </div>
                );
            });

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>

                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                {items}
                            </ul>

                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div> Your Loss</div>
            )
        }
    }
}

export default DishDetail