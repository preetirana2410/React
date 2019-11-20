import React  from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';




   function RenderDish({dish}) {
        return (

            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>

            </div>

        )
    }

    function RenderComments({comments}) {
        const items = comments.map((item) => {
            return (
                <div>
                    <div key={item.id} className="list-unstyled mb-4">
                        <li className="mb-1">{item.comment}</li>
                        <li className="ml-2">--{item.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(item.date)))}</li>
                    </div>                    
                </div>
            )
        });

        return(
            <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {items}
                        </ul>
            </div>
        )
    }

    const DishDetail= (props) => {
        const dish = props.dish;
        if (dish != null) {
            return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={dish}/>
                    <RenderComments comments={dish.comments}/>

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

export default DishDetail