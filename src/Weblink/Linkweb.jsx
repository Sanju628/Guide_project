import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


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
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203170945/HTML-Tutorials.png" alt="HTML" />
                                        </div>
                                        <div class="text-container">
                                            <h6>HTML LANGUAGE</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/qz0aGYrrlhU" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://www.w3schools.com/html/" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png" alt="CSS" />
                                        </div>
                                        <div class="text-container">                                    
                                            <h6>CSS LANGUAGE</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/1Rs2ND1ryYc" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://www.w3schools.com/css/default.asp" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg" alt="HACKEREARTH" />
                                        </div>

                                        <div class="text-container">
                                            <h6>JAVASCRIPT LANGUAGE</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/EfAl9bwzVZk" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://www.w3schools.com/js/default.asp" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
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
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" alt="react-js" />
                                        </div>
                                        <div class="text-container">
                                            <h6>REACT FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/4UZrsTqkcW4" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://reactjs.org/tutorial/tutorial.html" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://i.pinimg.com/originals/7b/be/9c/7bbe9c289e3a6be3c03e658e819ba3c1.jpg" alt="angularjs" />
                                        </div>
                                        <div class="text-container">                                    
                                            <h6>ANGULAR FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/2OHbjep_WjQ" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://www.w3schools.com/angular/" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png" alt="vuejs" />
                                        </div>

                                        <div class="text-container">
                                            <h6>VUE JS FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/4deVCNJq3qc" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://vuejs.org/v2/guide/" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
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
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://html5depot.com/wp-content/uploads/2020/10/375925-637286173690034890-16x9-1-1170x658.jpg" alt="sass" />
                                        </div>
                                        <div class="text-container">
                                            <h6>SASS FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/_a5j7KoflTs" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://scotch.io/tutorials/getting-started-with-sass" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://itriangletechnolabs.com/blog/wp-content/uploads/2020/05/bootstrap-illustration.png" alt="BOOTSTRAP" />
                                        </div>
                                        <div class="text-container">                                    
                                            <h6>BOOTSTRAP FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/rQryOSyfXmI" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.0" alt="tailwindcss" />
                                        </div>

                                        <div class="text-container">
                                            <h6>TAILWINDCSS FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/4wGmylafgM4" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://tailwindcss.com/docs" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://www.section.io/engineering-education/how-to-implement-material-ui-in-react/hero.png" alt="Material-UI" />
                                        </div>

                                        <div class="text-container">
                                            <h6>Material-UI FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/vyJU9efvUtQ" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://material-ui.com/" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
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
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1" alt="NODEjs" />
                                        </div>
                                        <div class="text-container">
                                            <h6>NODE JS FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/TlB_eWDSMt4" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://www.w3schools.com/nodejs/" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://miro.medium.com/max/805/1*alZcSIb0lcN7gQIx2tJ_tg.png" alt="Expressjs" />
                                        </div>
                                        <div class="text-container">                                    
                                            <h6>EXPRESS JS FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/L72fhGm1tfE" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://expressjs.com/en/guide/routing.html" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://i2.wp.com/pythondunyasi.com/wp-content/uploads/2020/02/python-django.jpg?fit=640%2C287&ssl=1" alt="DJANGO" />
                                        </div>

                                        <div class="text-container">
                                            <h6>DJANGO FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/rHux0gMZ3Eg" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://www.djangoproject.com/start/" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://miro.medium.com/max/640/1*O0S2-UBv_Y1RRgHgRkg1yQ.png" alt="FLASK" />
                                        </div>

                                        <div class="text-container">
                                            <h6>FLASK FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/Qr4QMBUPxWo" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://flask.palletsprojects.com/en/2.0.x/" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://data-flair.training/blogs/wp-content/uploads/sites/2/2018/06/Spring-Framework-01.jpg" alt="SPRING" />
                                        </div>

                                        <div class="text-container">
                                            <h6>SPRING FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/vtPkZShrvXQ" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://spring.io/guides/gs/spring-boot/" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://cubettech.com/wp-content/uploads/2019/10/php-framework-laravel-1024x455.jpg" alt="LARVEL" />
                                        </div>

                                        <div class="text-container">
                                            <h6>LARVEL FRAMEWORK</h6>
                                            <p><i>This Card Contain the Beginners level Practice of Data Structure and Algorithms Platform</i></p>
                                            <a href="https://youtu.be/MFh0Fd7BsjE" target="_blank"  class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                                            <a href="https://laravel.com/docs/8.x" class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Linkweb;