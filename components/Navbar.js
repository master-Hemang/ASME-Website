import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {

    if (typeof window !== "undefined") {
        if (window.document.readyState == "loading") {
          window.addEventListener("load", func);
        } else {
        //   func();
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                console.log("OK");
            } else {
                $('.nav').removeClass('affix');
            }
        });
        $('.navTrigger').click(function () {
            $(this).toggleClass('active');
            console.log("Clicked menu");
            $("#mainListDiv").toggleClass("show_list");
            $("#mainListDiv").fadeIn();
        
        });
        $('.navlinks').click(function () {
            $('.navTrigger').toggleClass('active');
            console.log("Clicked menu");
            $("#mainListDiv").toggleClass("show_list");
            $("#mainListDiv").fadeIn();
        
        });
        }
      }
    

        
    return ( 
        <> 
        <nav className="nav">
        <div className="container">
            <div className="logo">
            <Link href="/"><a><Image src="/BlackLogo.png" width="75" height="75"/></a></Link>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul className="navlinks">
                    <li style={{textAlign: 'center'}}><Link href="/"><a>Home</a></Link></li>
                    <li style={{textAlign: 'center'}}><Link href="/#aboutContainer"><a >About</a></Link></li>
                    <li style={{textAlign: 'center'}}><Link href="/team"><a>Team</a></Link></li>
                    <li style={{textAlign: 'center'}}><Link href="/#eventContainer"><a>Events</a></Link></li>
                    <li style={{textAlign: 'center'}}><Link href="/resources"><a>Resources</a></Link></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>

    
    

        </>

    );
}
 
export default Navbar;