import "./Landing.css"

const Landing = () => { 
    return (
            <div id="container" >
                <br /><br /><h1 className="center thicker" >NeuroConexion</h1><br />
                <h3  className="center thick" >Diverse Minds, Unified Hearts: NeuroConexion, Where Differences Unite!</h3><br /><br />
                <p className="center" >Welcome to our new website dedicated to the neurodivergent community!<br/>In a world where connection and understanding are paramount, <br/>we've created this space for individuals with diverse neurodivergences to find a welcoming, understanding, and enriching community. <br/>Our goal is to promote communication, exchange experiences, and establish meaningful relationships <br/>among individuals who share similar experiences and challenges.</p><br /><br />
                <h3 className="thick" >How to use it?</h3><br />
                <p>How does our website work? It's simple. <br />By signing up, you'll gain access to our thematic forums, <br />where you can start conversations, ask questions, share your experiences, and learn from others. <br />Wondering how to navigate a particular situation due to your neurodivergence? <br />Here, you'll find answers and advice from people who have been through the same.</p><br />
                Additionally, you can explore the profiles of other members and connect with those <br />who share your interests, passions, and challenges. Found someone you'd like to talk to more? <br />Add them as a friend and start a new friendship!<br /><br />In summary, our website is a safe and welcoming space where you can find <br />support, understanding, and genuine friendships. <br />Join us and be part of this incredible neurodivergent community!<br /><br /><br /> 
                <h3  className="thick" >Extra2</h3><br /> 
                <p>Images</p><br /><br />
                <div className="image_container g1" >
                    <div className="image_item g1" >
                        <img className="image" src="../../../Images/Screenshot 2024-05-01 at 17.26.47.png" alt="" />
                        <p>Text1</p>
                    </div>
                    <div className="image_item g1">
                        <img className="image g1" src="../../../Images/Screenshot 2024-05-01 at 17.27.20.png" alt="" />
                        <p>Text2</p> <br />
                    </div>
                    <div className="image_item g2">
                        <img className="image g2" src="../../../Images/Screenshot 2024-05-01 at 17.27.36.png" alt="" />
                        <p>Text3</p> <br />
                    </div>
                    <div className="image_item g3">
                        <img className="image g3" src="../../../Images/Screenshot 2024-05-01 at 17.27.47.png" alt="" />
                        <p>Text4</p>
                    </div>
                    <div className="image_item g3">
                        <img className="image g3" src="../../../Images/Screenshot 2024-05-01 at 17.27.59.png" alt="" />
                        <p>Text5</p>
                    </div>
                </div>
            </div>
    )
}

export default Landing