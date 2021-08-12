import React from "react";
import "../index.css";
import Cards from "../Details/Cards";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Dsavid(){
    return(
    <>
        <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://i.ytimg.com/vi/qLiFhSLUM1o/maxresdefault.jpg"
                    
                    alt="First slide"
                    />
                </Carousel.Item>
        </Carousel>
        <div class="jumbotron">
            <div class="container text-center">
                <h1><i>STEP 2 IN DATA STRUCTURE AND ALGORITHMS</i></h1>
                <h5><b>LEARN DATA STRUCTURE AND ALGORITHMS</b></h5>
            </div>
        </div>
        <div id="cards_landscape_wrap-2">
                <div class="container">
                <h5 style={{fontFamily:"impact",fontSize:"40px"}}>DATA STRUCTURE AND ALGORITHMS</h5>
                    <div class="row">
                        <Cards
                            imgscr="https://bitxorbyteshome.files.wordpress.com/2019/11/blog-cover.png" 
                            alter="TIME COMPLEXITY"
                            title="TIME & SPACE COMPLEXITY"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the time & space complexity"
                            youtubelink="https://youtu.be/9TlHvipP5yA"
                            noteslink="https://www.hackerearth.com/practice/basic-programming/complexity-analysis/time-and-space-complexity/tutorial/"
                        />
                        <Cards
                            imgscr="https://i2.wp.com/coderforevers.com/wp-content/uploads/2017/06/Arrays.png?resize=930%2C512&ssl=1" 
                            alter="Array"
                            title="ARRAY"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Array Data Structure"
                            youtubelink="https://youtu.be/PyTK_g1l8V8"
                            noteslink="https://www.geeksforgeeks.org/introduction-to-arrays/"
                        />
                        <Cards
                            imgscr="https://pixel77.com/wp-content/uploads/2014/11/20-Creative-Chat-Logo-Designs-7.jpg" 
                            alter="STRING"
                            title="STRING ALGORITHMS"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the String Algorithms"
                            youtubelink="https://youtu.be/FGeSdYqM3Nk"
                            noteslink="https://www.hackerearth.com/practice/algorithms/string-algorithm/basics-of-string-manipulation/tutorial/"
                        />
                        <Cards
                            imgscr="https://img2.pngio.com/what-is-an-search-algorithm-volusion-ecommerce-seo-search-algorithm-png-1600_960.png" 
                            alter="BINARY SEARCHING"
                            title="BINARY SEARCHING"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Searching Algorithms"
                            youtubelink="https://youtu.be/j7NodO9HIbk"
                            noteslink="https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/"
                        />
                        <Cards
                            imgscr="https://embed-ssl.wistia.com/deliveries/70d6f4e10e2badb5ef394f00c17ad2bc1c14f6e7.jpg"
                            alter="SORTING ALGORITHMS"
                            title="SORTING ALGORITHMS"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Sorting Algorithms"
                            youtubelink="https://youtu.be/pkkFqlG0Hds"
                            noteslink="https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/tutorial/"
                        />
                        <Cards
                            imgscr="https://secureservercdn.net/160.153.138.219/b79.d22.myftpupload.com/wp-content/uploads/2015/09/Singly-linked-list.png"
                            alter="LINKLIST"
                            title="LINKLIST DATA STRUCTURE"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Linklist Data Structure"
                            youtubelink="https://youtu.be/NobHlGUjV3g"
                            noteslink="https://www.geeksforgeeks.org/data-structures/linked-list/"
                        />
                        <Cards
                            imgscr="https://cdn.educba.com/academy/wp-content/uploads/2021/05/Binary-Tree-in-Data-Structure.jpg" 
                            alter="BINARY TREE"
                            title="BINARY TREE"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Binary Tree Data Structure"
                            youtubelink="https://youtu.be/qH6yxkw0u78"
                            noteslink="https://www.geeksforgeeks.org/binary-tree-data-structure/"
                        />
                        <Cards
                            imgscr="https://i.ytimg.com/vi/VVXOE-hnFts/maxresdefault.jpg"
                            alter="BINARY SEARCH TREE"
                            title="BINARY SEARCH TREE"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Binary Search Tree Data Structure"
                            youtubelink="https://youtu.be/pYT9F8_LFTM"
                            noteslink="https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
                        />
                        <Cards
                            imgscr="https://i.ytimg.com/vi/B8ugj1jq2Lg/maxresdefault.jpg" 
                            alter="GREEDY Algorithms"
                            title="GREEDY Algorithms"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Greedy Algorithms"
                            youtubelink="https://youtu.be/ARvQcqJ_-NY"
                            noteslink="https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/" 
                        />
                        <Cards
                            imgscr="https://ibpublicimages.s3-us-west-2.amazonaws.com/tutorial/backtracking1.png"
                            alter="BACKTRACKING ALGORITHMS"
                            title="BINARY SEARCHING"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Backtracking Algorithms"
                            youtubelink="https://youtu.be/DKCbsiDBN6c"
                            noteslink="https://www.geeksforgeeks.org/backtracking-algorithms/"
                        />
                        <Cards
                            imgscr="https://cdn.educba.com/academy/wp-content/uploads/2020/01/Stack-in-Data-Structure.jpg"
                            alter="STACK DATA STRUCTURE"
                            title="STACK DATA STRUCTURE"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Stack Data Structure"
                            youtubelink="https://youtu.be/F1F2imiOJfk"
                            noteslink="https://www.geeksforgeeks.org/stack-data-structure/"
                        />
                        <Cards
                            imgscr="https://cdn.educba.com/academy/wp-content/uploads/2019/12/Queue-in-Data-Structure.jpg"
                            alter="QUEUE DATA STRUCTURE"
                            title="QUEUE DATA STRUCTURE"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Queue Data Structure"
                            youtubelink="https://youtu.be/XuCbpw6Bj1U" 
                            noteslink="https://www.geeksforgeeks.org/queue-data-structure/" 
                        />
                        <Cards
                            imgscr="https://raw.githubusercontent.com/sumitc91/sumitc91.github.io/master/Blogs/80944397-ba9b-4d97-bcce-176b789b4f04_Heap-Data-Structure.jpg" 
                            alter="HEAP DATA STRUCTURE"
                            title="HEAP DATA STRUCTURE"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Heap Data Structure"
                            youtubelink="https://youtu.be/N0Frqx9UlrI"
                            noteslink="https://www.geeksforgeeks.org/heap-data-structure/"
                        />
                        <Cards
                            imgscr="https://www.cronj.com/blog/wp-content/uploads/bit-manipulation.png" 
                            alter="BIT MANIPULATION"
                            title="BIT MANIPULATION"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the BIT MANIPULATION"
                            youtubelink="https://youtu.be/v62IKeJtj0k" 
                            noteslink="https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/tutorial/"
                        />
                        <Cards
                            imgscr="https://miro.medium.com/max/14936/1*0DEK_ouEZZz4_MMdhKE_Wg.png" 
                            alter="GRAPH ALGORITHMS"
                            title="GRAPH ALGORITHMS"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Graph Algorithms"
                            youtubelink="https://youtu.be/YTtpfjGlH2M"
                            noteslink="https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/tutorial/"
                        />
                        <Cards
                            imgscr="https://i.ytimg.com/vi/-urNrIAQnNo/mqdefault.jpg"  
                            alter="TRIE DATA STRUCTURE" 
                            title="TRIE DATA STRUCTURE" 
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Trie Data Structure"
                            youtubelink="https://youtu.be/6PX6wqDQE20"
                            noteslink="https://www.geeksforgeeks.org/trie-insert-and-search/"
                        />
                        <Cards
                            imgscr="https://study.cs50.net/slideshows/1sKeGiZoBNyYlWLAOUmDqPcup063gNgBmf9JBaKvcVio/img/0.png" 
                            alter="RECURSION"
                            title="RECURSION"
                            description="This Card Contain the Best Youtube Tutorial and Notes For Learning the Concept of the Recursion"
                            youtubelink="https://youtu.be/cHMr5-0SDAA"
                            noteslink="https://www.geeksforgeeks.org/recursion/"
                        />
                        <Cards
                            imgscr="https://i.ytimg.com/vi/aPQY__2H3tE/maxresdefault.jpg" 
                            alter="DYNAMIC PROGRAMING"
                            title="DYNAMIC PROGRAMING"
                            description="This Card Contain the Best Youtube Tutorial For Learning the Concept of the Dynamic Programing"
                            youtubelink="https://youtu.be/nqowUJzG-iM"
                            noteslink="https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/"
                        />
                    </div>
                </div>
        </div>
    </>

    );
}

export default Dsavid;