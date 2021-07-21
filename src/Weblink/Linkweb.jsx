import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "../index.css";
import Cards from "../Details/Cards";


function Linkweb(){
    return(
        <>
            {/* COURSEL IMAGE1 */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://www.codingdojo.com/blog/wp-content/uploads/FULL-STACK-DEV-GRAPH-2.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div class="jumbotron">
            <div class="container text-center">
                <h1><i>FULL STACK DEVELOPMENT GUIDE FOR BEGINNERS</i></h1>
            </div>
            </div>
            <div id="cards_landscape_wrap-2">
                <div class="container">
                <h5 style={{fontFamily:"Cursive",fontSize:"40px",color:"skyblue"}}>FRONTEND DEVELOPMENT LANGUAGES</h5>
                    <div class="row">
                        <Cards
                            imgscr="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203170945/HTML-Tutorials.png"
                            alter="HTML"
                            title="HTML LANGUAGE"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of HTML Language"
                            youtubelink="https://youtu.be/qz0aGYrrlhU"
                            noteslink="https://www.w3schools.com/html/"
                        />
                        <Cards
                            imgscr="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png"
                            alter="CSS"
                            title="CSS LANGUAGE"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of CSS Language"
                            youtubelink="https://youtu.be/1Rs2ND1ryYc"
                            noteslink="https://www.w3schools.com/css/default.asp"
                        />
                        <Cards
                            imgscr="https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg"
                            alter="JAVASCRIPT LANGUAGE"
                            title="JAVASCRIPT LANGUAGE"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of JAVASCRIPT Language"
                            youtubelink="https://youtu.be/EfAl9bwzVZk" 
                            noteslink="https://www.w3schools.com/js/default.asp"
                        />
                    </div>
                </div>
            </div>
             {/* COURSEL IMAGE2 */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://www.htmlpro.net/blog/wp-content/uploads/2018/07/feature-image-1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div id="cards_landscape_wrap-2">
                <div class="container">
                <h5 style={{fontFamily:"Cursive",fontSize:"40px",color:"blue"}}>FRONTEND DEVELOPMENT FRAMEWORKS</h5>
                    <div class="row">
                        <Cards
                            imgscr="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png"
                            alter="REACT FRAMEWORK"
                            title="REACT FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of JAVASCRIPT FrameWork"
                            youtubelink="https://youtu.be/4UZrsTqkcW4" 
                            noteslink="https://reactjs.org/tutorial/tutorial.html"
                        />
                        <Cards
                            imgscr="https://i.pinimg.com/originals/7b/be/9c/7bbe9c289e3a6be3c03e658e819ba3c1.jpg" 
                            alter="ANGULAR FRAMEWORK"
                            title="ANGULAR FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of JAVASCRIPT FrameWork"
                            youtubelink="https://youtu.be/2OHbjep_WjQ" 
                            noteslink="https://www.w3schools.com/angular/"
                        />
                        <Cards
                            imgscr="https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png"
                            alter="VUE JS FRAMEWORK"
                            title="VUE JS FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of JAVASCRIPT FrameWork"
                            youtubelink="https://youtu.be/4deVCNJq3qc"
                            noteslink="https://vuejs.org/v2/guide/"
                        />
                    </div>
                </div>
            </div>
             {/* COURSEL IMAGE3 */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://www.crestinfotech.com/wp-content/uploads/2018/12/Right-CSS-Framework-for-our-Website-Banner.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div id="cards_landscape_wrap-2">
                <div class="container">
                <h5 style={{fontFamily:"Cursive",fontSize:"40px",color:"blue"}}>DESIGN FRAMEWORKS FOR WEBSITES</h5>
                    <div class="row">
                        <Cards
                            imgscr="https://html5depot.com/wp-content/uploads/2020/10/375925-637286173690034890-16x9-1-1170x658.jpg"
                            alter=">SASS FRAMEWORK"
                            title=">SASS FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of SASS FrameWork"
                            youtubelink="https://youtu.be/_a5j7KoflTs"
                            noteslink="https://scotch.io/tutorials/getting-started-with-sass"
                        />
                        <Cards
                            imgscr="https://itriangletechnolabs.com/blog/wp-content/uploads/2020/05/bootstrap-illustration.png"
                            alter="BOOTSTRAP FRAMEWORK"
                            title="BOOTSTRAP FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of BOOTSTRAP FrameWork"
                            youtubelink="https://youtu.be/rQryOSyfXmI"
                            noteslink="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
                        />
                        <Cards
                            imgscr="https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.0"
                            alter="TAILWINDCSS FRAMEWORK"
                            title="TAILWINDCSS FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of TAILWINDCSS FrameWork"
                            youtubelink="https://youtu.be/4wGmylafgM4"
                            noteslink="https://tailwindcss.com/docs"
                        />
                        <Cards
                            imgscr="https://www.section.io/engineering-education/how-to-implement-material-ui-in-react/hero.png"
                            alter="Material-UI FRAMEWORK"
                            title="Material-UI FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of Material-UI FrameWork"
                            youtubelink="https://youtu.be/vyJU9efvUtQ"
                            noteslink="https://material-ui.com/"
                        />
                    </div>
                </div>
            </div>
            {/* COURSEL IMAGE4 */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2016/12/What-Is-Back-End-Development.png"
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div id="cards_landscape_wrap-2">
                <div class="container">
                <h5 style={{fontFamily:"Cursive",fontSize:"40px",color:"blue"}}>BACKEND DEVELOPMENT LANGUAGES AND FRAMEWORKS</h5>
                    <div class="row">
                        <Cards
                            imgscr="https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1"
                            alter="NODE JS FRAMEWORK"
                            title="NODE JS FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of NODE JS FrameWork"
                            youtubelink="https://youtu.be/TlB_eWDSMt4"
                            noteslink="https://www.w3schools.com/nodejs/"
                        />
                        <Cards
                            imgscr="https://miro.medium.com/max/805/1*alZcSIb0lcN7gQIx2tJ_tg.png"
                            alter="EXPRESS JS FRAMEWORK"
                            title="EXPRESS JS FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of EXPRESS JS FrameWork"
                            youtubelink="https://youtu.be/L72fhGm1tfE"
                            noteslink="https://expressjs.com/en/guide/routing.html"
                        />
                        <Cards
                            imgscr="https://i2.wp.com/pythondunyasi.com/wp-content/uploads/2020/02/python-django.jpg?fit=640%2C287&ssl=1"
                            alter="DJANGO FRAMEWORK"
                            title="DJANGO FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of DJANGO FrameWork"
                            youtubelink="https://youtu.be/rHux0gMZ3Eg" 
                            noteslink="https://www.djangoproject.com/start/"
                        />
                        <Cards
                            imgscr="https://miro.medium.com/max/640/1*O0S2-UBv_Y1RRgHgRkg1yQ.png" 
                            alter="FLASK FRAMEWORK"
                            title="FLASK FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of FLASK FrameWork"
                            youtubelink="https://youtu.be/Qr4QMBUPxWo"
                            noteslink="https://flask.palletsprojects.com/en/2.0.x/"
                        />
                        <Cards
                            imgscr="https://data-flair.training/blogs/wp-content/uploads/sites/2/2018/06/Spring-Framework-01.jpg"
                            alter="SPRING BOOT FRAMEWORK"
                            title="SPRING BOOT FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of SPRING-BOOT FrameWork"
                            youtubelink="https://youtu.be/vtPkZShrvXQ"
                            noteslink="https://spring.io/guides/gs/spring-boot/"
                        />
                        <Cards
                            imgscr="https://cubettech.com/wp-content/uploads/2019/10/php-framework-laravel-1024x455.jpg"
                            alter="LARVEL FRAMEWORK"
                            title="LARVEL FRAMEWORK"
                            description="This Card Contain the Beginners to Pro level Practice and Youtube Video of LARVEL FrameWork"
                            youtubelink="https://youtu.be/MFh0Fd7BsjE" 
                            noteslink="https://laravel.com/docs/8.x"
                        />
                    </div>
                </div>
            </div>
        </>

    );
}
export default Linkweb;