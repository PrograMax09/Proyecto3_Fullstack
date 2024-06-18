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
                <h3  className="thick" >What could I do?</h3><br /> 
                <div className="image_container" >
                    
                    
                    <div id='g1'>
                        <div className="image_item " >
                            <img className="image" src="../../../Images/Screenshot 2024-05-01 at 17.26.47.png" alt="" />
                            <p> Dive into discussions about navigating the academic and professional world as a neurodivergent individual. Share tips for success in education, career development, and strategies for thriving in university settings.</p>
                        </div>
                        <div className="image_item ">
                            <img className="image " src="../../../Images/Screenshot 2024-05-01 at 17.27.20.png" alt="" />
                            <p>Connect with others who share your passions! Whether it's discussing favorite video games, swapping movie recommendations, sharing music playlists, or discovering new hobbies, this forum is the place to celebrate diverse interests and find like-minded individuals.</p> <br />
                        </div> 
                    </div>
                    <div id='g2'>
                        <div className="image_item ">
                            <img className="image " src="../../../Images/Screenshot 2024-05-01 at 17.27.36.png" alt="" />
                            <p>Explore topics related to self-esteem, sensory regulation, and practical tips for daily life. From coping strategies to organization hacks, this forum offers support and guidance for managing challenges and boosting confidence.</p> <br /> 
                        </div> 

                    </div>

                    <div id='g3'>
                        <div className="image_item ">
                            <img className="image " src="../../../Images/Screenshot 2024-05-01 at 17.27.47.png" alt="" />
                            <p> Take part in discussions about holistic well-being. Share tips for maintaining a healthy lifestyle, explore nutrition and dietary considerations, and find support for mental health challenges. This forum is a space for open dialogue and mutual support on all aspects of health and wellness.</p>
                        </div>
                        <div className="image_item ">
                            <img className="image " src="../../../Images/Screenshot 2024-05-01 at 17.27.59.png" alt="" />
                            <p>From tips for navigating social situations to sharing favorite travel destinations and workout routines, this forum is all about embracing life's adventures. Connect with others who understand the unique joys and challenges of neurodiversity while exploring the world, staying active, and enjoying social experiences.</p> <br />
                        </div>
                    </div>
                  
                </div>
            </div>
    )
}

export default Landing