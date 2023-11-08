import React from "react";
import {Container} from "react-bootstrap";

export const FirstInfoModule: React.FC = () => {
    return (
        <Container className={"FirstInfoModule"}>
            <div className={"info-about_text"}>
                <h1>Soudemy: Your Furniture Hypermarket for Home Perfection</h1>
                <p>
                    Welcome to the world of comfort and style - the world of Soudemy, the greatest furniture
                    hypermarket, which is the perfect partner for all your home interior needs. Our mission is to make
                    your home the place you have always dreamed of. Soudemy is not just a store; it is a source of
                    inspiration for creating unique and cozy interiors.
                </p>
            </div>
            <div className={"info-about_part"}>
                <h2>Our Unique Features</h2>
                <div className={"particular-container"}>
                    <div className={"particular-item"}>
                        <h4>Wide Range</h4>
                        <p>We offer an extensive selection of furniture for every room in your home - from stylish
                            bedrooms and comfortable living rooms.</p>
                    </div>
                    <div className={"particular-item"}>
                        <h4>Quality and Reliability</h4>
                        <p>Soudemy collaborates exclusively with the best furniture manufacturers, ensuring high quality
                            and a long service life.</p>
                    </div>
                    <div className={"particular-item"}>
                        <h4>Professional Consultations</h4>
                        <p>Our experienced consultants are always ready to assist you in choosing furniture that matches
                            your style and budget.</p>
                    </div>
                </div>
            </div>
            <div className={"info-about_stats"}>
                <h2>The Future of Soudemy</h2>
                <p>
                    We continue to grow and evolve, introducing new collections and brands to satisfy even the most
                    discerning customers. Our dedication to quality and customer satisfaction makes Soudemy the best
                    choice for those who appreciate beauty and comfort in their homes.
                    <br/>
                    <br/>
                    Join us, and together, let's create a world of beautiful and cozy interiors. Soudemy - where your
                    home becomes a true work of art.
                </p>
            </div>
        </Container>
    )
}